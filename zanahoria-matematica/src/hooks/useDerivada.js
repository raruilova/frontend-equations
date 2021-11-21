import { useEffect, useState } from "react";

const useDerivada = (vara, varb, varc, vard, vare) => {
    const [derivada, setDerivada] = useState({});
    let va = parseInt(vara);
    let vb = parseInt(varb);
    let vc = parseInt(varc);
    let vd = parseInt(vard);
    let ve = parseInt(vare);
    const API = `http://192.168.1.7:8000/api/derivada?a=${va}&b=${vb}&c=${vc}&d=${vd}&e=${ve}`;
  
    const responseApi = async () => {
      const res = await fetch(API);
      const data = await res.json();
      setDerivada(data);
    };
  
    useEffect(() => {
      responseApi();
    }, [API]);
    derivada.a = va;
    derivada.b = vb;
    derivada.c = vc;
    derivada.d = vd;
    derivada.e = ve;
    console.log(derivada);
    return derivada;
  };
  
  export default useDerivada;