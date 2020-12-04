import axios from 'axios';

export default class PostulacionService {
  baseUrl="http://localhost:3000";

  postulaciones = axios.create({
    baseURL:this.baseUrl,
    withCredentials:true
  })

  //crea postulacion
  createPostulacion(data) {
    return this.postulaciones.post('api/postulate', data);
  }

  //todas las postulaciones
  getPostulaciones(){
    return this.postulaciones.get('api/postulaciones');
  }

  getIngenieria(){
    return this.postulaciones.get('api/ingenieria');
  }

  getTecnico(){
    return this.postulaciones.get('api/tecnico')
  }

  getAdmiEsp() {
    return this.postulaciones.get('api/admisionesEsp')
  }
}