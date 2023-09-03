import "./styles/Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a className="navigation__link" href="/home">
            Home
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="/about">
            About
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="/menu">
            Menu
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="/reservations">
            Reservations
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="/order">
            Order Online
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="/login">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
