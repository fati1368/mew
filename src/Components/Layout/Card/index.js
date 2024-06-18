import Style from "./style";
import convertToStars from "../../../Helpers/convertToStars";
import ConvertGenreIdsToNames from "../../../Helpers/convertGenreIdsToNames";
import { Rate } from "antd";
import SRCimg from "../../../Helpers/SRCimg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Card({ dataAPI, mediaType }) {
  function renderFarm() {
    return dataAPI.map(
      ({
        id,
        name,
        title,
        poster_path,
        media_type,
        release_date="",
        genre_ids =[],
        first_air_date,
        vote_average,
      }) => {
        const currentData= mediaType === "" ?  media_type : mediaType
        const starRating = convertToStars({ vote_average });
        return (
          <Link key={id} to={`/${currentData === "tv" ? "tv" : "movie"}/${id}`}>
            <li className="col ">
              <div className=" containerCard  ">
                <div
                  className="front "
                  style={{ background: `lightblue  url(${SRCimg}${poster_path})  ` , backgroundSize: 'cover' }}
                >
                  <div className="inner">
                    <p>{currentData === "movie" ? title : name}</p>
                  </div>
                </div>
                <div className="back ">
                  <div className="inner  ">
                    <div className="info ">
                      <h4>{currentData === "movie" ? title : name}</h4>
                      <p className="title">Media Type:</p>
                      <p> {currentData}</p>
                      <p className="title">Release Date:</p>
                      <p>
                        {currentData === "movie" ? release_date : first_air_date}
                      </p>
                      <ConvertGenreIdsToNames
                        movie={{
                          genreIds: { genre_ids },
                          mediaType: `${currentData}`,
                        }}
                      />
                      <Rate
                        disabled
                        allowHalf
                        value={starRating}
                        style={{ fontSize: "1.5rem", border: "10px black" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </Link>
        );
      }
    );
  }

  return (
    <Style>
      <ul className="row ">{renderFarm()}</ul>
    </Style>
  );
}
