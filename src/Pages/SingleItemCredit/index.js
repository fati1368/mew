import { useState, useEffect, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import PrimaryLayout from "../../Components/Layout/PrimaryLayout";
import API from "../../Helpers/API";
import KeyAPI from "../../Helpers/KeyAPI";
import DetailCredit from "../../Components/DetailCredit";
import CombinedCredits from "../../Components/CombinedCredits";
import { FloatButton } from "antd";
import ScrollTop from "../../Helpers/ScrollTop";
import Loading from "../../Components/Loading";
import { message } from "antd";

export default function SingleItemCredit () {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
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
    ScrollTop();
    setLoading(true);
  }, [id]);
  async function getAPI() {
    try {
      const res = await API.get(`person/${id}?${KeyAPI}`);
      setData(res.data);
      setLoading(false);
    } catch (err) {
      warning();
      setLoading(false);
      navigate("/*");
    }
  }
  return (
    <PrimaryLayout>
      {messageContext}
      {loading === true ? (
        <Loading/>
      ) : (
        <section>
          <DetailCredit
            birthday={data.birthday}
            deathday={data.deathday}
            data={data}
            background="/assets/Image/peakpx.png"
          />

          <CombinedCredits />
        </section>
      )}
            <FloatButton.BackTop />

    </PrimaryLayout>
  );
}
