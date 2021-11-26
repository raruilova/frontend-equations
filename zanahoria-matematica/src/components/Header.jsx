import React from "react";
import {Link} from "react-router-dom";
import '../styles/Header.scss';
import logoapi from "@logos/logoz.png";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid d-flex">
              <Link className="navbar-brand logo" to="/">
                <img src={logoapi} alt="Logo"/>
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="navbar-collapse collapse " id="navbarText">
                <ul className="nav navbar-nav">
                    <li className="nav-item me-2">
                      <Link className="nav-link fw-bold" to="/ecuacion1">Ecuación</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link fw-bold" to="/derivada">Derivada</Link>
                    </li>
                  </ul>
              </div>
          </div>
      </nav>
    </header>
  );
};

export default Header;
