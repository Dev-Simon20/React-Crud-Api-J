import React, { useState,useEffect } from "react";
import CrudForm from "./CrudForm";
import CrudTabtle from "./CrudTable";
import { helpHttp } from "../helpers/helpHttp";

// Ejemplo de useState
// const [constante, AgregaValorAlaConmstante]=useState(valor inicial de la constante);
// cont [const, setConst]=use.State(5);


const CrudApi=()=>{
    const [db,setDb]=useState([]);
    const[dataToEdit,setDataToEdit]=useState(null);
    let api=helpHttp();
    let url='http://localhost:5000/santos';
    useEffect(()=>{
       api.get(url)
       .then((data)=>{
        //console.log('Informacion ',data);
        if(!data.err){
            setDb(data)
        }else{
            setDb(null)
        }
       });
    },[])



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
        <h2>Crud API</h2>
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