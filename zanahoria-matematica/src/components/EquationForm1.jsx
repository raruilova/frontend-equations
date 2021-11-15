import React from "react";
import "../styles/EquationForm1.scss";
import logoZanahoria from '@logos/logo-zanahoria-matematica.png';

const EquationForm1 = () => {
  return (
    <div className="body-form">
      <div className="main">
        <div className="container">
          <section className="container-form">
            <div className="logo">
              <img
                src={logoZanahoria}
                alt="logo"
              />
              <h1>Zanahoria matemática</h1>
              <h2>Ecuaciones</h2>
            </div>
            <form className="equations-form">
              <label htmlFor="">Variable a</label>
              <input type="number" name="" id="" placeholder="2" />
              <label htmlFor="">Vatiable b</label>
              <input type="number" name="" id="" placeholder="12" />
              <label htmlFor="">Variable c</label>
              <input type="number" name="" id="" placeholder="23" />
              <button>Calcular</button>
            </form>
          </section>
          <section className="results-area">
            <div className="results-area__equation">
              <h3>Solución de la Ecuación</h3>
              <img
                src="https://ingenieriabasica.es/wp-content/uploads/2019/08/ecuacion-de-segundo-grado-1024x576.jpg"
                alt=""
              />
            </div>
            <div className="results-area-equation">
              <div className="results">
                <label htmlFor="">X1</label>

                <input type="text" placeholder="3" disabled />

                <label htmlFor="">X2</label>

                <input type="text" placeholder="2" disabled />
              </div>
              <button className="button-graph">Ver gráfica</button>
            </div>
            <h4>Error!</h4>
            <p>No se encontró una solución para esta ecuación</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EquationForm1;
