import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import IConSearch from "../../Animation&Icon/Search";
import Style from "./style";
import KeyAPI from "../../Helpers/KeyAPI";
import API from "../../Helpers/API";
export default function Search() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(true);
  function handleSearch(e) {
    const query = e.target.value.trim();
    if (query.length >= 3) {
      API.get(
        `search/multi?${KeyAPI}&query=${query}&include_adult=false&language=en-US&page=1`
      )
        .then((res) => {
          setData(res.data.results);
          setShowResults(true);
          setLoading(false);
        })
        .catch((err) => {
          alert("server doesn't response Please Check your Connection");
          setLoading(false);
        });
    } else {
      setData([]);
      setShowResults(false);
    }
  }
  function renderResult() {
    if (loading === true) {
      return <p>Please waite</p>;
    }
    return data.map(({ name, id }) => {
      return (
        <li key={id}>
          <Link to={`/movie/${id}`}>
            <p>{name}</p>
          </Link>
        </li>
      );
    });
  }
  function onEnter(e) {
    if (e.key === "Enter") {
      navigate(`/search?q=${e.target.value}`);
    }
  }
  return (
    <Style>
      <div className="relative">
        <div className={`relative searchInput ${showResults ? "active" : ""}`}>
          <Link className="absolute iconSearch" to={`/search`}>
            <IConSearch />
          </Link>
          <input
            onKeyDown={onEnter}
            onChange={handleSearch}
            placeholder="Find Movies & Series"
          />
        </div>
        {showResults && (
          <div className="absolute search-box">
            <ul>{renderResult()}</ul>
          </div>
        )}
      </div>
    </Style>
  );
}
