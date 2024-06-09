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

export function DetailMovie({
  heroImg,
  heroPoster,
  title,
  age,
  genre,
  dateRelease = "2024-05-01",
  runTime,
  tagLine,
  overview,
  id,
  linkWebsite,
  director,
  writer,
}) {
  const formattedDate = format(new Date(dateRelease), "MM/dd/yyyy");
  const [dataSocialLink, setDataSocialLink] = useState({});
  const [loading, setLoading] = useState(false);
  const { facebook_id, imdb_id, instagram_id, twitter_id } = dataSocialLink;

  useEffect(() => {
    getAPI();
    setLoading(true);
  }, [id]);
  function getAPI() {
    API.get(`movie/${id}/external_ids?${KeyAPI}`)
      .then(function (res) {
        setDataSocialLink(res.data);
        setLoading(false);
      })
      .catch(function (err) {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <section className="hero-section">
      <Style>
        <div
          className="hero-image relative"
          style={{
            backgroundImage: `url(${SRCimgPoster}${heroImg})`,
          }}
        >
          <div className="transparent absolute"></div>
          <div className="container">
            <div className="hero-container">
              <div className="poster-information flex">
                <div className="poster">
                  <img src={`${SRCimg}${heroPoster}`} />
                  <div className="social">
                    <IconSocial
                      homePage={linkWebsite}
                      facebook={facebook_id}
                      imdb={imdb_id}
                      instagram={instagram_id}
                      twitter={twitter_id}
                    />
                  </div>
                </div>
                <div className="information flex  ">
                  <div className="title-subtitle">
                    <h1>{title}</h1>
                    <div className="flex  align-center sub-title ">
                      <div className="adult">
                        <AgeIcon adult={age} />
                      </div>
                      <ul>{genre}</ul>
                      <p>{formattedDate}</p>
                      <p>{convertMinToHoursAndMin(runTime)}</p>
                    </div>
                  </div>
                  <div className="overview-tagline">
                    <h4>Overview:</h4>
                    <div className="overview">
                      <p className="tagline">{tagLine}</p>
                      <p>{overview}</p>
                    </div>
                  </div>
                  <div>
                  <div className="flex space-between col-12 gap">{director}{writer}</div>

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
