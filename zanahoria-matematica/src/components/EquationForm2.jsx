import React from 'react';
import "../styles/EquationForm2.scss";

const EquationForm2 = () => {
    return ( 
        <div className="body-form">
            <div className="main">
    
                    <div class="container-derivada">
            
            <section class="container-form-derivada">
                <div class="logo">
                    <img src="https://png.pngtree.com/element_origin_min_pic/16/10/21/1bcf9578efa05099c01ad5684f9e47cf.jpg" alt=""/>
                    <h1>Zanahoria matemática</h1>
                    <h2>Derivada</h2>
                </div>
                <form class="equations-form-derivada">
                    <label for="">Variable a</label>
                    <input type="number" name="" id="" placeholder="2"/>
                    <label for="">Vatiable b</label>
                    <input type="number" name="" id="" placeholder="12"/>
                    <label for="">Variable c</label>
                    <input type="number" name="" id="" placeholder="3"/>
                    <label for="">Variable d</label>
                    <input type="number" name="" id="" placeholder="6"/>
                    <label for="">Variable e</label>
                    <input type="number" name="" id="" placeholder="11"/>
                    <button>Calcular</button>
                </form>
            </section>
            <section class="result-area-derivada">
                <div class="result-area__title">
                    <h3>Solución de la Ecuación</h3>
                </div>
                <div class="result-area__equation-derivada">
                      
                     
                      <textarea name="" id="" class="result-derivada" cols="30" rows="10">6x^3 + 5x^2</textarea>
                </div>
            </section>
            </div>
                </div>
            </div>
        
    );
}
 
export default EquationForm2;
