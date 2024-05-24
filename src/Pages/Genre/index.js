import { Link, useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "antd";
import {
  useSearchParams,
  createSearchParams,
  useNavigate,
} from "react-router-dom";

export default function Genre() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [moviesData, setMoviesData] = useState({ results: [] });
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(
    function () {
      getAPI(searchParams.get("page") ? searchParams.get("page") : 1);
    },
    [searchParams.get("page")]
  );

  function getAPI(page = 1) {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=58c395f7f55c4dbbaf7934499b39a8a6&include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&with_genres=${id}`,
        { params: { page: page } }
      )

      .then(function (res) {
        setMoviesData(res.data);
        setLoading(false);
      })
      .catch(function (err) {
        setLoading(false);
      });
  }
  function renderFarm() {
    return moviesData.results.map(({ name, poster_path, id, overview }) => {
      return (
        <li key={id}>
          <Link to={`/movie/${id}`}>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
            <h3>{name === undefined ? "" : name} </h3>
            <p>{overview}</p>
          </Link>
        </li>
      );
    });
  }
  function render() {
    if (loading === true) {
      return <h1>loading ....</h1>;
    }
    return (
      <div className="movie-list">
        {moviesData.results.length === 0 ? (
          <h1>empty data ....</h1>
        ) : (
          <div className="list">
            <ul>{renderFarm()}</ul>
          </div>
        )}
      </div>
    );
  }
  function onPageChange(page) {
    navigate(`/genre/${id}?page=${page}`);
  }
  return (
    <Fragment>
      {render()}
      <div>
        <Pagination
          onChange={onPageChange}
          current={moviesData.page}
          total={moviesData.total_pages}
        />
      </div>
    </Fragment>
  );
}
