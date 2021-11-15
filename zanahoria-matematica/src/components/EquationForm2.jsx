import React from "react";
import "../styles/EquationForm2.scss";
import logoZanahoria from "@logos/logo-zanahoria-matematica.png";

const EquationForm2 = () => {
  return (
    <div className="body-form">
      <div className="main">
        <div className="container-derivada">
          <section className="container-form-derivada">
            <div className="logo">
              <img src={logoZanahoria} alt="logo" />
              <h1>Zanahoria matemática</h1>
              <h2>Derivada</h2>
            </div>
            <form className="equations-form-derivada">
              <label htmlFor="">Variable a</label>
              <input type="number" name="" id="" placeholder="2" />
              <label htmlFor="">Vatiable b</label>
              <input type="number" name="" id="" placeholder="12" />
              <label htmlFor="">Variable c</label>
              <input type="number" name="" id="" placeholder="3" />
              <label htmlFor="">Variable d</label>
              <input type="number" name="" id="" placeholder="6" />
              <label htmlFor="">Variable e</label>
              <input type="number" name="" id="" placeholder="11" />
              <button>Calcular</button>
            </form>
          </section>
          <section className="result-area-derivada">
            <div className="result-area__title">
              <h3>Solución de la Ecuación</h3>
            </div>
            <div className="result-area__equation-derivada">
              <textarea
                name=""
                id=""
                className="result-derivada"
                cols="30"
                rows="10"
                value="6x^3 + 5x^2"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EquationForm2;
