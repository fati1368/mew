import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import IConSearch from "../../Animation&Icon/Search";
import Style from "./style";
import KeyAPI from "../../Helpers/KeyAPI";
import API from "../../Helpers/API";
import {  message } from 'antd';

export default function Search({ callBack }) {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [showResults, setShowResults] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messageApi, messageContext] = message.useMessage();
  callBack(showResults);

  const warning = () => {
    messageApi.open({
      type: 'warning',
      content: 'please try again later',
    });
  };
  const ref = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowResults(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
   
  }, [ref]);

  async function handleSearch(e) {
    const query = e.target.value.trim();
    if (query.length >= 3) {
      try {
        const res =await API.get(`search/multi?${KeyAPI}&query=${query}`);
        setData(res.data.results);
        setShowResults(true);
      } catch (err) {
        warning()
      }
    } else {
      setData([]);
      setShowResults(false);
    }
    setInputValue(query);
  }
  function onEnter(e) {
    if (e.key === "Enter") {
      navigate(`/search?name=${e.target.value}&page=1`);
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
  return (
    <div className="Search">
      <Style>
      {messageContext}
        <div className="relative">
          <div
            className={` searchInput flex space-between align-center ${
              showResults ? "active" : ""
            }`}
          >
            <Link
              className=" iconSearch"
              to={`/search?name=${inputValue}&page=1`}
            >
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
    </div>
  );
}
