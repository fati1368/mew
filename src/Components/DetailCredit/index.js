import SRCimg from "../../Helpers/SRCimg";
import Style from "./style";
import SRCposter from "../../Helpers/SRCProfile";
import AgeIcon from "../../Helpers/AgeIcon";
import convertMinToHoursAndMin from "../../Helpers/convertMinutesToHoursAndMinutes";
import { format } from "date-fns";
import IconSocial from "../../Helpers/IconSocial";
import KeyAPI from "../../Helpers/KeyAPI";
import { useState, useEffect, Fragment } from "react";
import API from "../../Helpers/API";
import UserScore from "../../Helpers/Score";
import { Link, useParams } from "react-router-dom";
import { Flex, Progress } from "antd";
import ProfilePic from "../ProfilePic";

export default function DetailCredit({
  birthday = "2024-05-01",
  deathday = "2024-05-01",
  data,
  background,
}) {
  const { id } = useParams();
  const [dataSocialLink, setDataSocialLink] = useState({});
  const [loading, setLoading] = useState(false);
  const { facebook_id, instagram_id, twitter_id } = dataSocialLink;
  const { biography, homepage, known_for_department, name, profile_path } =
    data;

  const birthDay =
    birthday == Number ? format(new Date(birthday), "MM/dd/yyyy") : "";
  const deathDay =
    deathday == Number ? format(new Date(deathday), "MM/dd/yyyy") : "";

  useEffect(() => {
    getAPI();
    setLoading(true);
  }, [id]);
  async function getAPI() {
    try {
      const res = await API.get(`person/${id}/external_ids?${KeyAPI}`);
      setDataSocialLink(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  const biographyCheck = () => {
    if (biography && biography.length > 0) {
      return (
        <div className="pt-5 overview-tagline">
          <h4>Biography:</h4>
          <div className="overview">
            <p>{biography}</p>
          </div>
        </div>
      );
    }
  };

  return (
    <section className=" hero-section">
      <Style>

        <div
          className="hero-image relative"
          style={{
            backgroundImage: `url(${background})`
            ,
          }}
        >
          <div className="transparent absolute"></div>
          <div className="container">
            <div className="hero-container">
              <div className="poster-information flex">
                <div className="poster">
                  <ProfilePic profile={profile_path} />
                  {/* <img src={`${SRCposter}${profile_path}`} /> */}
                  <div className="social">
                    <IconSocial
                      homePage={homepage}
                      facebook={facebook_id}
                      instagram={instagram_id}
                      twitter={twitter_id}
                    />
                  </div>
                </div>
                <div className="information flex  ">
                  <div className="title-subtitle">
                    <h1>{name}</h1>
                    <div className="flex  align-center sub-title ">
                      <p>Department: {known_for_department} </p>
                      <p>Birth Day: {birthDay ? birthDay : "-"}</p>
                      <p>Death Day: {deathDay ? deathDay : "-"} </p>
                    </div>
                    <div>

                  {biographyCheck()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Style>
    </section>
  );
}
