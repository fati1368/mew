import { Link } from "react-router-dom";
import MenuHeader from "../Menu";
import { menuData } from "../../Data/menu";
export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-search">
          <Link to="/">
            <img className="logo" alt="logo" />
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
