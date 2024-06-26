import Style from "./style";
import formatNumberToAccounting from "../../Helpers/formatNumberToAccounting";
import renderCountries from "../../Helpers/renderCountries";
import SRCimg from "../../Helpers/SRCimg";

export default function TitleSingleItemMovie({ data, colorTitle }) {
  const {
    status,
    revenue,
    title,
    budget,
    tagline,
    original_language,
    production_companies = [],
    production_countries = [],
  } = data;

  function renderCompony() {
    const company=production_companies.slice(0,4)
    return company.map(({ index, logo_path }) => {
      return logo_path === null ? (
        ""
      ) : (
        <li key={index}>
          <img src={`${SRCimg}${logo_path}`} />
        </li>
      );
    });
  }
  return (
    <Style>
      <div className=" bg section-space relative">
        <div className=" relative">
          <div className="sectionTitle pb-5">
            <h2 style={{ color: `${colorTitle}` }}>{title}</h2>
            <h4 className="pb-5">{tagline}</h4>
            <div className=" cost  pt-5">
              <div className=" flex space-between pb-5">
                <div className="status">
                  <h3>Status: </h3>
                  <p>{status}</p>
                </div>
                <div className="revenue">
                  <h3>Revenue: </h3>
                  <p>${formatNumberToAccounting(revenue)}</p>
                </div>
                <div className="budget">
                  <h3>Budget: </h3>
                  <p>${formatNumberToAccounting(budget)}</p>
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
  );
}
