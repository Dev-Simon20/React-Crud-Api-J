import React, { useState, useEffect } from "react";
import CrudForm from "./CrudForm";
import CrudTabtle from "./CrudTable";
import { helpHttp } from "../helpers/helpHttp";
import Loader from "./Loader/Loader";
import Message from "./Message";

// Ejemplo de useState
// const [constante, AgregaValorAlaConmstante]=useState(valor inicial de la constante);
// cont [const, setConst]=use.State(5);

const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [err, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  let api = helpHttp();
  let url = "http://localhost:5000/santos";
  useEffect(() => {
    setLoading(true);
    api.get(url).then((data) => {
      //console.log('Informacion ',data);
      if (!data.err) {
        setDb(data);
      } else {
        setDb(null);
        setError(data);
      }
      setLoading(false);
    });
  }, []);

  const createData = (data) => {
    data.id = Date.now();
    // setDb((db)=>[...db,data])

    let opt = { body: data, headers: { "content-type": "application/json" } };

    api.post(url, opt).then((res) => {
      console.log("El contenido de res es :", res);
      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endPoint = `${url}/${data.id}`;

    let opt = { body: data, headers: { "content-type": "application/json" } };

    api.put(endPoint, opt).then((res) => {
      if (!res.err) {
        let newData = db.map((dt) => (dt.id === data.id ? data : dt));
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };
  const deleteData = (id) => {
    let endPoint = `${url}/${id}`;
    let opt = { headers: { "content-type": "application/json" } };
    api.del(endPoint, opt).then((res) => {
      if (!res.err) {
        let newDB = db.filter((data) => data.id != id);
        setDb(newDB);
      }
      else{
        setError(res)
      }
    });
  };
  return (
    <>
      <h2>Crud API</h2>

      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      {loading && <Loader></Loader>}
      {err && (
        <Message
          msg={`Error ${err.status}:  ${err.statusText} `}
          bgColor="#dc3545"
        ></Message>
      )}
      {db && (
        <CrudTabtle
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        ></CrudTabtle>
      )}
    </>
  );
};

export default CrudApi;
