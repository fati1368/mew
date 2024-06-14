import Style from "./style";
import convertToStars from "../../../Helpers/convertToStars";
import ConvertGenreIdsToNames from "../../../Helpers/convertGenreIdsToNames";
import { Rate } from "antd";
import SRCimg from "../../../Helpers/SRCimg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function CardCollection({ dataAPI }) {
  function renderFarm() {
    return dataAPI.map(
      ({ id, name, poster_path, media_type, original_language }) => {
        return (
          <Link key={id} to="/">
            <li className="col ">
              <div className=" containerCard  ">
                <div
                  className="front "
                  style={{ backgroundImage: `url(${SRCimg}${poster_path})` }}
                >
                  <div className="inner">
                    <p>{name}</p>
                  </div>
                </div>
                <div className="back ">
                  <div className="inner  ">
                    <div className="info ">
                      <h4>{name}</h4>
                      <p className="title">Media Type:</p>
                      <p> {media_type}</p>
                      <p className="title">Language:</p>
                      <p>{original_language}</p>
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
      <ul className="row justify-center">{renderFarm()}</ul>
    </Style>
  );
}
