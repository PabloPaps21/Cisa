import react, { Component } from 'react';
import PostulacionService from '../../services/PostulacionService';
import './tecnicos.css';
import {Link} from 'react-router-dom';

const postulaService = new PostulacionService();

class VerTecnicos extends Component {
  state = {
    tecnicos:[]
  } 

  async componentDidMount(){
    const { data } = await postulaService.getTecnico();

    this.setState({
      tecnicos:[...data]
    })
  }

  render(){
    return(
      <div class="contenedorInges">
        <h1>Postulaciones Tecnicos</h1>
        <table className="postulantes">
        <tr>
          <th>Nombre</th>
          <th>Telefono</th>
          <th>Correo</th>
          <th>Carrera</th>
        </tr>
          {
            (this.state.tecnicos) ?
            this.state.tecnicos.map((tecnico, idx) =>{
              return(
                <>
               <tr>
                <td>
                  {tecnico.nombre}
                </td> 
                <td>
                  {tecnico.telefono}
                </td> 
                <td>
                  {tecnico.email}
                </td>
                <td>
                  {tecnico.carrera}
                </td>
               </tr>
               </>
              )
            }) : <h1>No hay información</h1>
          }
        </table>
        <Link to="/ver" className="btn-ver" style={{marginTop:20}}>Administración</Link>
      </div>
    )
  }
  
}

export default VerTecnicos;