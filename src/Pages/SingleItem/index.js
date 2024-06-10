import { useState, useEffect, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import PrimaryLayout from "../../Components/Layout/PrimaryLayout";
import API from "../../Helpers/API";
import KeyAPI from "../../Helpers/KeyAPI";
import formatNumberToAccounting from "../../Helpers/formatNumberToAccounting";
import { DetailMovie } from "../../Components/DetailMovie";
import SRCimg from "../../Helpers/SRCimg";
import renderCountries from "../../Helpers/renderCountries";
import Credit from "../../Components/Credit";
import Gallery from "../../Components/Gallery";
import PosterPic from "../../Components/PosterPic";

export default function SingleItemMovie() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [dataGenre, SetDataGenre] = useState([]);
  const [dataCompany, SetDataCompony] = useState([]);
  const [data, setData] = useState({});
  const [dataCountries, setDataCountries] = useState([]);
  const [dataCredit, SetDataCredit] = useState([]);
  const [writerFilter, setWriterFilter] = useState([]);
  const [directorFilter, setDirectorFilter] = useState([]);

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
        setLoading(false);
      })
      .catch(function (err) {
        console.log(err);
        setLoading(false);
      });
    API.get(`movie/${id}/credits?${KeyAPI}`)
      .then((res) => {
        SetDataCredit(res.data.cast.slice(0, 10));
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
  function renderGenre() {
    return dataGenre.map(({ index, name }) => {
      return <span key={index}> {name},</span>;
    });
  }
  function renderWriter() {
    const writerSlice = writerFilter.slice(0, 2);
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
    const directorSlice = directorFilter.slice(0, 2);
    return directorSlice.map(({ id, name, job }) => {
      return (
        <div key={id}>
          <div className="title">{job}:</div>
          <div>{name}</div>
        </div>
      );
    });
  }

  function renderCompony() {
    return dataCompany.map(({ index, logo_path }) => {
      return (
        <li key={index}>
          <img src={`${SRCimg}${logo_path}`} />
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
            dateRelease={data.release_date}
            data={data}
            writer={renderWriter()}
            director={renderDirector()}
            genre={renderGenre()}
            rate={data.vote_average}
          />
          <div>
            
            <Gallery/>
            <PosterPic poster={data.poster_path}/>

            <Credit dataActing={dataCredit} />
          </div>
          <div className="right container">
            <h2>cost:</h2>
            <p>{`Status: ${data.status}`}</p>
            <p>{`Revenue:$${formatNumberToAccounting(data.revenue)}`}</p>
            <p>Budget: </p>
            <div className="budget">
              ${formatNumberToAccounting(data.budget)}
            </div>
          </div>
          <div>{renderCompony()}</div>
          <p>Original Language</p>
          <p>{data.original_language}</p>
          <p>production Countries</p>
          <div>{renderCountries(dataCountries)}</div>
          <p>{renderWriter()}</p>
          <p></p>
        </section>
      )}
    </PrimaryLayout>
  );
}
//
//
//https://api.themoviedb.org/3/movie/{movie_id}/keywords
//
//https://api.themoviedb.org/3/movie/{movie_id}/recommendations
//https://api.themoviedb.org/3/movie/{movie_id}/reviews
//https://api.themoviedb.org/3/movie/{movie_id}/videos
//https://api.themoviedb.org/3/movie/{movie_id}/similar
