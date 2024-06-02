import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import IConSearch from "../../Animation&Icon/Search";
import Style from "./style";
export default function Search() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [showResults, setShowResults] = useState(false);
  function handleSearch(e) {
    const query = e.target.value.trim();
    if (query.length >= 3) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/multi?api_key=58c395f7f55c4dbbaf7934499b39a8a6&query=${query}&include_adult=false&language=en-US&page=1`
        )
        .then((res) => {
          setData(res.data.results);
          setShowResults(true);
        })
        .catch((err) => {
          alert("API doesn't response");
        });
    } else {
      setData([]);
      setShowResults(false);
    }
  }
  function renderResult() {
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
