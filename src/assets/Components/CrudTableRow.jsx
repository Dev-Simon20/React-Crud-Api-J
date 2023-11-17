const CrudTableRow = ({data,setDataToEdit,deleteData}) => {
    let{name,constelation,id}=data;
    return (
      <>
        <tr>
          <td>{name}</td>
          <td>{constelation}</td>
          <td>
            <button onClick={()=>setDataToEdit(data)}>Editar</button>
            <button onClick={()=>deleteData(id)}>Eliminar</button>
          </td>
        </tr>
      </>
    );
  };
  
  export default CrudTableRow;