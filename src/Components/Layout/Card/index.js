import Style from "./style";
import convertToStars from "../../../Helpers/convertToStars";
import ConvertGenreIdsToNames from "../../../Helpers/convertGenreIdsToNames";
import { Rate } from "antd";
import SRCimg from "../../../Helpers/SRCimg";
import { Link } from "react-router-dom";

export default function Card({dataAPI}) {
  console.log(dataAPI);
  const renderFarm = () => {
    return dataAPI.map(
      ({
        id,
        name,
        title,
        poster_path,
        media_type,
        release_date,
        genre_ids,
        first_air_date,
        vote_average,
      }) => {
        const starRating = convertToStars({ vote_average });
        console.log(starRating);

        return (
          <Link key={id} to={`/movie/${id}`}>
            <li className="col ">
              <div className=" containerCard  ">
                <div
                  className="front "
                  style={{ backgroundImage: `url(${SRCimg}${poster_path})` }}
                >
                  <div className="inner">
                    <p>{media_type === "movie" ? title : name}</p>
                  </div>
                </div>
                <div className="back ">
                  <div className="inner  ">
                    <div className="info ">
                      <h4>{media_type === "movie" ? title : name}</h4>
                      <p className="title">Media Type:</p>
                      <p> {media_type}</p>
                      <p className="title">Release Date:</p>
                      <p>
                        {media_type === "movie" ? release_date : first_air_date}
                      </p>
                      <ConvertGenreIdsToNames
                        movie={{
                          genreIds: { genre_ids },
                          mediaType: `${media_type}`,
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
  };

  return (
    <Style>
      <ul className="flex justify-center">{renderFarm()}</ul>
    </Style>
  );

}
