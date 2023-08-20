import "./Footer.css";
import Navigation from "./Navigation";
import Logo from "../img/LogoColorll.png";

function Footer() {
  return (
    <footer>
      <img src={Logo} alt="Little Lemon logo" />
      <Navigation />
      <div id="SocialMedia">
        <ul>
          <li>
            <h4>Social Media</h4>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">Facebook</a>
          </li>
        </ul>
      </div>
      <div id="Contact">
        <ul>
          <li>
            <h4>Contact us</h4>
          </li>
          <li>169 Pinnick Street, Waye, New Jersey</li>
          <li>+1–555–555–5555</li>
          <li>LittleLemon@mail.com</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
