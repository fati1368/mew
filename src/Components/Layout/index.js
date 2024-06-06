import { Link } from "react-router-dom";
import MenuHeader from "../Menu";
import { menuData } from "../../Data/menu";
import Search from "../Search";
import Style from "./style";
import LOGO from "../../Helpers/LOGO";
import { useState, useEffect } from "react";
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 550) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Style>
      <header className="relative">
        <div
          className={`container flex space-between align-center fixed  ${
            isScrolled ? "blurMenu" : ""
          }`}
        >
          <div className="left flex align-center">
            <div>
              {" "}
              <Link to="/">
                <img alt="logo" src={LOGO} />
              </Link>
            </div>
            <div>
              <Search />
            </div>
            <div>salam</div>
          </div>
          <div className="right">
            <MenuHeader menuItems={menuData} />
          </div>
        </div>
      </header>
    </Style>
  );
}
