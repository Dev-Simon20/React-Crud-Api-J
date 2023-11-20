import { useState,useEffect } from "react"

const initialForm={
    name:'',
    constelation:'',
    id:null
}
        // createData={createData} 
        // updateData={updateData} 
        // dataToEdit={dataToEdit}
        // setDataToEdit={setDataToEdit}

const CrudForm=({createData,updateData,setDataToEdit,dataToEdit})=>{

    const [form,setForm]=useState(initialForm);

    useEffect(()=>{
        if(dataToEdit){
            setForm(dataToEdit)
        }else{
            setForm(initialForm)
        }
    },[dataToEdit])

    const handleChange=(e)=>{
        // Mi forma de actualizar el estado form
        // if (e.target.name=='name') {
        //     let dates={
        //         name:e.target.value,
        //         constelation:form.constelation
        //     }
        //     setForm(dates);
        // }
        // else{
        //     let dates={
        //         name:form.name,
        //         constelation:e.target.value
        //     }
        //     setForm(dates);
        // }
        
        //La forma de Jhon Mircha
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!form.name||!form.constelation){
            alert('Datos incompletos');
            return;
        }
        if(form.id===null){
            createData(form)
        }
        else{
            updateData(form);
        }
        handleReset();
    }
    const handleReset=(e)=>{
        setForm(initialForm);
        setDataToEdit(null);
    }

    
    return(
        <>
        <h3>{dataToEdit?'Editar':'Agregar'}</h3>
        <form onSubmit={handleSubmit}>

         <input type="text" name="name" placeholder="Ingrese el nombre" onChange={handleChange} value={form.name}
/>

         <input type="text" name="constelation" placeholder="Ingrese la Constelacion" onChange={handleChange} value={form.constelation}/>

            <input type="submit" value="Enviar"/>
            <input type="reset" value="Limpiar" onClick={handleReset}/>
        </form>
        </>
    )
}

export default CrudForm