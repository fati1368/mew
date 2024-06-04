import React, { useEffect, useState } from "react";
import API from "../Helpers/API";
import AlertError from "../Helpers/AlertError";
import KeyAPI from "../Helpers/KeyAPI";

export default function ConvertGenreIdsToNames({ movie }) {
  const { genreIds, mediaType } = movie;
  const [data, setData] = useState([]);

  useEffect(() => {
    getAPI();
  }, [movie]);

  function getAPI() {
    const type = mediaType === "movie" ? "genre/movie/list" : "genre/tv/list";
    API.get(`${type}?${KeyAPI}`)
      .then((res) => {
        setData(res.data.genres);
      })
      .catch((err) => {
        <AlertError />;
      });
  }

  function genreNames() {
    return genreIds.genre_ids.map((id) => {
      const genre = data.find((genre) => genre.id === id);
      return (
        <li key={id}>
          <p>{genre ? genre.name : ""}</p>
        </li>
      );
    });
  }

  return (
    <div className="genre">
      <p className="title">Genre:</p>
      <ul>{genreNames()}</ul>
    </div>
  );
}
