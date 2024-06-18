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
      <div className="shadow"></div>
      <div className="footer container mt-5">
        <div className="content-menu flex  pb-5 mb-3 ">
          <div className="content-logo row ">
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
              <p className="basic"> React final project</p>
              <h4>Practice course:</h4>
              <a
                href="https://codingfront.dev/"
                target="_blank"
                className="basic"
              >
                <p className="basic">CodingFront</p>
              </a>
            </div>
          </div>
          <div className="menu row  ">{renderMenu()}</div>
        </div>
        <div className="line"></div>
        <div className="socialMedia mt-5 col-5">
          <p> Copyright © June 2024 All rights reserved | Hope you enjoy</p>
          <div className="icon">
            <a href="https://github.com/fati1368" target="_blank">
              <GithubOutlined
                style={{ padding: "0.5em", fontSize: "2.5rem" }}
              />
            </a>
            <a href="https://www.instagram.com/fti136998" target="_blank">
              <InstagramOutlined
                style={{ padding: "0.5em", fontSize: "2.5rem" }}
              />
            </a>
            <a href="https://www.tlgrm.in/Fati136868" target="_blank">
              <SendOutlined style={{ padding: "0.5em", fontSize: "2.5rem" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/fatemeh-hajihadi-b623b295/"
              target="_blank"
            >
              <LinkedinOutlined
                style={{ padding: "0.5em", fontSize: "2.5rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </Style>
  );
}
