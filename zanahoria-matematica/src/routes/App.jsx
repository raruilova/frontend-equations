import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EquationForm1 from "../components/EquationForm1";
import EquationForm2 from "../components/EquationForm2";
import Home from "../components/Home";
import Layout from "../container/Layout";
import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/ecuacion1" element={<EquationForm1/>} />
                <Route path="/ecuacion2" element={<EquationForm2/>} />
            </Routes>
        </Layout>
        </BrowserRouter>
    )
};

export default App;