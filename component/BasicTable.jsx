import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useEffect } from "react";





 const BasicTable = ({data, getData,eliminar, edit, activarModificaion})=>{
  
  //Efecto de carga de datos
  useEffect(()=>{
    getData()
   },[]);
  
    return(
            <div className="container-fluid"> 
             <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Fecha De Nacimiento</th>
          <th>Editar</th>
          <th>Borrar</th>
        </tr>
      </thead>
      <tbody>
        { data.length === 0 ? <tr><td colSpan={6}>Sin Datos</td></tr> :  data.map((row)=>( 
          <tr key={row.iduser} onClick={()=>{edit(row)}}>
            <td>{row.iduser}</td>
            <td>{row.nombre}</td>
            <td>{row.apellido}</td>
            <td>{row.fechaDeNacimiento}</td>
           <td><button className="btn btn-warning" onClick={()=>{activarModificaion()}}> Editar</button></td>
           <td><button className="btn btn-danger" onClick={()=>{eliminar(row.iduser)}}>Borrar</button></td>
          </tr>
        ))
        }
      </tbody>
    </Table>
    </div>
    )
}
 export default BasicTable;
