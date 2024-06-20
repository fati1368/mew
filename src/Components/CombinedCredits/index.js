import Card from "../Layout/Card";
import { useState, useEffect, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../../Helpers/API";
import KeyAPI from "../../Helpers/KeyAPI";
import React from "react";
import Style from "./style";
import { message } from "antd";
import Loading from "../Loading";

export default function CombinedCredits() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [messageApi, messageContext] = message.useMessage();

  const warning = () => {
    messageApi.open({
      type: "warning",
      content: "please try again later",
    });
  };

  useEffect(() => {
    getAPI();
    setLoading(true);
  }, [id]);
  async function getAPI() {
    try {
      const res = await API.get(`person/${id}/combined_credits?${KeyAPI}`);
      setData(res.data.cast.filter((cast) => cast.poster_path !== null));
      setLoading(false);
    } catch (err) {
      warning();
      setLoading(false);
    }
  }
  console.log(data, "fati");

  const convertObjectToArray = Object.values(data);
  //const result = convertObjectToArray[0];
  return (
    <Style>
      {messageContext}
      {loading ? (
        <Loading />
      ) : (
        <div className="container pt-5">
          {convertObjectToArray && convertObjectToArray !== null ? (
            <h3 className="pt-5 pb-5">Known For</h3>
          ) : (
            ""
          )}
          <Card dataAPI={convertObjectToArray} mediaType="" />;
        </div>
      )}
    </Style>
  );
}
