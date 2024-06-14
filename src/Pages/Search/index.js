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
import Card from "../../Components/Layout/Card";
import CardPerson from "../../Components/Layout/CardPerson";

export default function Search() {
  const [queryStrings, setQueryStrings] = useSearchParams();
  const [pageSearchParams, setPageSearchParams] = useSearchParams();
  const [dataNull, setDataNull] = useState([]);
  const [dataMovies, setDataMovies] = useState([]);
  const [dataPerson, setDataPerson] = useState([]);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  
  useEffect(
    function () {
   
      // getAPI(pageSearchParams.get("page") ? pageSearchParams.get("page") : 1);

      if (queryStrings.get("name") && queryStrings.get("name") == !"") {
        getAPI(queryStrings.get("name"));
        }
        // const storedResult = sessionStorage.getItem("save");
        //   if (storedResult && storedResult ==! ""){
        //     const result = JSON.parse(storedResult)
        //     setData(result)
        //   }
      
    },
    [queryStrings]
    // [pageSearchParams.get("page")]
  );
  // useEffect(() => {
  //   const throttleTimeout = setTimeout(() => {
  //     if (queryStrings.get('name') && queryStrings.get('name') !== '') {
  //       getAPI(queryStrings.get('name'));
  //     }
  //   }, 500);

  //   return () => clearTimeout(throttleTimeout);
  // }, [queryStrings, ]);
  async function getAPI(queryName) {
    try {
      const res = await API.get(
        `search/multi?${KeyAPI}&query=${queryName}&include_adult=false&language=en-US&`
        // { params: { page: page } }
        );
        setData(res.data);
        sessionStorage.setItem("save", JSON.stringify(data));
      setDataNull(
        data.results.filter(
          (results) =>
            results.poster_path !== null || results.profile_path !== null
          )
          );
      setDataMovies(
        dataNull.filter(
          (dataNull) =>
            dataNull.media_type === "movie" || dataNull.media_type === "tv"
        )
      );
      setDataPerson(
        dataNull.filter((dataNull) => dataNull.media_type === "person")
      );
    } catch (error) {
      console.error("Error data:", error);
    }
  }

  const onType = (e) => {
    const queryName = e.target.value.trim();
    if (queryName.length > 2) {
      setQueryStrings(createSearchParams({ name: queryName, page: "1" }));
      getAPI(queryName);
      // sessionStorage.setItem("searchName", queryName);
    }
  };
  console.log(data, "search");
  console.log(dataNull, "null");
  function onPageChange(page) {
    navigate(`/search?name=${queryStrings.get("name")}&page=${page}`);
  }
  function onEnter(e) {
    if (e.key === "Enter") {
      navigate(`/search?name=${e.target.value}&page=1`);
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
              <Button
                size="large"
                onClick={() => {
                  navigate(`/search?name=${queryStrings.get("name")}&page=1`);
                }}
              >
                Search
              </Button>
            </div>
            {/* <ResultSearch dataMovie={dataMovies} dataPerson={dataPerson}/> */}
            <Card dataAPI={dataMovies} mediaType="" />
            <CardPerson dataAPI={dataPerson} />

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
