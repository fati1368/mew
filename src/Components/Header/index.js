import { Link } from "react-router-dom";
import MenuHeader from "../Menu";
import { menuData } from "../../Data/menu";
import Search from "../Search";
import Style from "./style";
import LOGO from "../../Helpers/LOGO";
import React, { useState, useEffect } from "react";
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
      <header className="header relative ">
        <div
          className={` ${
            isScrolled ? "scrolled" : ""
          } container flex space-between align-center fixed`}
        >
          <div className=" flex align-center">
            <Link to="/">
              <img  alt="logo" src={LOGO} />
            </Link>
            <Search />
          </div>
          <MenuHeader menuItems={menuData} />
        </div>
      </header>
    </Style>
  );
}
