import React from "react";
import { Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
import Style from "./style";
import { useState, useEffect } from "react";
export default function MenuHeader({ menuItems }) {
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
  const renderSubMenu = (subMenus) => (
    <Menu>
      {subMenus.map(({ key, label, link }) => (
        <Menu.Item key={key}>
          <Link to={link}>{label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <Style>
      <span className={`menu ${isScrolled ? 'scrolled' : ''}`}>
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
      </span>
    </Style>
  );
}
