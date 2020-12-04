import react, { Component } from 'react';
import PostulacionService from '../../services/PostulacionService';
import './ver.css';
import { Link } from 'react-router-dom';
const postulaService = new PostulacionService();

class Ver extends Component {
  state ={
    postulaciones: []
  }
  async componentDidMount(){
  const { data } = await postulaService.getPostulaciones();
  
  console.log(data)
  this.setState({
    postulaciones:[...data]
  })
}
  render(){
    return(
    <div className="contenedorVER">
      <div className="general">
      <h1>Postulaciones general</h1>
        <table className="postulantes">
        <tr>
          <th>Nombre</th>
          <th>Telefono</th>
          <th>Correo</th>
          <th>Carrera</th>
        </tr>
         {
           (this.state.postulaciones.length) ? 
           this.state.postulaciones.map((postulacion, idx) => {
             return(
               <>
               <tr>
                <td>
                  {postulacion.nombre}
                </td> 
                <td>
                  {postulacion.telefono}
                </td> 
                <td>
                  {postulacion.email}
                </td>
                <td>
                  {postulacion.carrera}
                </td>
               </tr>
               </>
             )
           }) : <h1>No hay información</h1>
         }
        </table>
      </div>

      <div className="botones">
        <Link to="/ingenierias" className="btn-ver">Ingenierías</Link>
        <Link to="/adminEsp" className="btn-ver">Admisiones Especiales</Link>
        <Link to="/tecnico" className="btn-ver">Técnico</Link>
      </div>
    </div>
    )
  }
}

export default Ver;
