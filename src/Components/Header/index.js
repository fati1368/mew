import { Link } from "react-router-dom";
import MenuHeader from "../Menu";
import { menuData } from "../../Data/menu";
import Search from "../Search";
import Style from "./style";
import LOGO from "../../Helpers/LOGO";
export default function Header() {
  return (
    <Style>
      <header className="header">
        <div className="container flex space-between align-center">
          <div className="logo-search flex align-center">
            <Link to="/">
              <img className="logo" alt="logo" src={LOGO} />
            </Link>
            <Search />
          </div>
          <MenuHeader menuItems={menuData} />
        </div>
      </header>
    </Style>
  );
}
