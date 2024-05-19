import React from "react";
import { Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
import "./style.css";

const renderSubMenu = (subMenus) => (
  <Menu>
    {subMenus.map(({ key, label, link }) => (
      <Menu.Item key={key}>
        <Link to={link}>{label}</Link>
      </Menu.Item>
    ))}
  </Menu>
);

export default function MenuHeader({ menuItems }) {
  return (
    <div>
      {menuItems.map(({ id, title, subMenus }) => (
        <Dropdown key={id} overlay={renderSubMenu(subMenus)}>
          <Link className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            {title}
          </Link>
        </Dropdown>
      ))}
    </div>
  );
}
