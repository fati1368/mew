import { Link } from "react-router-dom";
import "./style.css";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col } from "antd";
export default function MovieListByGenre({ headerDetail, genreId = "1" }) {
  const { title, link } = headerDetail;
  const [moviesData, setMoviesData] = useState({ data: [], metaData: {} });
  const [loading, setLoading] = useState(true);
  const { Meta } = Card;
  useEffect(
    function () {
      getAPI();
    },
    [genreId]
  );

  function getAPI() {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=58c395f7f55c4dbbaf7934499b39a8a6&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}'`
      )
      .then(function (res) {
        setMoviesData(res.data.results);
        setLoading(false);
      })
      .catch(function (err) {
        setLoading(false);
      });
  }
  function renderFarm() {
    return moviesData.map(({ name, poster_path, id, overview }) => {
      return (
        <Col key={id} span={4}>
          <Link to={`/movie/${id}`}>
            <Card
              title={title}
              bordered={false}
              cover={
                <img
                  alt="example"
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                />
              }
            >
              <Meta title={name} description={overview} />
            </Card>
          </Link>
        </Col>

      );
    });
  }
  function render() {
    if (loading === true) {
      return <h1>loading ....</h1>;
    }
    return (
      <div className="movie-list">
        {moviesData.length === 0 ? (
          <h1>empty data ....</h1>
        ) : (
          <div className="list">
            <Row gutter={16}>{renderFarm()}</Row>
          </div>
        )}
      </div>
    );
  }
  return <Fragment>{render()}</Fragment>;
}
