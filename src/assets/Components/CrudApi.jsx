import React, { useState,useEffect } from "react";
import CrudForm from "./CrudForm";
import CrudTabtle from "./CrudTable";

// Ejemplo de useState
// const [constante, AgregaValorAlaConmstante]=useState(valor inicial de la constante);
// cont [const, setConst]=use.State(5);


const CrudApi=()=>{
    const [db,setDb]=useState("");
    useEffect(()=>{
        {
          fetch("http://localhost:5000/santos")
          .then((res)=>res.json())
          .then((data)=>setDb(data))
      }
      },[])
    const[dataToEdit,setDataToEdit]=useState(null);
    const createData=(data)=>{
        data.id=Date.now();
        setDb((db)=>[...db,data])
    }
    const updateData=(data)=>{ 
         let newDb=db.map((inf)=>{
            if(inf.id==data.id){
                inf=data;
            }
            return inf;
         })
         setDb(newDb);
    }
    const deleteData=(id)=>{
        let isDelete=window.confirm(`Esta seguro de eliminar el registro con el id: ${id}`);
        if(isDelete){
            let newDB=db.filter((data)=>data.id!=id);
        console.log(newDB);
        setDb(newDB)
        }
    }
    return(
        <>
        <h2>Crud App</h2>
        <CrudForm 
        createData={createData} 
        updateData={updateData} 
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
        />

        <CrudTabtle 
        data={db} 
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}>       
        </CrudTabtle>
        </>
    )

}

export default CrudApi;