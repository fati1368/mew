import Style from "./style";
import LOGO from "../../Helpers/LOGO";
import { Link } from "react-router-dom";
import { footerData } from "../../Data/menu";
import {
  GithubOutlined,
  InstagramOutlined,
  SendOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

export default function Footer() {
  function renderMenu() {
    return footerData.map(({ id, title, subMenus }) => {
      function renderSubMenu() {
        return subMenus.map(({ key, link, label }) => {
          return (
            <li key={key}>
              <Link to={link}>
                <p>{label}</p>
              </Link>
            </li>
          );
        });
      }
      return (
        <div key={id}>
          <h3 className="pb-5">{title}</h3>
          <ul>{renderSubMenu()}</ul>
        </div>
      );
    });
  }
  return (
    <Style>
      <div className="footer mt-5">
        <div className=" flex  ">
          <div className="logo">
            <Link>
              <img alt="logo" src={LOGO} />
            </Link>
          </div>
          <div className=" Contact">
            <h3 className="pb-5">THE BASICS</h3>
            <h4>Name: </h4>
            <p className="basic">Fatemeh Hajihadi</p>
            <h4>Name project:</h4>
            <p className="basic"> Meow movie</p>
            <h4>Practice course:</h4>
            <p className="basic"> CodingFront</p>
          </div>
          <div className="menu flex space-between ">{renderMenu()}</div>
        </div>
        <div className="socialMedia col-5">
          <p> Copyright © June 2024 All rights reserved | Hope you enjoy</p>
          <div className="icon">
            <Link to="">
              <GithubOutlined
                style={{ padding: "0.5em", fontSize: "2.5rem" }}
              />
            </Link>
            <InstagramOutlined
              style={{ padding: "0.5em", fontSize: "2.5rem" }}
            />
            <Link to="">
              <SendOutlined style={{ padding: "0.5em", fontSize: "2.5rem" }} />
            </Link>
            <Link to="">
              <LinkedinOutlined
                style={{ padding: "0.5em", fontSize: "2.5rem" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </Style>
  );
}
