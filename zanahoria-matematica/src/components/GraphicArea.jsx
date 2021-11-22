import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/GraphicArea.scss";
import logoZanahoria from "@logos/logo-zanahoria-matematica.png";
import AppContext from "../context/AppContext";

import {Line} from 'react-chartjs-2';

const GraphicArea = () => {
  const { state } = useContext(AppContext);

  /*const data = [
    ["x", "y"],

  ];
  data.push(...state.equation.payload.arraxy.map((result) => [result.x, result.y]));
  */
  const data = {
    labels: state.equation.payload.arraxy.map((result) => result.x),
    datasets: [
      {
        label: '5',
        data: state.equation.payload.arraxy.map((result) => result.y),
        fill: false,
      }
    ]
  }
  
  console.log(data.labels)
  
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
              <Line
                data={data}
              />
            </div>
          </section>

          <section className="container-table">
            <div className="logo">
              <img src={logoZanahoria} alt="logo-zanahoria-matematica" />
              <h1>Zanahoria matemática</h1>
            </div>
            <div className="results-area-table">
              <h3>Tabla de valores</h3>

              <ul className="responsive-table">
                <li className="table-header">
                  <div className="col col-1">X</div>
                  <div className="col col-2">Y</div>
                </li>
                {state.equation.payload.arraxy.map((item, index) => (
                  <li className="table-row" key={index + 1}>
                    <div className="col col-1">{item.x}</div>
                    <div className="col col-2">{item.y}</div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GraphicArea;
