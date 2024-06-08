import SRCimg from "../../Helpers/SRCimg";
import Style from "./style";
import SRCimgPoster from "../../Helpers/SRCimgPoster";
import AgeIcon from "../../Helpers/AgeIcon";
import convertMinToHoursAndMin from "../../Helpers/convertMinutesToHoursAndMinutes";

export function DetailMovie({
  heroImg,
  heroPoster,
  title,
  age,
  genre,
  dateRelease,
  runTime,
  tagLine,
  overview,
}) {
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
                </div>
                <div className="information flex  ">
                  <div className="title-subtitle">
                    <h1>{title}</h1>
                    <div className="flex  align-center sub-title ">
                      <div className="adult">
                        <AgeIcon adult={age} />
                      </div>
                      <ul>{genre}</ul>
                      <p>{dateRelease}</p>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </Style>
    </section>
  );
}
