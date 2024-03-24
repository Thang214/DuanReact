import Logo from "@/assets/logo.svg";
import icon1 from "@/assets/icons/1.svg";
import icon2 from "@/assets/icons/2.svg";
import icon3 from "@/assets/icons/3.svg";
import icon4 from "@/assets/icons/4.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <a href="#" className="header__logo">
            <img src={Logo} alt="#" />
          </a>
          <div className="button-mobile">
            <button>=</button>
          </div>
          <nav className="main-menu">
            <ul className="main-menu__list">
              <li className="main-menu__item">
                <Link to={"/"} className="main-menu__link">
                  Home
                </Link>
              </li>
              <li className="main-menu__item">
                <Link to="/shop" className="main-menu__link">
                  Shop
                </Link>
              </li>
              <li className="main-menu__item">
                <Link to="/about" className="main-menu__link">
                  About
                </Link>
              </li>
              <li className="main-menu__item">
                <Link to="/contact" className="main-menu__link">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header-items">
            <div className="header-item-user">
              <span>
                <img src={icon1} />
              </span>
            </div>
            <div className="header-item-user">
              <span>
                <img src={icon2} />
              </span>
            </div>
            <div className="header-item-user">
              <span>
                <img src={icon3} />
              </span>
            </div>
            <div className="header-item-user">
              <span>
                <img src={icon4} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
