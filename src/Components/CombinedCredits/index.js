import Card from "../Layout/Card";
import { useState, useEffect, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../../Helpers/API";
import KeyAPI from "../../Helpers/KeyAPI";
import React from "react";
import Style from "./style";

export default function CombinedCredits() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    getAPI();
    setLoading(true);
  }, [id]);
  async function getAPI() {
    try {
      const res =await API.get(`person/${id}/combined_credits?${KeyAPI}`);
      setData(res.data.cast);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }
  console.log(data , "fati");

   const convertObjectToArray = Object.values(data);
  //const result = convertObjectToArray[0];
  return (
    <Style>
      <div className="container pt-5">

      <h3 className="pt-5 pb-5">Known For</h3>
      <Card dataAPI={convertObjectToArray} mediaType="" />;
      </div>
    </Style>
  );
}
