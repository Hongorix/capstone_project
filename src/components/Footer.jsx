import "./styles/Footer.css";
import Navigation from "./main_components/Navigation";
import Logo from "../img/LogoColorll.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container _container">
        <div className="footer__column">
          <img src={Logo} alt="Little Lemon logo" />
        </div>
        <div className="footer__column">
          <div className="footer__label">Navigation</div>
          <div className="footer__menu">
            <Navigation />
          </div>
        </div>
        <div className="footer__column">
          <div className="footer__label">Social Media</div>
          <div className="footer__menu">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#">Twitter</a>
              </li>
              <li className="footer__item">
                <a href="#">Instagram</a>
              </li>
              <li className="footer__item">
                <a href="#">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__column">
          <div className="footer__label">Contact us</div>
          <div className="footer__menu">
            <ul className="footer__list">
              <li className="footer__item">
                169 Pinnick Street, Waye, New Jersey
              </li>
              <li className="footer__item">+1–555–555–5555</li>
              <li className="footer__item">LittleLemon@mail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
