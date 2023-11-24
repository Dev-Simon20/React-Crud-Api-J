import { useFetch } from "../../HOOKS/useFetch";
import Loader from "./Loader/Loader";
import Message from "./Message";

const SelectList = ({ title, handleChange, url }) => {
  // creamos tres variables de use fetch para destructurarlas
  const { data, error, loading } = useFetch(url);

  //  Para evitar renderizado innecesario mientras la variable data sea nula
  // el comoponente Selectlist enviara un null
  if (!data) return null;
  if (error) {
    return (
      <Message msg={`Error: ${error.status}: ${error.statusText}`}></Message>
    );
  }

  let id = `select-${title}`;
  let label = title.charAt(0).toUpperCase() + title.slice(1);

  //   Guaradamos el arreglo de estados en una variable
  let options = data.response[title];
  console.log(options);
  return (
    <>
      <label htmlFor={id}>{label}</label>
      {loading ? (
        <Loader />
      ) : (
        <select key={id} name={id} id={id} onChange={handleChange}>
          <option value="">Elige un {title}</option>
          {data &&
            options.map((data, i) => <option key={i} value={data}>{data}</option>)}
        </select>
      )}
    </>
  );
};

export default SelectList;
