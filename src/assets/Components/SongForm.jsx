import { useState } from "react"

const SongForm=({dataSend})=>{
    
    var initialSearch={
        artist:'',
        song:''
    }
    const [form,setForm]=useState(initialSearch);
    
    const handleChange=(e)=>{
        // {...form} crea una copia superficial del form sin que los cambios el afecten

        // Una forma de hacer ver los cambios en el front
        let newForm={...form};
        newForm[e.target.name]=e.target.value
        setForm(newForm)
        console.log(newForm);

        //  setForm({
        //     ...form,
        //     [e.target.name]:e.target.value
        //  })
    }

    const envio=(e)=>{
        e.preventDefault();
        if(!form.artist||!form.song){
            alert('!Datos incompletos');
            return;
        }
        else{
            dataSend(form);
            setForm(initialSearch)
        }
    }
     return(
        <>
        <form onSubmit={envio}>
            <input type="text" name="artist" placeholder="Nombre del artista" onChange={handleChange} value={form.artist}/>
            <input type="text" name="song" placeholder="Nombre de la canción" onChange={handleChange} value={form.song}/>
            <input type="submit" value="Enviar" />
        </form>
        </>
     )
}

export default SongForm