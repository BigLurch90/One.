import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.svg";

const Menu = () => (
  <>
    <li>
      <a href="#home">Home</a>
    </li>
    <li>
      <a href="#whatone">What is One.</a>
    </li>
    <li>
      <a href="#possibility">Open AI</a>
    </li>
    <li>
      <a href="#features">Cast Studies</a>
    </li>
    <li>
      <a href="#blog">Libary</a>
    </li>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="one__navbar">
      <div className="one__navbar-links">
        <div className="one__navbar-links__logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="one__navbar-links__container">
          <Menu />
        </ul>
      </div>
      <div className="one__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="one__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#f2f2f2"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#f2f2f2"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="one__navbar-menu__container scale-up-center">
            <ul className="one__navbar-menu__container-links">
              <Menu />
            </ul>
            <div className="one__navbar-menu__container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
