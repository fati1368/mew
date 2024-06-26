import Style from "./style";
import convertToStars from "../../../Helpers/convertToStars";
import ConvertGenreIdsToNames from "../../../Helpers/convertGenreIdsToNames";
import { Rate } from "antd";
import SRCimg from "../../../Helpers/SRCimg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function CardPerson({ dataAPI }) {
  function renderFarm() {
    return dataAPI.map(
      ({ id, name, profile_path, media_type, known_for_department }) => {
        return (
          <Link key={id} to={`/credit/${id}`}>
            <li className="col ">
              <div className=" containerCard  ">
                <div
                  className="front "
                  style={{ background: `lightblue url(${SRCimg}${profile_path})` , backgroundSize: 'cover' }}
                >
                  <div className="inner">
                    <p>{name}</p>
                  </div>
                </div>
                <div className="back ">
                  <div className="inner  ">
                    <div className="info ">
                      <h4>{name}</h4>
                      <p className="title">Department:</p>
                      <p>{known_for_department}</p>
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
