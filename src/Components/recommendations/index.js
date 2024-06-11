import Card from "../Layout/Card";
import { useState, useEffect, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../../Helpers/API";
import KeyAPI from "../../Helpers/KeyAPI";
import React from "react";
import Style from "./style";

export default function Recommendations() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    getAPI();
    setLoading(true);
  }, [id]);
  function getAPI() {
    API.get(`movie/${id}/recommendations?${KeyAPI}`)
      .then(function (res) {
        setData(res.data.results.slice(0, 6));
        setLoading(false);
      })
      .catch(function (err) {
        console.log(err);
        setLoading(false);
      });
  }
  
  const convertObjectToArray = Object.values(data);
  //const result = convertObjectToArray[0];

  console.log(data, "similar");
  return(
<Style>
<h3>Recommendations</h3>
    <Card dataAPI={convertObjectToArray} mediaType="movie" />;
</Style>
) 
}
