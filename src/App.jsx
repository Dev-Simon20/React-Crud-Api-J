import { useEffect, useState } from "react";
import "./App.css";
import CrudApi from "./assets/Components/CrudApi";
import SongSearch from "./assets/Components/SongSearch";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Ejercicios con React</h1>
      <hr />
      <SongSearch></SongSearch>
      <hr />
      <CrudApi></CrudApi>
      <hr />
    </>
  );
}

export default App;
