import SongArtist from "./SongArtist"
import SongLyric from "./SongLyrics"

const SongDetails=({bio,lyric})=>{
    return(
        <>
        <h3>Song details</h3>
        <SongArtist></SongArtist>
        <SongLyric></SongLyric>
        </>
    )
}
export default SongDetails