import { useEffect, useState } from "react";
import PrimaryLayout from "../../Components/Layout/PrimaryLayout";
import { useSearchParams, Link, createSearchParams } from "react-router-dom";
import axios from "axios";

export default function Search() {
  const [queryStrings, setQueryStrings] = useSearchParams();
  const [data, setData] = useState([]);
  useEffect(function () {
    if (queryStrings.get("q") && queryStrings.get("q") === !"") getAPI();
  }, []);
  function getAPI(value) {
    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=58c395f7f55c4dbbaf7934499b39a8a6&query=${
          value ? value : queryStrings.get("q")
        }&include_adult=false&language=en-US&page=1`
      )
      .then(function (res) {
        setData(res.data.results);
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  function renderResult() {
    return data.map(({ name, id, backdrop_path ,overview,media_type}) => {
      return (
        <li key={id}>
          <Link to={`/movie/${id}`}>
            <h3>{name}</h3>
          <img src={backdrop_path}/>
          <p>{overview}</p>
          <h3>{media_type}</h3>
          </Link>
        </li>
      );
    });
  }
  function onType(e) {
    setQueryStrings(createSearchParams({ q: e.target.value }));
    getAPI(e.target.value);
  }
  return (
    <PrimaryLayout>
      <h1> search</h1>
      <input
        style={{ padding: "10px", margin: "10px", width: "100%" }}
        placeholder="search"
        onChange={onType}
      />
      px
      {queryStrings.get("q")}
      <ul>{renderResult()}</ul>
    </PrimaryLayout>
  );
}
