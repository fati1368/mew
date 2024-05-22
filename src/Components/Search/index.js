import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
export default function Search() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  function handleSearch(e) {
    if (e.target.value.length >= 3) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/multi?api_key=58c395f7f55c4dbbaf7934499b39a8a6&query=${e.target.value}&include_adult=false&language=en-US&page=1`
        )
        .then(function (res) {
          setData(res.data.results);
        })
        .catch(function (err) {
          console.log(err);
        });
    }
    console.log(e.target.value);
  }
  function renderResult() {
    return data.map(({ name, id }) => {
      return (
        <li key={id}>
          <Link to={`/movie/${id}`}>{name}</Link>
        </li>
      );
    });
  }
  function onEnter(e) {
    console.log(e);
    if (e.key === "Enter") {
      navigate(`/search?q=${e.target.value}`);
    }
  }
  return (
    <div className="search">
      <input
        onKeyDown={onEnter}
        onChange={handleSearch}
        placeholder="Find MOvie & SEries"
      />
      <div className="search-box">
        <ul>{renderResult()}</ul>
      </div>
    </div>
  );
}
