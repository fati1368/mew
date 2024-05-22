import { Link, useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "antd";
import { useSearchParams,createSearchParams,useNavigate } from "react-router-dom";

export default function Genre() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [moviesData, setMoviesData] = useState({ data: [], metadata: {} });
  const [searchParams ,setSearchParams] =useSearchParams();
  const navigate= useNavigate()
  useEffect(function () {
    getAPI(searchParams.get("page") ? searchParams.get("page") : 1);
  }, [searchParams.get("page")]);

  function getAPI(page = 1) {
    axios
    //  .get(`https://moviesapi.codingfront.dev/api/v1/genres/${id}/movies?page=${page}`)
      .get(`https://moviesapi.codingfront.dev/api/v1/genres/${id}/movies` , {params:{page:page}})

      .then(function (res) {
        setMoviesData(res.data);
        console.log(res.data);
        console.log(res.data.metadata)
        setLoading(false);
      })
      .catch(function (err) {
        setLoading(false);
      });
  }
  function renderFarm() {
    return moviesData.data.map(({ title, poster, id }) => {
      return (
        <li key={id}>
          <Link to={`/movie/${id}`}>
            <img src={poster} />
            <h3>{title === undefined ? "" : title} </h3>
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
        {moviesData.data.length === 0 ? (
          <h1>empty data ....</h1>
        ) : (
          <div className="list">
            <ul>{renderFarm()}</ul>
          </div>
        )}
      </div>
    );
  }
  function onPageChange(page, pageSize){
console.log(page, pageSize)
navigate(`/genre/${id}?page=${page}`)
// setSearchParams(createSearchParams({page:page}))
// getAPI(page)
  }
  return (
    <Fragment>
      {render()}
      <div>
      <Pagination
        onChange={onPageChange}
          current={moviesData.metadata.current_page}
          total={moviesData.metadata.total_count}
          pageSize={moviesData.metadata.per_page}
        />
        
      </div>
    </Fragment>
  );
}
//npm i antd
//infinite scroll 