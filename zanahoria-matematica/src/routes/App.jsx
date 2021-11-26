import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EquationForm1 from "../components/EquationForm1";
import EquationForm2 from "../components/EquationForm2";
import GraphicArea from "../components/GraphicArea";
import Home from "../components/Home";
import Layout from "../container/Layout";
import AppContext from "../context/AppContext";
import useInitialState from '../hooks/useInitialState';
import '../styles/global.css';

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
        <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/ecuacion1" element={<EquationForm1/>} />
                <Route path="/derivada" element={<EquationForm2/>} />
                <Route path="/graphic" element={<GraphicArea/>} />
            </Routes>
        </Layout>
        </BrowserRouter>
        </AppContext.Provider>
    )
};

export default App;