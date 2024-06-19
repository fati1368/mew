import { useEffect, useState, useRef } from "react";
import { FloatButton } from "antd";
import ScrollTop from "../../Helpers/ScrollTop";
import Loading from "../../Components/Loading";
import {
  useParams,
  useNavigate,
  useSearchParams,
  createSearchParams,
} from "react-router-dom";
import API from "../../Helpers/API";
import KeyAPI from "../../Helpers/KeyAPI";
import { Radio, Pagination, List, Space } from "antd";
import Card from "../../Components/Layout/Card";
import Style from "./style";
import PrimaryLayout from "../../Components/Layout/PrimaryLayout";
import { message } from "antd";

export default function FilterMovie() {
  const [genreMovie, setGenreMovie] = useState([]);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);
  const { sortParams } = useParams();
  const [loading, setLoading] = useState(true);
  const [idGenre, setIdGenre] = useSearchParams("12");
  const [queryPage, setQueryPage] = useSearchParams("1");
  const [messageApi, messageContext] = message.useMessage();

  const navigate = useNavigate();
  const warning = () => {
    messageApi.open({
      type: "warning",
      content: "please try again later",
    });
  };
  useEffect(function () {
    getGenre();
  }, []);

  useEffect(
    function () {
      getAPI(queryPage.get("page"), idGenre.get("genres"));
      ScrollTop();
    },
    [sortParams, idGenre, queryPage]
  );

  async function getGenre() {
    try {
      const resMovie = await API.get(`genre/movie/list?${KeyAPI}`);
      setGenreMovie(resMovie.data.genres);
      setLoading(false);
    } catch (err) {
      warning();
      setLoading(false);
    }
  }
  async function getAPI(page, genre) {
    try {
      const genreCurrent = genre && genre !== "all" ? genre : "";

      const resFilter = await API.get(
        `discover/movie?${KeyAPI}&language=en-US&sort_by=${sortParams}&with_genres=${genreCurrent}&page=${
          page ? page : "1"
        }`
      );
      setData(
        resFilter.data.results.filter((results) => results.poster_path !== null)
      );
      console.log(page);
      setCurrentPage(resFilter.data);
      setLoading(false);
    } catch (err) {
      warning();
      setLoading(false);
    }
  }
  const formattedName = `${sortParams}`.replace(/_/g, " ").replace(".desc", "");

  function renderGenre() {
    return genreMovie.map(({ id, name }) => {
      return (
        <Radio.Button checked key={id} value={id}>
          {name}
        </Radio.Button>
      );
    });
  }
  const ChangeGenreID = (e) => {
    const movieID = e.target.value;
    movieID === "all"
      ? navigate(`/filter/movie/${sortParams}?genres=${movieID}&page=1`)
      : setIdGenre(
          createSearchParams({
            genres: movieID,
            page: "1",
          })
        );
  };
  const ChangeSort = (e) => {
    const sortFilter = e.target.value;
    idGenre.get("genres")
      ? navigate(
          `/filter/movie/${sortFilter}?genres=${idGenre.get("genres")}&page=1`
        )
      : navigate(`/filter/movie/${sortFilter}`);
  };
  function onPageChange(e) {
    idGenre.get("genres")
      ? setQueryPage(
          createSearchParams({
            genres: idGenre.get("genres"),
            page: e,
          })
        )
      : setQueryPage(
          createSearchParams({
            page: e,
          })
        );
  }
  function genreNames() {
    try {
      if (idGenre.get("genres")) {
        const id = Number(idGenre.get("genres"));
        const genre = genreMovie.find((genre) => genre.id === id);
        return genre.name;
      } else {
        return "All Genre";
      }
    } catch (err) {
      return "All Genre";
    }
  }

  return (
    <PrimaryLayout>
      <section className="Filter-movie">
        <Style>
          {messageContext}
          <div className="mt-5 container">
            <h1 className="pt-5 ">
              <span>{formattedName}</span> Movie
            </h1>
            <h1 className=" pb-5 ">
              Filter by: <span>{genreNames()}</span>
            </h1>

            <div className="flex " style={{ justifyContent: "center" }}>
              <Radio.Group
                className="mb-3"
                value={sortParams}
                onChange={ChangeSort}
                size="large"
              >
                <Radio.Button value="title.desc">All</Radio.Button>
                <Radio.Button value="vote_average.desc"> Vote</Radio.Button>
                <Radio.Button value="popularity.desc">Popular</Radio.Button>
                <Radio.Button value="primary_release_date.desc">
                  Future Playing movie
                </Radio.Button>
              </Radio.Group>
            </div>
            <div className="flex">
              <div className="all-genre mb-3 col-2">
                <Radio.Group
                  size="large"
                  value={idGenre}
                  onChange={ChangeGenreID}
                >
                  <Space direction="vertical">
                    <Radio.Button value="all"> All</Radio.Button>
                    {renderGenre()}
                  </Space>
                </Radio.Group>
              </div>
              <div className="col-10">
                {loading ? (
                  <Loading />
                ) : (
                  <Card dataAPI={data} mediaType="movie" />
                )}
              </div>
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
