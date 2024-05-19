import { Link } from "react-router-dom";
import MenuHeader from "../Menu";
import { menuData } from "../../Data/menu";
import "./style.css";
export default function Header() {
  return (
    <header className="header">
      <div className="container flex space-between align-center">
        <div className="logo-search flex align-center">
          <Link to="/">
            <img className="logo" alt="logo" src="/assets/Image/1.png" />
          </Link>
          <div className="search">
            <input placeholder="Find Movie & TV" />
          </div>
        </div>
        <MenuHeader menuItems={menuData} />
      </div>
    </header>
  );
}
