import { Button, Row, Col } from "antd";
import { FloatButton } from "antd";
import ScrollTop from "../../Helpers/ScrollTop";

import { Fragment, useEffect, useState, useRef } from "react";
import {
  useNavigate,
  useSearchParams,
  createSearchParams,
} from "react-router-dom";
import API from "../../Helpers/API";
import KeyAPI from "../../Helpers/KeyAPI";
import { Radio, Pagination, List, Space } from "antd";
import CardPerson from "../../Components/Layout/CardPerson";
import PrimaryLayout from "../../Components/Layout/PrimaryLayout";
import Style from "./style";
import Loading from "../../Components/Loading";
import { message } from "antd";

export default function PopularPerson() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [queryPage, setQueryPage] = useSearchParams("1");
  const navigate = useNavigate();
  const [messageApi, messageContext] = message.useMessage();

  const warning = () => {
    messageApi.open({
      type: "warning",
      content: "please try again later",
    });
  };
  useEffect(
    function () {
      getAPI(queryPage.get("page"));
      ScrollTop();
    },
    [queryPage]
  );

  async function getAPI(page, genre) {
    try {
      const res = await API.get(
        `person/popular?${KeyAPI}&page=${page ? page : "1"}`
      );
      setData(
        res.data.results.filter((results) => results.profile_path !== null)
      );
      console.log(page);
      setCurrentPage(res.data);
      setLoading(false);
    } catch (err) {
      warning();
      setLoading(false);
    }
  }

  function onPageChange(e) {
    setQueryPage(
      createSearchParams({
        page: e,
      })
    );
  }

  return (
    <PrimaryLayout>
      <section className="people">
        <Style>
          {messageContext}
          <div className="mt-5 container">
            <h1 className="pt-5 pb-5 ">Popular Person</h1>
            <div className="col-10">
              {loading ? <Loading /> : <CardPerson dataAPI={data} />}
            </div>
            <Pagination
              onChange={onPageChange}
              Current={currentPage.page}
              total={currentPage.total_pages}
              style={{ colorText: "#FFF" }}
            />
          </div>
        </Style>
      </section>
      <FloatButton.BackTop />
    </PrimaryLayout>
  );
}
