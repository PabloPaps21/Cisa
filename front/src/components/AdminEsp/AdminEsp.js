import react, { Component } from 'react';
import PostulacionService from '../../services/PostulacionService';
import './AdminEsp.css';
import {Link} from 'react-router-dom';

const postulaService = new PostulacionService();

class VerIngenierias extends Component {
  state = {
    admisiones:[]
  } 

  async componentDidMount(){
    const { data } = await postulaService.getAdmiEsp();

    this.setState({
    admisiones:[...data]
    })
  }

  render(){
    return(
      <div class="contenedorAdmi">
        <h1>Postulaciones Admisiones Especiales</h1>
        <table className="postulantes">
        <tr>
          <th>Nombre</th>
          <th>Telefono</th>
          <th>Correo</th>
          <th>carrera</th>
        </tr>
          {
            (this.state.admisiones) ?
            this.state.admisiones.map((admision, idx) =>{
              return(
                <>
                <tr>
                <td>
                  {admision.nombre}
                </td> 
                <td>
                  {admision.telefono}
                </td> 
                <td>
                  {admision.email}
                </td>
                <td>
                  {admision.carrera}
                </td>
               </tr>
                </>
              )
            }) : <h1>No hay información</h1>
          }
        </table>
        <Link to="/ver" className="btn-ver">Administración</Link>
      </div>
    )
  }
  
}

export default VerIngenierias;