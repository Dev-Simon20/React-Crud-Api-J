import { useEffect, useState } from "react";
import { helpHttp } from "../assets/helpers/helpHttp";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    // Destructuramos la props de e (name, value)
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleBlur = (e) => {
    //  Este evento se desencadenara y validara el input cuando se deje de seleccionar
    //Esto es para validar antes de que se envie la informacion a traves del handle Submit
    handleChange(e);
    setError(validateForm(form));
  };
  const handleSubmit = (e) => {
    // Cancelamos el evento por defecto delsubmit que recarga lqa pagina
    e.preventDefault();
    setError(validateForm(form));
    // Object.keys(error).length  devuelve el numero de propiedades que tiene el objeto error 
    if (Object.keys(error).length === 0) {
      setLoading(true)
      let api = helpHttp();
      let token='2f4023ab1a4b3e7e3e832f257d1b2f93';
      let url = `https://formsubmit.co/${token}`;
      let data = form;
      let opt = { body: data, headers: { "content-type": "application/json" } };
      api.post(url, opt).then((res) => {
        setLoading(false)
        console.log("El contenido de res es :", res);
        if (!res.err) {
          console.log("Mensaje Enviado");
        } else {
          setError(res);
          console.log('Fromulario vacio');
        }
      });
      // Regresamos el fomulario a su estado inicial
    setForm(initialForm);
    }
    else{
      console.log('Hubo un error');
    }
    
    
  };

  return {
    form,
    error,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
