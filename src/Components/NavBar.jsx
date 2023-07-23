import logo from "../Logo/BBLogo.png";
import search from "../Logo/search.png";
import home from "../Logo/home.png";
import news from "../Logo/news.png";
import list from "../Logo/list.png";
import account from "../Logo/account.png";
import bell from "../Logo/bell.png";
import logout from "../Logo/logout.png";
import "./Navbar.css";

function NavBar() {
  return (
    <div className="navBar">
      <div className="logoDiv">
        <img id="logoImg" src={logo} alt="Loading" />
        <img className="navLogo" src={search} alt="Loading" />
      </div>
      <div className="logoRack">
        <img className="navLogos" src={home} alt="Loading" />
        <img className="navLogos" src={news} alt="Loading" />
        <img className="navLogos" src={list} alt="Loading" />
        <img className="navLogos" src={account} alt="Loading" />
        <img className="navLogos" src={bell} alt="Loading" />
        <img className="navLogos" src={logout} alt="Loading" />
      </div>
    </div>
  );
}

export default NavBar;
