import React, {useState} from "react";
import "../styles/EquationForm2.scss";
import logoZanahoria from "@logos/logoz_2.png";
import useDerivada from '../hooks/useDerivada';
import axios from "axios";

const EquationForm2 = () => {
  const [variable, setVariable] = useState({
    vara: 2,
    varb: -7,
    varc: 3,
    vard: 4,
    vare: 6,
  });
  const [derivada, setDerivada] = useState({});
 
  
  const [error, setError] = useState(false);
  
  const {vara, varb, varc , vard, vare} = variable;

  

  const setState = (e) => {
    setVariable({
      ...variable,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  const result = useDerivada(vara, varb, varc, vard, vare);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDerivada(result[0]);
    axios.post('https://mysterious-river-04485.herokuapp.com/api/derivada4G/', {
      a: vara,
      b: varb,
      c: varc,
      d: vard,
      e: vare,
      x: result.x,
    }).then(res => {console.log(res)}).catch(err => {console.log(err)});
  };
  console.log(derivada);
  return (
    <div className="body-form">
      <div className="main">
        <div className="container-derivada">
          <section className="container-form-derivada">
            <div className="logo">
              <img src={logoZanahoria} alt="logo" />
              <h2>Derivada</h2>
            </div>
            <form className="equations-form-derivada" onSubmit={handleSubmit}>
              <label htmlFor="">Variable a</label>
              <input type="number" name="vara" id="" placeholder="2" required onChange={setState}/>
              <label htmlFor="">Vatiable b</label>
              <input type="number" name="varb" id="" placeholder="12" required onChange={setState}/>
              <label htmlFor="">Variable c</label>
              <input type="number" name="varc" id="" placeholder="3" required onChange={setState}/>
              <label htmlFor="">Variable d</label>
              <input type="number" name="vard" id="" placeholder="6" required onChange={setState}/>
              <label htmlFor="">Variable e</label>
              <input type="number" name="vare" id="" placeholder="11" required onChange={setState}/>
              <button type="submit">Calcular</button>
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
                defaultValue={derivada.fpx}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EquationForm2;
