import "./styles/Header.css";
import Navigation from "./main_components/Navigation";
import Logo from "../img/LogoColor_.png";

function Header() {
  return (
    <header className="header">
      <div className="header__container _container">
        <img className="header__logo" src={Logo} alt="Little Lemon logo" />
        <div className="header__menu">
          <Navigation />
        </div>
      </div>
    </header>
  );
}

export default Header;
