import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormBasic = ({onChangeName, onChangeApellido, onChangeFechaDeNacimiento, guardar,nombre,apellido,fechaDeNacimiento, modificar,editar})=>{

    return(
      <div> 
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" value={nombre} placeholder="Ingrese su nombre" onChange={onChangeName}/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" value={apellido} placeholder="Ingrese su apellido" onChange={onChangeApellido}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Fecha De Nacimiento</Form.Label>
          <Form.Control type="date" value={fechaDeNacimiento} onChange={onChangeFechaDeNacimiento}/>
        </Form.Group>
        {
          modificar ? <Button className='btn btn-warning' onClick={()=>{editar()}}>Editar</Button> : <Button variant="primary" type="submit" className="ml-5" onClick={(e)=>{guardar(e)}}>
          Guardar
        </Button>
        }
      </Form>
      </div>

    )
}
export default FormBasic;