import { useState } from "react"
import Loader from "./Loader/Loader"
import SongDetails from "./SongDetails"
import SongForm from "./SongForm"

const SongSearch=()=>{
    const [search,setSearch]=useState(null);
    const [loader,setloader]=useState(false);
    const [bio,setBio]=useState(null);
    const [lyric,setLyric]=useState(null)

    const dataSend=(data)=>{
        //console.log('datos recibidos:   ',data);
           setSearch(data)
    }

    return(<>
    <h2>Buscador de Canciones</h2>
    {/*
    Mienttras la variable de estado loader sea false no se mostrara el componenente
    */}
    {loader&&<Loader></Loader>}

    <SongForm dataSend={dataSend}/>

    <SongDetails bio={bio} lyric={lyric}/>
    </>)
}

export default SongSearch