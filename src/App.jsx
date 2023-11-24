import { useEffect, useState } from "react";
import "./App.css";
import CrudApi from "./assets/Components/CrudApi";
import SongSearch from "./assets/Components/SongSearch";
import SelectAnidado from "./assets/Components/SelectAnidado";
import ContactForm from "./assets/Components/ContactForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Ejercicios con React</h1>
      <hr />
      <ContactForm></ContactForm>
      {/* <hr />
      <SelectAnidado></SelectAnidado> */}
      <hr />
      <br />
      <CrudApi></CrudApi>
      <hr />
    </>
  );
}

export default App;
