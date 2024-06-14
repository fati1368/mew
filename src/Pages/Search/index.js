import { useEffect, useState } from "react";
import PrimaryLayout from "../../Components/Layout/PrimaryLayout";
import {
  useSearchParams,
  createSearchParams,
  useNavigate,
} from "react-router-dom";
import API from "../../Helpers/API";
import KeyAPI from "../../Helpers/KeyAPI";
import React from "react";
import { palette } from "../../Style/Theme";
import Style from "./style";
import { Button, Radio, Pagination, List, Input } from "antd";
import ResultSearch from "../../Components/ResultSearch";

export default function Search() {
  const { Search } = Input;
  const [queryStrings, setQueryStrings] = useSearchParams();
  const [pageSearchParams, setPageSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [dataNull, SetDataNull] = useState([]);
  const [dataMovies, setDataMovies] = useState([]);
  const [dataTV, setDataTV] = useState([]);
  const [dataPerson, setDataPerson] = useState([]);
  const [dataCompany, setDataCompany] = useState([]);
  const [dataCollection, setDataCollection] = useState([]);
  const [dataNullProfile, SetDataNullProfile] = useState([]);

  useEffect(
    function () {
      // const storedName = sessionStorage.getItem("searchName");
      // if (storedName) {
      //   setQueryStrings(createSearchParams({ name: storedName, page: "1" }));
      //   getAPI(storedName);
      // }

      // getAPI(pageSearchParams.get("page") ? pageSearchParams.get("page") : 1);
      getAPI();
    },
    []
    // [pageSearchParams.get("page")]
  );
  function getAPI(queryName) {
    API.get(
      `search/multi?${KeyAPI}&query=${
        queryName ? queryName : queryStrings.get("name")
      }&include_adult=false&language=en-US&`
      // { params: { page: page } }
    )
      .then(function (res) {
        setData(res.data);
        SetDataNull(
          res.data.results.filter((results) => results.poster_path !== null)
        );
        SetDataNullProfile(
          res.data.results.filter((results) => results.profile_path !== null)
        );
        setDataMovies(
          dataNull.filter(
            (dataNull) =>
              dataNull.media_type === "movie" || dataNull.media_type === "tv"
          )
        );
        setDataPerson(
          dataNullProfile.filter(
            (dataNullProfile) => dataNullProfile.media_type === "person"
          )
        );
        setDataCompany(
          res.data.results.filter((results) => results.media_type === "company")
        );
        setDataCollection(
          dataNull.filter((dataNull) => dataNull.media_type === "collection")
        );

        console.log(data, "salam");
      })
      .catch(function (err) {
        console.log(err);
        alert("not found");
      });
  }

  console.log(data, queryStrings, "search");
  const onType = (e) => {
    const queryName = e.target.value.trim();
    if (queryName.length > 2) {
      setQueryStrings(createSearchParams({ name: queryName, page: "1" }));
      getAPI(queryName);
      // sessionStorage.setItem("searchName", queryName);
    }
  };
  function onPageChange(page) {
    navigate(`/search?name=${queryStrings.get("name")}&page=${page}`);
  }
  function onEnter(e) {
    if (e.key === "Enter") {
      navigate(`/search?q=${e.target.value}&page=1`);
    }
  }
  const [placement, SetPlacement] = useState("tv");
  const placementChange = (e) => {
    const selectedPlacement = e.target.value;
    SetPlacement(selectedPlacement);
    // callBack(selectedPlacement);
  };

  return (
    <PrimaryLayout>
      <Style>
        {queryStrings.get("name")}
        <div className="container">
          <h1 className=" pb-5 pt-5"> Search</h1>
          <div className="search">
            <div className="input flex pb-5 pt-5">
              <input
                onKeyDown={onEnter}
                onChange={onType}
                placeholder="input search text"
                type="text"
              />
              <Button size="large" onClick={() => {}}>
                Search
              </Button>
            </div>
            <ResultSearch movie={dataMovies} collection={dataCollection} person={dataPerson} company={dataCompany}/>
            {/* <div className="button flex  ">
              <Radio.Group
                className="mb-3"
                value={placement}
                onChange={placementChange}
              >
                <Radio.Button value="movie">Movies</Radio.Button>
                <Radio.Button value="tv">TV Shows</Radio.Button>
                <Radio.Button value="People">People</Radio.Button>
                <Radio.Button value="Companies">Companies</Radio.Button>
                <Radio.Button value="Collections">Collections</Radio.Button>
              </Radio.Group>
            </div> */}

            {/* <Pagination
                onChange={onPageChange}
                Current={data.page}
                total={data.total_pages}
                style={{ colorText: "#FFF" }}
              /> */}
          </div>
        </div>
      </Style>
    </PrimaryLayout>
  );
}
