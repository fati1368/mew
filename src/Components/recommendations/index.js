import Card from "../Layout/Card";
import Style from "./style";
import { useState, useEffect, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../../Helpers/API";
import KeyAPI from "../../Helpers/KeyAPI";
import React from "react";

export default function Recommendations({ currentData }) {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    getAPI();
    setLoading(true);
  }, [id]);
  function getAPI() {
    API.get(
      `${currentData === "tv" ? "tv" : "movie"}/${id}/recommendations?${KeyAPI}`
    )
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
  const mediaType = currentData === "tv" ? "tv" : "movie";
  console.log(data, "similar");
  return (
    <section className="recommendarions">
      <Style>
        <h3>Recommendations</h3>
        <Card dataAPI={convertObjectToArray} mediaType={mediaType} />;
      </Style>
    </section>
  );
}
