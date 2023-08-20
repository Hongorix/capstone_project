import "./Header.css";
import Navigation from "./Navigation";
import Logo from "../img/LogoColor_.png";

function Header() {
  return (
    <header>
      <img src={Logo} alt="Little Lemon logo" />
      <Navigation />
    </header>
  );
}

export default Header;
