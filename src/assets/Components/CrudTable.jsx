import CrudTableRow from "./CrudTableRow"

const CrudTable=({data,setDataToEdit,deleteData})=>{
    return(
        <>

        <h3>Tabla de Datos</h3>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Constelation</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
            {data.length>0?(
                    data.map((data)=>(
                        <CrudTableRow 
                        data={data} 
                        key={data.id}
                        setDataToEdit={setDataToEdit}
                        deleteData={deleteData}>
                        </CrudTableRow>
                    ))
                )
                :(<tr>
                    <td colSpan="3">SinDatos</td>
                </tr>)}

            </tbody>
        </table>
        </>
    )
}
export default CrudTable