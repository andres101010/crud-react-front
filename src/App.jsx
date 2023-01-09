import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BasicTable from '../component/BasicTable';
import FormBasic from '../component/FormBasic';
import axios from 'axios';
import { useState } from 'react';


const App =()=> {
  //Estados
  const [data, setData] = useState([]);
  const [iduser, setIdUser] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [fechaDeNacimiento, setFechaDeNacimiento] = useState("");
  const [modificar, setModificar] = useState(false);
  
  //Carga de datos
  const getData = async ()=>{
    const resp = await axios.get('http://localhost:3002/user')
    setData(resp.data)
}

//Captura de inputs
const onChangeName = (e) => { setNombre(e.target.value)};
const onChangeApellido = (e) => { setApellido(e.target.value)};
const onChangeFechaDeNacimiento = (e) => { setFechaDeNacimiento(e.target.value)};
const edit = ((obj)=>{
   setIdUser(obj.iduser)
   setNombre(obj.nombre)
   setApellido(obj.apellido)
   setFechaDeNacimiento(obj.fechaDeNacimiento)
   console.log(obj)
})

//Funcion de guardar
 const guardar = (e)=>{
  e.preventDefault()
  if(nombre === "" || apellido === "" || fechaDeNacimiento === ""){
    alert ("Debes completar todos los campos")
  }else{
    axios.post('http://localhost:3002/newUser',{
      nombre:nombre,
      apellido:apellido,
      fechaDeNacimiento:fechaDeNacimiento
    }).then((response)=>{
      setNombre("")
      setApellido("")
      setFechaDeNacimiento("")
      getData()
    })
  }
 }
 //Funcion de activar modificacion
const activarModificacion = (iduser)=>{
  setModificar(true)
  
}

//Funcion de editar
 const editar = ()=>{
  axios.put(`http://localhost:3002/updateUser/${iduser}`,{
    nombre:nombre,
    apellido:apellido
  }).then(()=>{
    setIdUser("")
    setNombre("")
    setApellido("")
    setFechaDeNacimiento("")
    getData()
    setModificar(false)
  }).catch((error)=>{
    console.log(error)
  })
 }

 //Funcion de eliminar
 const eliminar = ((iduser)=>{
  axios.delete(`http://localhost:3002/deleteUser/${iduser}`).then(()=>{
    setIdUser("")
    setNombre("")
    setApellido("")
    setFechaDeNacimiento("")
    getData()
  })
 })

 
  return (
    <div className='mb-5'> 
    <h1 className='text-center mb-5 text-danger'>Crud React</h1>
    <Container fluid>
      <Row> 
        <Col> 
        <h2 className='mb-5 text-center'>Registro de Usuario</h2>
      <BasicTable data={data} getData={getData} edit={edit} eliminar={eliminar} activarModificaion={activarModificacion}  />
        </Col>
       <Col>
        <h2 className='mb-5 text-center'>Formulario de Usuarios</h2>
        <FormBasic onChangeName={onChangeName} onChangeApellido={onChangeApellido} onChangeFechaDeNacimiento={onChangeFechaDeNacimiento}
        guardar={guardar}
         nombre={nombre} apellido={apellido} fechaDeNacimiento={fechaDeNacimiento} modificar={modificar} activarModificacion={activarModificacion} editar={editar}/>
       </Col>
       </Row>
       </Container>
       </div>
  )
}

export default App
