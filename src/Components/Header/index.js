import { Link } from "react-router-dom";
import MenuHeader from "../Menu";
import { menuData } from "../../Data/menu";
import Search from "../Search";
import Style from "./style";
import LOGO from "../../Helpers/LOGO";
import { useState, useEffect } from "react";
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [callBack, setCallBack] = useState(false);
  const handleCallBack = (e) => {
    console.log(e);
    setCallBack(e);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [callBack]);
  return (
    <Style>
      <header className="relative" style={{zIndex:"10"}}>
        <div
          className={`container flex space-between align-center fixed  ${
            isScrolled ? "blurMenu" : ""
          }
          ${callBack ? "minHeight" : ""}`}
        >
          <div className=" flex align-center">
            <Link to="/">
              <img alt="logo" src={LOGO} />
            </Link>
            <Search callBack={handleCallBack} />
          </div>
          <MenuHeader menuItems={menuData} />
        </div>
      </header>
    </Style>
  );
}
