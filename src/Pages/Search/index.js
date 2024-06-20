import { useEffect, useState } from "react";
import PrimaryLayout from "../../Components/Layout/PrimaryLayout";
import { FloatButton } from "antd";
import ScrollTop from "../../Helpers/ScrollTop";
import Loading from "../../Components/Loading";

import {
  useSearchParams,
  createSearchParams,
  useNavigate,
  useParams,
} from "react-router-dom";
import API from "../../Helpers/API";
import KeyAPI from "../../Helpers/KeyAPI";
import React from "react";
import Style from "./style";
import { Button, Radio, Pagination, List, Input } from "antd";
import Card from "../../Components/Layout/Card";
import CardPerson from "../../Components/Layout/CardPerson";
import CardCollection from "../../Components/Layout/CardCollection";
import { message } from "antd";

export default function Search() {
  const [queryName, setQueryName] = useSearchParams();
  const [queryPage, setQueryPage] = useSearchParams();
  const [currentPage, setCurrentPage] = useState([]);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { typeParams } = useParams();
  const [messageApi, messageContext] = message.useMessage();
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(true);

  const warning = () => {
    messageApi.open({
      type: "warning",
      content: "please try again later",
    });
  };
  useEffect(
    function () {
      getAPI(queryName.get("q"), queryPage.get("page"));
      ScrollTop();
    },
    [queryPage, typeParams, queryName]
  );
  async function getAPI(name, page) {
    const currentName = name ? name : "";
    const currentPage = page ? page : "1";
    console.log(page, "faaaat");
    try {
      const res = await API.get(
        `search/${typeParams}?${KeyAPI}&query=${currentName}&page=${currentPage}`
      );
      setData(
        res.data.results.filter(
          (results) =>
            results.poster_path !== null || results.profile_path !== null
        )
      );
      console.log(data , "correct")
      setFilter(
        res.data.results.filter(
          (results) =>
            (results.media_type === "tv" && results.poster_path !== null) ||
            (results.media_type === "movie" && results.poster_path !== null)
        )
      );
      setCurrentPage(res.data);
    } catch (error) {
      warning();
      setLoading(false);
    }
  }

  const onType = (e) => {
    const currentName = e.target.value.trim();
    if (currentName.length > 3) {
      setQueryName(createSearchParams({ q: currentName, page: "1" }));
      setTimeout(() => {
        getAPI(currentName);
      }, 2000);
    }
    console.log(queryName.get("q"), "fati pro");
  };

  function onEnter(e) {
    if (e.key === "Enter") {
      const queryName = e.target.value.trim();
      if (queryName.length > 1) {
        navigate(`/search/${typeParams}?q=${queryName}&page=1`);
      } else {
        navigate(`/search/${typeParams}`);
      }
    }
  }
  const typeChange = (e) => {
    const selectedType = e.target.value;
    navigate(`/search/${selectedType}?q=${queryName.get("q")}&page=1`);
  };
  function onPageChange(e) {
    setQueryPage(
      createSearchParams({
        q: queryName.get("q"),
        page: e,
      })
    );
  }
  return (
    <PrimaryLayout>
      <section className="search">
        {messageContext}
        <Style>
          <div className="container">
            <h1 className=" pb-5 pt-5">
              {" "}
              Search: <span> {queryName.get("q")}</span>
            </h1>
            <div className="search">
              <div className="input flex pb-5 pt-5">
                <input
                  onKeyDown={onEnter}
                  onChange={onType}
                  placeholder="input search text"
                />
                <Button
                  size="large"
                  onClick={() => {
                    navigate(
                      `/search/${typeParams}?q=${queryName.get("q")}&page=1`
                    );
                  }}
                >
                  Search
                </Button>
              </div>
              <div className="button flex  ">
                <Radio.Group
                  className="mb-3"
                  value={typeParams}
                  onChange={typeChange}
                >
                  <Radio.Button value="movie">Movies</Radio.Button>
                  <Radio.Button value="tv">TV Shows</Radio.Button>
                  <Radio.Button value="person">People</Radio.Button>
                  <Radio.Button value="multi">ALL</Radio.Button>
                </Radio.Group>
              </div>
              {typeParams === "multi" ? (
                <Card dataAPI={filter} mediaType="" />
              ) : (
                ""
              )}
              {typeParams === "tv" ? (
                <Card dataAPI={data} mediaType="tv" />
              ) : (
                ""
              )}
              {typeParams === "movie" ? (
                <Card dataAPI={data} mediaType="movie" />
              ) : (
                ""
              )}
              {typeParams === "person" ? <CardPerson dataAPI={data} /> : ""}
              <Pagination
                onChange={onPageChange}
                Current={currentPage.page}
                total={currentPage.total_pages}
                style={{ colorText: "#FFF" }}
              />
            </div>
          </div>
        </Style>
      </section>
      <FloatButton.BackTop />
    </PrimaryLayout>
  );
}
