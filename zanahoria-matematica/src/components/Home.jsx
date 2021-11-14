import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import logo from "@logos/logo.jpg";

const Home = () => (
  <div className="body">
    <div className="main">
      <section id="section" className="home-section align-items-center">
        <div className="container-landing">
          <div className="row align-items-center">
            <div className="home-text">
              <p>
                Por: Angel Echeverria, David Pérez, Robinson Ruilova y Flor
                Segovia
              </p>
              <h1>Zanahoria Matemática</h1>
              <h2>Ecuaciones</h2>
              <Link to="/ecuacion1" className="btn">
                Ecuacion 1
              </Link>
              <a href="" className="btn">
                Ecuacion 2
              </a>
            </div>
            <div className="home-img">
              <div className="img-box">
                <img className="img" src={logo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Home;
