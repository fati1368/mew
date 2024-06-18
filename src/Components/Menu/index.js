import React from "react";
import { Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
import Style from "./style";
import { useState, useEffect } from "react";
import { palette } from "../../Style/Theme";
export default function MenuHeader({ menuItems }) {
  const [isScrolled, setIsScrolled] = useState(false);
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
  }, []);
  const renderSubMenu = (subMenus) => (
    <Menu>
      {subMenus.map(({ key, label, link }) => (
        <Menu.Item className={`submenu ${isScrolled ? "scrolled" : ""}`}  key={key}>
          <Link to={link}>{label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <div className="menu-header">
      <Style>
        <div className={`menu ${isScrolled ? "scrolled" : ""}`}>
          {menuItems.map(({ id, title, subMenus }) => (
            <Dropdown key={id} overlay={renderSubMenu(subMenus)}>
              <Link
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                {title}
              </Link>
            </Dropdown>
          ))}
        </div>
      </Style>
    </div>
  );
}
