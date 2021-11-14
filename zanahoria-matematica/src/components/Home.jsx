import React from "react";
import '../styles/Home.scss';
import logo from '@logos/logo.jpg';

const Home = () => (
    <div className="main">
        <section className="home-section align-items-center">
            <div className="container">
                <div className="row align-items-center">
                    <div className="home-text">
                        <p>Por: Angel Echeverria, David Pérez, Robinson Ruilova y Flor Segovia</p>
                        <h1>Zanahoria Matemática</h1>
                        <h2>Ecuaciones</h2>
                        <a href="" className="btn">Ecuacion 1</a>
                        <a href="" className="btn">Ecuacion 2</a>
                    </div>
                    <div className="home-img">
                        <div className="img-box">
                            <img src={logo} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default Home;