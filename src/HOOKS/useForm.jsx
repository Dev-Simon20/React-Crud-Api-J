import { useEffect, useState } from "react"

export const useForm=(initialForm,validateForm)=>{
  const [form,setForm]=useState(initialForm);
  const [error,setError]=useState({});
  const [loading,setLoading]=useState(false);
  const [response,setResponse]=useState(null)

  const handleChange=(e)=>{
    // Destructuramos la props de e (name, value)
    const {name,value}=e.target;
    setForm({
      ...form,
      [name]:value
    })
  }
  const handleBlur=(e)=>{
  //  Este evento se desencadenara y validara el input cuando se deje de seleccionar
  //Esto es para validar antes de que se envie la informacion a traves del handle Submit
     handleChange(e);
     setError(validateForm(form))
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    setForm(initialForm)
  }

  return{
    form,
    error,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit
  }
}