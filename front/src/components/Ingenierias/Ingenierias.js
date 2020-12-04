import react, { Component } from 'react';
import PostulacionService from '../../services/PostulacionService';
import './ingenieria.css';
import {Link} from 'react-router-dom';

const postulaService = new PostulacionService();

class VerIngenierias extends Component {
  state = {
    ingenierias:[]
  } 

  async componentDidMount(){
    const { data } = await postulaService.getIngenieria();

    this.setState({
      ingenierias:[...data]
    })
  }

  render(){
    return(
      <div class="contenedorInges">
        <h1>Postulaciones Ingenierías</h1>
        <table className="postulantes">
        <tr>
          <th>Nombre</th>
          <th>Telefono</th>
          <th>Correo</th>
          <th>Carrera</th>
        </tr>
          {
            (this.state.ingenierias) ?
            this.state.ingenierias.map((ingenieria, idx) =>{
              return(
                <>
                <tr>
                <td>
                  {ingenieria.nombre}
                </td> 
                <td>
                  {ingenieria.telefono}
                </td> 
                <td>
                  {ingenieria.email}
                </td>
                <td>
                  {ingenieria.carrera}
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