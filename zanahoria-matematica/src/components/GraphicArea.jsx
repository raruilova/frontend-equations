import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/GraphicArea.scss";
import logoZanahoria from "@logos/logo-zanahoria-matematica.png";
import AppContext from "../context/AppContext";
import DataRow from "./DataRow";

const GraphicArea = () => {
  const { state } = useContext(AppContext);
  console.log(state.equation);
  const re = state.equation.map((eq) => eq.arrayX);
  const res = re.map((e) => console.log(e));
  return (
    <div className="body-form">
      <div className="main">
        <Link to="/ecuacion1">
          <button className="btn-back">Atras</button>
        </Link>
        <div className="container-result">
          <section className="result-area">
            <div className="result-area__graphic">
              <h3>Gráfica</h3>
              <img
                src="https://ingenieriabasica.es/wp-content/uploads/2019/08/ecuacion-de-segundo-grado-1024x576.jpg"
                alt=""
              />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
                recusandae ab excepturi laborum distinctio, maiores rem
                corporis, cum, sunt molestiae accusantium eveniet! Delectus
                voluptatum adipisci, nemo omnis nihil incidunt ad.
              </p>
            </div>
          </section>

          <section className="container-table">
            <div className="logo">
              <img src={logoZanahoria} alt="logo-zanahoria-matematica" />
              <h1>Zanahoria matemática</h1>
            </div>
            <div className="results-area-table">
              <h3>Tabla de valores</h3>
              <table className="results-table">
                  <thead>
                  <tr>
                    <th>X</th>
                    <th>Y</th>
                  </tr>
                  </thead>
                
                <tbody>
                  
                  
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GraphicArea;
