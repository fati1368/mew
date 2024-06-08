import { useState, useEffect, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import PrimaryLayout from "../../Components/Layout/PrimaryLayout";
import API from "../../Helpers/API";
import KeyAPI from "../../Helpers/KeyAPI";
import formatNumberToAccounting from "../../Helpers/formatNumberToAccounting";
import { LinkOutlined } from "@ant-design/icons";
import { format } from "date-fns";
import { DetailMovie } from "../../Components/DetailMovie";
import SRCimg from "../../Helpers/SRCimg";

export default function SingleItemMovie() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [dataGenre, SetDataGenre] = useState([]);
  const [dataCompany, SetDataCompony] = useState([]);
  const [data, setData] = useState({});
  const [dataCountries, setDataCountries] = useState([]);
  const [dataRelease, setDataRelease] = useState("2024-05-01");
  useEffect(() => {
    getAPI();
    setLoading(true);
  }, [id]);
  function getAPI() {
    API.get(`movie/${id}?${KeyAPI}`)
      .then(function (res) {
        setData(res.data);
        SetDataGenre(res.data.genres);
        SetDataCompony(res.data.production_companies);
        setDataCountries(res.data.production_countries);
        setDataRelease(res.data.release_date);

        setLoading(false);
      })
      .catch(function (err) {
        console.log(err);
        setLoading(false);
      });
  }
  const formattedDate = format(new Date(dataRelease), "MM/dd/yyyy");
  function renderGenre() {
    return dataGenre.map(({ id, name }) => {
      return <span key={id}>{name},</span>;
    });
  }
  function renderCompony() {
    return dataCompany.map(({ id, name, logo_path }) => {
      return (
        <li key={id}>
          <img src={`${SRCimg}${logo_path}`} />
          <p>{name}</p>
        </li>
      );
    });
  }
  function renderCountries() {
    return dataCountries.map(({ id, iso_3166_1 }) => {
      return (
        <li key={id}>
          <p>{iso_3166_1}</p>
        </li>
      );
    });
  }

  return (
    <PrimaryLayout>
      {loading === true ? (
        <h3>Please Waite</h3>
      ) : (
        <section>
          <DetailMovie
            heroImg={data.backdrop_path}
            heroPoster={data.poster_path}
            title={data.title}
            age={data.adult}
            genre={renderGenre()}
            dateRelease={formattedDate}
            runTime={data.runtime}
            tagLine={data.tagline}
            overview={data.overview}
          />

          <div className="right container">
            <h2>cost:</h2>
            <p>{`Status: ${data.status}`}</p>
            <p>{`Revenue:$${formatNumberToAccounting(data.revenue)}`}</p>
            <Link to={data.homepage}>
              <LinkOutlined />
            </Link>
            <p>Budget: </p>
            <div className="budget">
              ${formatNumberToAccounting(data.budget)}
            </div>
          </div>
          <div>{renderCompony()}</div>
          <p>Original Language</p>
          <p>{data.original_language}</p>
          <p>production Countries</p>
          <div>{renderCountries()}</div>
        </section>
      )}
    </PrimaryLayout>
  );
}
// https://api.themoviedb.org/3/movie/{movie_id}/credits
//https://api.themoviedb.org/3/movie/{movie_id}/external_ids
//https://api.themoviedb.org/3/movie/{movie_id}/keywords
//https://api.themoviedb.org/3/movie/{movie_id}/images
//https://api.themoviedb.org/3/movie/{movie_id}/recommendations
//https://api.themoviedb.org/3/movie/{movie_id}/reviews
//https://api.themoviedb.org/3/movie/{movie_id}/videos
//https://api.themoviedb.org/3/movie/{movie_id}/similar
//
//https://api.themoviedb.org/3/movie/{movie_id}/watch/providers
