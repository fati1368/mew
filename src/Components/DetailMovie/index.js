import SRCimg from "../../Helpers/SRCimg";
import Style from "./style";
import SRCimgPoster from "../../Helpers/SRCimgPoster";
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

export function DetailMovie({
  dateRelease = "2024-05-01",
  data,
  writer,
  director,
  currentData,
}) {
  const { id } = useParams();
  ;
  const [dataSocialLink, setDataSocialLink] = useState({});
  const [loading, setLoading] = useState(false);
  const { facebook_id, imdb_id, instagram_id, twitter_id } = dataSocialLink;
  const {
    backdrop_path,
    poster_path,
    title,
    name,
    adult,
    runtime="",
    tagline,
    overview,
    homepage,
    genres = [],
    vote_average,
  } = data;
  const conicColors = {
    "0%": "#4cff00",
    "50%": "#ffc107",
    "100%": "#ffc107",
  };
  useEffect(() => {
    getAPI();
    setLoading(true);
  }, [id]);
  function getAPI() {
    API.get(
      `${currentData === "tv" ? "tv" : "movie"}/${id}/external_ids?${KeyAPI}`
    )
      .then(function (res) {
        setDataSocialLink(res.data);
        setLoading(false);
      })
      .catch(function (err) {
        console.log(err);
        setLoading(false);
      });
  }
  const formattedDate =dateRelease==Number? format(new Date(dateRelease), "MM/dd/yyyy") : "" ;
  function renderGenre() {
    return genres.map(({ id, name }) => {
      return <span key={id}> {name},</span>;
    });
  }
  function renderWriter() {
    const writerSlice = writer.slice(0, 2);
    return writerSlice.map(({ id, name, job }) => {
      return (
        <div key={id}>
          <div className="title">{job}:</div>
          <div>{name}</div>
        </div>
      );
    });
  }
  function renderDirector() {
    const directorSlice = director.slice(0, 2);
    return directorSlice.map(({ id, name, job }) => {
      return (
        <div key={id}>
          <div className="title">{job}:</div>
          <div>{name}</div>
        </div>
      );
    });
  }
  const overviewCheck = () => {
    if (overview && overview.length > 0) {
      return (
        <div className="overview-tagline">
          <h4>Overview:</h4>
          <div className="overview">
            <p className="tagline">{tagline}</p>
            <p>{overview}</p>
          </div>
        </div>
      );
    }
  };

  return (
    <section className="hero-section">
      <Style>
        <div
          className="hero-image relative"
          style={{
            backgroundImage: `url(${SRCimgPoster}${backdrop_path})`,
          }}
        >
          <div className="transparent absolute"></div>
          <div className="container">
            <div className="hero-container">
              <div className="poster-information flex">
                <div className="poster">
                  <img src={`${SRCimg}${poster_path}`} />
                  <div className="social">
                    <IconSocial
                      homePage={homepage}
                      facebook={facebook_id}
                      imdb={imdb_id}
                      instagram={instagram_id}
                      twitter={twitter_id}
                    />
                  </div>
                </div>
                <div className="information flex  ">
                  <div className="title-subtitle">
                    <h1>{currentData === "movie" ? title : name}</h1>
                    <div className="flex  align-center sub-title ">
                      <div className="adult">
                        <AgeIcon adult={adult} />
                      </div>
                      <ul>{renderGenre()}</ul>
                      <p>{formattedDate}</p>
                      <p>{runtime ? convertMinToHoursAndMin(runtime) : ""}</p>
                    </div>
                  </div>
                  <div className="vote flex">
                    <div className="user-score relative">
                      <Progress
                        type="dashboard"
                        percent={UserScore(vote_average)}
                        strokeColor={conicColors}
                      />
                    </div>
                    <div>
                      <h3>user</h3>
                      <h3>Score</h3>
                    </div>
                  </div>
                  {overviewCheck()}

                  <div>
                    <div className="flex space-between col-12 gap mt-5">
                      {renderDirector()}
                      {renderWriter()}
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
