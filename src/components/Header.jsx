import Navigation from "./Navigation";
import Logo from "../img/Logo.svg";

function Header() {
  return (
    <header>
      <img src={Logo} alt="Little Lemon logo" />
      <Navigation />
    </header>
  );
}

export default Header;
