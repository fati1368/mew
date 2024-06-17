import { useEffect, useState,useRef } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import IConSearch from "../../Animation&Icon/Search";
import Style from "./style";
import KeyAPI from "../../Helpers/KeyAPI";
import API from "../../Helpers/API";
import alertError from "../../Helpers/AlertError";

export default function Search({ callBack }) {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(true);
  const ref = useRef(null)
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowResults(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  function handleSearch(e) {
    const query = e.target.value.trim();
    if (query.length >= 3) {
      callBack(query);
      API.get(
        `search/multi?${KeyAPI}&query=${query}&include_adult=false&language=en-US&page=1`
      )
        .then((res) => {
          setData(res.data.results);
          setShowResults(true);
          setLoading(false);
        })
        .catch((err) => {
          alertError();
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
      navigate(`/search?name=${e.target.value}`);
    }
  }
  return (
    <Style>
      <div className="relative">
        <div
          className={` searchInput flex space-between align-center ${
            showResults ? "active" : ""
          }`}
        >
          <Link className=" iconSearch" to={`/search`}>
            <IConSearch />
          </Link>
          <input
            onKeyDown={onEnter}
            onChange={handleSearch}
            placeholder="Find Movies & Series"
          />
        </div>
        {showResults && (
          <div ref={ref} className="absolute search-box">
            <ul>{renderResult()}</ul>
          </div>
        )}
      </div>
    </Style>
  );
}

