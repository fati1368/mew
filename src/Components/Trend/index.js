import { Space, Switch } from "antd";
import { useEffect, useState } from "react";
import KeyAPI from "../../Helpers/KeyAPI";
import API from "../../Helpers/API";
import AlertError from "../../Helpers/AlertError";
import SRCimg from "../../Helpers/SRCimg";
import { Link } from "react-router-dom";
import Style from "./style";

export default function Trend({ time = "day" }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(
    function () {
      getAPI();
    },
    [time]
  );
  function getAPI() {
    API.get(`trending/all/${time}?${KeyAPI}`)
      .then((res) => {
        setData(res.data.results.slice(0, 6));
        setLoading(false);
      })
      .catch((err) => {
        <AlertError />;
        setLoading(false);
      });
  }

  const renderFarm = () => {
    return data.map(({ id, name, title, poster_path }) => (
      <Link key={id} to={`/movie/${id}`}>
        <li className="col " >
          <div className=" containerCard  ">
            <div
              className="front "
              style={{backgroundImage:`url(${SRCimg}${poster_path})`}}
            >
              <div className="inner">
                <p>{name}{title}</p>
              </div>
            </div>
            <div className="back ">
              <div className="inner ">
                <p>
                  The Burj Khal
                </p>
              </div>
            </div>
          </div>
        </li>

        {/* <li className="col-4">
          <img alt={title} src={`${SRCimg}${poster_path}`} />
          <div className="title">
            <h4>
              {name}
              {title}
            </h4>
          </div>
        </li> */}
      </Link>
    ));
  };

  return (
    <section className="trend ">
      <Style>
        <div className=" bg section-space relative">
          <div className=" relative">
            <h2>Trending</h2>
            <Space direction="vertical">
              <Switch
                checkedChildren="day"
                unCheckedChildren="week"
                defaultChecked
              />
            </Space>
            <ul className="flex justify-center">{renderFarm()}</ul>
          </div>
        </div>
      </Style>
    </section>
  );
}
