import { useEffect, useState } from "react";
import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";
import { useSearchParams, Link, createSearchParams } from "react-router-dom";
import axios from "axios";

export default function Search() {
  const [queryStrings, setQueryStrings] = useSearchParams();
  const [data, setData] = useState({
    data: [],
    metaData: {},
  });
  useEffect(function () {
    if (queryStrings.get("q") && queryStrings.get("q") === !"") getAPI();
  }, []);
  function getAPI(value) {
    axios
      .get(
        `https://moviesapi.codingfront.dev/api/v1/movies?q=${
          value ? value : queryStrings.get("q")
        }`
      )
      .then(function (res) {
        console.log(res.data);
        setData(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  function renderResult() {
    return data.data.map(({ title, id }) => {
      return (
        <li key={id}>
          <Link to={`/movie/${id}`}>{title}</Link>
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
//delay dadan dar search ham barresi shavad
