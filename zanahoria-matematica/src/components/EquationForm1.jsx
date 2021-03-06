import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/EquationForm1.scss";
import logoZanahoria from "@logos/logoz_2.png";
import useEquations from "../hooks/useEquations";
import AppContext from "../context/AppContext";
import axios from "axios";

const EquationForm1 = () => {
  const [variable, setVariable] = useState({
    vara: 2,
    varb: -7,
    varc: 3,
  });
  const [equations, setEquations] = useState({});
  const {addToEq} = useContext(AppContext);
  
  const [error, setError] = useState(false);
  
  const {vara, varb, varc } = variable;

  const setState = (e) => {
    setVariable({
      ...variable,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  const result = useEquations(vara, varb, varc);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (result.mensaje === "no hay soluciones reales") {
      setError(true);
      return;
    }
    setEquations(result[0]);
    addToEq(result);
    axios.post('https://mysterious-river-04485.herokuapp.com/api/ecuacion/', {
      a: vara,
      b: varb,
      c: varc,
      x1: result.x1,
      x2: result.x2,
    }).then(res => {console.log(res)}).catch(err => {console.log(err)});
  };
  console.log(equations);

  return (
    <div className="body-form">
      <div className="main">
        <div className="container">
          <section className="container-form">
            <div className="logo">
              <img className="logoz"src={logoZanahoria} alt="" />
              <h2>Ecuaciones</h2>
            </div>
            <form className="equations-form" onSubmit={handleSubmit}>
              <label htmlFor="vara">Variable a</label>
              <input
                type="number"
                name="vara"
                id=""
                placeholder="2"
                required
                onChange={setState}
              />
              <label htmlFor="varb">Vatiable b</label>
              <input
                type="number"
                name="varb"
                id=""
                placeholder="12"
                required
                onChange={setState}
              />
              <label htmlFor="varc">Variable c</label>
              <input
                type="number"
                name="varc"
                id=""
                placeholder="23"
                required
                onChange={setState}
              />
              <button type="submit">Calcular</button>
            </form>
          </section>
          <section className="results-area">
            <div className="results-area__equation">
              <h3>Soluci??n de la Ecuaci??n</h3>
              <img
                src="https://ingenieriabasica.es/wp-content/uploads/2019/08/ecuacion-de-segundo-grado-1024x576.jpg"
                alt=""
              />
            </div>
            <div className="results-area-equation">
              <div className="results">
                <label htmlFor="">X1</label>

                <input
                  type="text"
                  placeholder="3"
                  disabled
                  defaultValue={equations.x1}
                />

                <label htmlFor="">X2</label>

                <input
                  type="text"
                  placeholder="2"
                  disabled
                  defaultValue={equations.x2}
                />
              </div>
              {!error && ( <Link to="/graphic">
                <button className="button-graph">Ver gr??fica</button>
              </Link>)}
             
            </div>
            {error ?  
            <div>
            <p>No se encontr?? una soluci??n para esta ecuaci??n</p>
            </div>
             : null}
          </section>
        </div>
      </div>
    </div>
  );
};

export default EquationForm1;
