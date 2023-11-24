import { useState,useEffect } from "react";
// los hooks personalizados se caracteriazn por devolver logica y no hacer
// que el componenete principal sea tan pesado
export const useFetch=(url)=>{
     
    const [data,setdat]=useState(null);
    const [error,setError]=useState(null);
    const [loading,setloading]=useState(false);
    
    useEffect(()=>{
     const abortController=new AbortController ();
     //Con signal se conecta el doom con la instancia de abort Controller
     const signal=abortController.signal;
     const fetchdata=async()=>{
        setloading(true);
        try{
            const res =await fetch(url)
            if (!res.ok) {
            //  Creamos el objeto err y configuramos el objeto de error
                let err= new Error('Error en la peticion fetch');
                err.status=res.status||'00';
                err.statusText=res.statusText||'Ocurrio un error';
            // Ahora con el trow capturamos el objeto erro y lo retornamos al catch
            throw err;
            //Se corta el codigo y pasa al catch al haber existido el error
            }
            const json= await res.json();
            if (!signal.aborted) {
            // si no hubo error en la carga del doom al hacer la peticion fetch
            // entonces guaradamos la data en el usState data 
                setdat(json);
                setError(null)
            }
        }
        catch(error){
            if (!signal.aborted) {
                setdat(null);
                setError(error)
            }
        }
        finally{
            if (!signal.aborted) {
                setloading(false);
            }
        }
     }

     fetchdata();

     return()=>abortController.abort();
    },[url])


    return{data,error,loading}
}