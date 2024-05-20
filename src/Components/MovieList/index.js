// MovieList.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Row, Col } from "antd";
import "./style.css";

export default function MovieList() {
  const [moviesData, setMoviesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { Meta } = Card;

  useEffect(() => {
    getAPI();
  }, []);

  function getAPI() {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=58c395f7f55c4dbbaf7934499b39a8a6"
      )
      .then((res) => {
        setMoviesData(res.data.results);
        setLoading(false);
      })

      .catch((error) => {
        console.error("Error movies:", error);
        setLoading(false);
      });
  }

  const renderMovies = () => {
    return moviesData.map(({ id, name, poster_path }) => (
      <Col key={id} xs={24} sm={12} md={8} lg={6}>
        <Link to={`/movie/${id}`}>
          <Card
            hoverable
            cover={
              <img
                alt={name}
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              />
            }
          >
            <Meta title={name} />
          </Card>
        </Link>
      </Col>
    ));
  };

  return (
    <div className="movie-list">
      <Row gutter={[16, 16]}>{renderMovies()}</Row>
    </div>
  );
}
