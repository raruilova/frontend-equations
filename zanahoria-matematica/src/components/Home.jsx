import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import logo from "@logos/logo-temp.jpg";
import logoin from "@logos/logo.jpg";

const Home = () => (
  <div className="body">
    <div className="main">
        <section className="home-section alignitemscenter">
            <div className="conta-hoe">
                <div className="fila alignitemscenter">
                    <div className="home-text">
                        <h1 className="display-1">LA ZANAHORIA</h1>
                        <h2 className="display-1">MATEMÁTICA</h2>
                        <br/>
                        <h4>Es una app que te ayuda a resolver esos problemas matemáticos que te rompen la cabeza!</h4>
                    </div>

                    <div className="ho-imag">
                        <div className="img-box logos">
                            <img src={logoin} alt=""/>
                        </div>
                    </div>
                    <div className="home-text">
                        <p className="h5">Por: Angel Echeverria, David Pérez, Robinson Ruilova y Flor Segovia</p>
                    </div>
                    
                </div>
            </div>
        </section>
    </div>
  </div>
);

export default Home;
