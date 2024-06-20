import Style from "./style";
import formatNumberToAccounting from "../../Helpers/formatNumberToAccounting";
import renderCountries from "../../Helpers/renderCountries";
import SRCimg from "../../Helpers/SRCimg";

export default function TitleSingleItemTV({ data, colorTitle }) {
  const {
    status,
    episode_run_time,
    name,
    number_of_episodes,
    number_of_seasons,
    tagline,
    original_language,
    production_companies = [],
    production_countries = [],
  } = data;
  function renderCompony() {
    return production_companies.map(({ index, logo_path }) => {
      return logo_path === null ? (
        ""
      ) : (
        <li key={index}>
          <img src={`${SRCimg}${logo_path}`} />
        </li>
      );
    });
  }
  const RunTime = () => {
    if (episode_run_time && episode_run_time.length > 0) {
      return (
        <div className="Time">
          <h3>Time Episode: </h3>
          <p>{episode_run_time} min</p>
        </div>
      ) 
    }
  }
  return (
    <section className="title-single">
    <Style>
      <div className=" bg section-space relative">
        <div className=" relative">
          <div className="sectionTitle pb-5">
            <h2 style={{ color: `${colorTitle}` }}>{name}</h2>
            <h4 className="pb-5">{tagline}</h4>
            <div className=" cost  pt-5">
              <div className=" flex space-between pb-5">
                <div className="status">
                  <h3>Status: </h3>
                  <p>{status}</p>
                </div>
              <RunTime />
                <div className="Episode">
                  <h3> Episodes: </h3>
                  <p>{number_of_episodes}</p>
                </div>
                <div className="budget">
                  <h3> Seasons: </h3>
                  <p>{number_of_seasons}</p>
                </div>
              </div>
              <div className="flex  space-between pt-5">
                <div className="language">
                  <h4> Language</h4>
                  <p>{original_language}</p>
                </div>
                <div className="country ">
                  <h4> Countries</h4>
                  <div className="countries">
                    {renderCountries(production_countries)}
                  </div>
                </div>
                <div className="company flex align-center">
                  {renderCompony()}
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
