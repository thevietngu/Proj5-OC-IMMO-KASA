import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/Pictures/LOGO.svg";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <NavLink to="/">
        <img className="header__logo" src={logo} alt="logo" />
      </NavLink>

      <nav className="header__nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          A Propos
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
