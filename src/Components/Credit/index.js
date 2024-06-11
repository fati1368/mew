import { useEffect, useState } from "react";
import API from "../../Helpers/API";
import Style from "./style";
import SRCimg from "../../Helpers/SRCimg";
import KeyAPI from "../../Helpers/KeyAPI";
import { Avatar, List, message } from "antd";
import { Link, useParams } from "react-router-dom";

export default function Credit ({
  currentData,
  callBackWriter,
  callBackDirector,
}) {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [dataCredit, SetDataCredit] = useState([]);
  const [writerFilter, setWriterFilter] = useState([]);
  const [directorFilter, setDirectorFilter] = useState([]);
  useEffect(() => {
    getAPI();
    setLoading(true);
  }, [id]);
  function getAPI() {
    API.get(`${currentData === "tv" ? "tv" : "movie"}/${id}/credits?${KeyAPI}`)
      .then((res) => {
        SetDataCredit(
          res.data.cast.filter((cast) => cast.profile_path !== null)
        );
        setLoading(false);
        setWriterFilter(
          res.data.crew.filter((crew) => crew.department === "Writing")
        );
        setDirectorFilter(
          res.data.crew.filter((crew) => crew.job === "Director")
        );
      })
      .catch((err) => {
        setLoading(false);
      });
  }
  
    callBackWriter(writerFilter);
    callBackDirector(directorFilter);
  

  const DataActing = dataCredit.slice(0, 11);
  return (
    <Style>
      <nav className="credit pt-5 mt-5">
        <h3 className="pb-5 pt-5">Top Billed Cast</h3>
        <List
          itemLayout="horizontal"
          dataSource={DataActing}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src={`${SRCimg}${item.profile_path}`} size={80} />
                }
                title={
                  <p className="title-name">
                    Name: <span>{item.name}</span>
                  </p>
                }
                description={
                  <p>
                    Character: <span>{item.character}</span>
                  </p>
                }
              />
            </List.Item>
          )}
        />
      </nav>
    </Style>
  );
}
