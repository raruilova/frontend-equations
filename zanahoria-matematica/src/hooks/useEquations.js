import {useEffect, useState} from 'react';

const useEquations = (vara, varb, varc) => {
    const [equations, setEquations] = useState([]);
    let va = parseInt(vara);
    let vb = parseInt(varb);
    let vc = parseInt(varc);
    const API = `http://127.0.0.1:8000/api/ecuacion/create?a=${va}&b=${vb}&c=${vc}`;

    const responseApi = async () => {
        const res = await fetch(API);
        const data = await res.json();
        setEquations(data.x);
    }

    useEffect(() => {
        responseApi();
    }, []);
    console.log(vara, varb, varc);
    return equations;
}

export default useEquations;