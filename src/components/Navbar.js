import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/cocktail1.png";
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="section-center">
        <Link to="/">
          <img src={logo} alt="" className="logo" />
        </Link>
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
