import React, { Component } from 'react';
import { FormAddProduct } from '../../styled-components/components'; 
import './main.css';
import PostulacionService from '../../services/PostulacionService';


const postulacionService = new PostulacionService();

class Main extends Component {

  state = {
   form: {
    nombre: "",
    email: "",
    
    carrera: "",
    tipo: ""
   },
   input:{},
   error:{}
  };

  changeInput = (e) => {
    const {name,value}= e.target;
    this.setState({[name]:value});
    let input = this.state.input;
    input[e.target.name] = e.target.value;
  }

  agregarPostulacion = async e => {
    e.preventDefault();
    const  { nombre, email, telefono, carrera, tipo } = this.state;
    const postulacion = await postulacionService.createPostulacion({ nombre, email, telefono, carrera, tipo });
    
    console.log(postulacion)


    this.setState({
        nombre: "",
        email: "",
        carrera: "",
        tipo: ""
    });
    
    if(this.validate()){
      console.log(this.state)

      let input= {};
      input["telefono"]="";
      this.setState({input:input})
    }


    alert('Informacion recibida');
  } 

  validate(){
    let input = this.state.input;
    let error = {};
    let isValid = true;

    if (!input["phone"]) {
      isValid = false;
      error["phone"] = "Please enter your phone number.";
    }

    if (typeof input["phone"] !== "undefined") {
        
      var pattern = new RegExp(/\D*([+56]\d [2-9])(\D)(\d{4})(\D)(\d{4})\D*/g);
      if (!pattern.test(input["phone"])) {
        isValid = false;
        error["phone"] = "Please enter only number.";
      }else if(input["phone"].length !== 10){
        isValid = false;
        error["phone"] = "Please enter valid phone number.";
      }
    }
  }

  render(){
    return(
      <div className='mainContainerM'>
        <section className='mainBackground'>
          <div className="mainContainer">
            <div className="estudia">
              <h1 className="titulo">¡Estudia en CIISA una de nuestras carreras Online o Presencial!</h1>
                <p className="modalidad">(Modalidad Flex, contingencia Covid)</p>
                <div className="imgWtext">
                  <p>Institucuión Acreditada:</p>
                  <img alt="info" src="https://res.cloudinary.com/du9zaipqt/image/upload/v1606545984/cisa/acreditacion_ygyylr.png"/>
                </div>
                <div className="renglones">
                  <div className="renglon">
                    <span className="arrowUp"></span>
                    <p>45 años de experiencia.</p>
                  </div>
                  <div className="renglon">
                    <span className="arrowUp"></span>
                    <p>Docentes que trabajan en el mundo tecnologico.</p>
                  </div>
                <div className="renglon">
                  <span className="arrowUp"></span>
                  <p>Especialistas en educación tecnológica.</p>
                </div>
                </div> 
                <button className="postula" onClick={this.blur}><a href="#informes">Postula aquí</a></button>
            </div>
            <div className='informacion' id="informes">
          <h1 className="titulo-form">DANOS SÓLO 5 MINUTOS</h1>
          <p>Siempre hay un siguiente nivel.</p>

          <FormAddProduct onSubmit={this.agregarPostulacion}>
            <input
              name="nombre"
              type="text"
              value={this.state.nombre}
              onChange={this.changeInput}
              placeholder="Nombre y Apellido"
              required
            />
            <input 
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.changeInput}
              placeholder=" Correo electrónico"
              required
            />
            <input 
              name="telefono"
              value={this.state.input.telefono}
              onChange={this.changeInput}
              type="text"
              placeholder="+56 solo aplica en Chile"
            />
            <select name="carrera" value={this.state.carrera} onChange={this.changeInput}>
              <option>Elige tu Carreras</option>
              <option name="Ingenieria en Informatica" value="Ingenieria en Informatica">Ingeniería en Informática</option>
              <option name="Tecnico en Programación y Analisis de Sistemas" value="Tecnico en Programación y Analisis de Sistemas">Técnico en Programación y Análisis de Sistemas</option>
              <option name="Admision Especial a Ingenieria en Informatica" value="Admision Especial a Ingenieria en Informatica">Admisión Especial a Ingeniería en Informática</option>
              <option name="Ingenieria en Conectividad y Redes" value="Ingenieria en Conectividad y Redes">Ingeniería en Conectividad y Redes</option>
              <option name="Tecnico en Conectividad y Redes" value="Tecnico en Conectividad y Redes">Técnico en Conectividad y Redes</option>
              <option name="Admision Especial a Ingenieria en Conectividad y Redes" value="Admision Especial a Ingenieria en Conectividad y Redes">Admisión Especial a Ingeniería en Conectividad y Redes</option>
              <option name="Ingenieria en Ciberseguridad" value="Ingenieria en Ciberseguridad">Ingeniería en Ciberseguridad</option>
              <option name="Tecnico en Ciberseguridad" value="Tecnico en Ciberseguridad">Técnico en Ciberseguridad</option>
              <option name="Admision Especial a Ingenieria en Ciberseguridad" value="Admision Especial a Ingenieria en Ciberseguridad">Admisión Especial a Ingeniería en Ciberseguridad</option>
              <option name="Ingenieria en Automatizacion y Control Industrial" value="Ingenieria en Automatizacion y Control Industrial">Ingeniería en Automatización y Control Industrial</option>
              <option name="Tecnico en Automatizacion y Control Industrial" value="Tecnico en Automatizacion y Control Industrial">Técnico en Automatización y Control Industrial</option>
              <option name="Tecnico en Control Industrial" value="Tecnico en Control Industrial">Técnico en Control Industrial</option>
              <option name="Admision Especial a Ingenieria en Automatizacion y Control Industrial" value="Admision Especial a Ingenieria en Automatizacion y Control Industrial">Admisión Especial a Ingeniería en Automatización y Control Industrial</option>
            </select>
          <select name="tipo" value={this.state.tipo} onChange={this.changeInput}>
            <option>Confirma el tipo de Carrera</option>
            <option value="Ingenieria">Ingeniería</option>
            <option value="Tecnico">Técnico</option>
            <option value="Admisiones Especiales">Admisión Especial</option>
          </select>
          <div className="terminos">
          <input 
              name="terms"
              type="checkbox"
              required
            />
          <label>Acepto el Aviso de privacidad y Términos y Condiciones </label>
          </div>
          
          <button>Mayor información »</button>
          </FormAddProduct>
        
          
        </div>

          </div>
        
        </section>
        
        <section className="mainContenedorHab">
          <div className="contenedorHab">
            <div className="bloque">Modalidades que se adaptan a tus necesidades</div>
            <div className="bloque">90% de empleabilidad dentro del 1er año de egreso*</div>
            <div className="bloque">+2.600 titulados que confiaron nosotros</div>
            <div className="bloque">Certificaciones y convenios con la industria</div>
          </div>
          <div className="contenedorProf">
            <h2>Profesionales que Lideran la Transformación Digital</h2>
          </div>
        </section>

        <section className="mainContenedorCar">
          <h2>Elige una de nuestras carreras</h2>
          <div className="contenedorCar">
            <div className="cardCar">
            <a href="#informes"><img src="https://res.cloudinary.com/du9zaipqt/image/upload/v1606545983/cisa/c-3_ehbaph.png" alt="" className="imgCardCar"/></a>
              <p>Ingeniería en Informática</p>
            </div>
            <div className="cardCar">
            <a href="#informes"><img src="https://res.cloudinary.com/du9zaipqt/image/upload/v1606545983/cisa/c-2_pw7rfv.png" alt=""  className="imgCardCar"/></a>
              <p>Técnico en Programación y Análisis de Sistemas</p>
            </div>
            <div className="cardCar">
            <a href="#informes"><img src="https://res.cloudinary.com/du9zaipqt/image/upload/v1606545983/cisa/c-3_ehbaph.png" alt=""  className="imgCardCar"/></a>
              <p>Adminisión especial a Ingeniería en Informática</p>
            </div>
            <div className="cardCar">
            <a href="#informes"><img src="https://res.cloudinary.com/du9zaipqt/image/upload/v1606545984/cisa/c-6_oqdng5.png" alt="" className="imgCardCar"/></a>
              <p>Ingeniería en Conectividad y Redes</p>
            </div>
            <div className="cardCar">
            <a href="#informes"><img src="https://res.cloudinary.com/du9zaipqt/image/upload/v1606545984/cisa/c-5_bve9ln.png" alt=""  className="imgCardCar"/></a>
              <p>Técnico en Conectividad y Redes</p>
            </div>
            <div className="cardCar">
            <a href="#informes"><img src="https://res.cloudinary.com/du9zaipqt/image/upload/v1606545984/cisa/c-6_oqdng5.png" alt=""  className="imgCardCar"/></a>
              <p>Adminisión especial a Ingeniería en Conectividad y Redes</p>
            </div>
            <div className="cardCar">
            <a href="#informes"><img src="https://res.cloudinary.com/du9zaipqt/image/upload/v1606545986/cisa/c-9_nyjrti.png" alt=""  className="imgCardCar"/></a>
              <p>Ingeniería en Ciberseguridad</p>
            </div>
            <div className="cardCar">
            <a href="#informes"><img src="https://res.cloudinary.com/du9zaipqt/image/upload/v1606545985/cisa/c-8_b4g2nd.png" alt=""  className="imgCardCar"/></a>
              <p>Técnico en Ciberseguridad</p>
            </div>
            <div className="cardCar">
            <a href="#informes"><img src="https://res.cloudinary.com/du9zaipqt/image/upload/v1606545986/cisa/c-9_nyjrti.png" alt=""  className="imgCardCar"/></a>
              <p>Adminisión especial a Ingeniería en Ciberseguridad</p>
            </div>
            <div className="cardCar">
            <a href="#informes"><img src="https://res.cloudinary.com/du9zaipqt/image/upload/v1606545978/cisa/c-10_mxdef3.png" alt=""  className="imgCardCar"/></a>
              <p>Técnico en Automatización y Control Industrial</p>
            </div>
            <div className="cardCar">
            <a href="#informes"><img src="https://res.cloudinary.com/du9zaipqt/image/upload/v1606546014/cisa/c-11_abzspm.png" alt=""  className="imgCardCar"/></a>
              <p>Técnico en Control Industrial</p>
            </div>
            <div className="cardCar">
            <a href="#informes"><img src="https://res.cloudinary.com/du9zaipqt/image/upload/v1606545979/cisa/c-12_ed3wpf.png" alt=""  className="imgCardCar"/></a>
              <p>Adminisión especial a Ingeniería en Automatización y Control Industrial</p>
            </div>
            <div className="cardCar">
            <a href="#informes"><img src="https://res.cloudinary.com/du9zaipqt/image/upload/v1606546007/cisa/c-13_harmos.png" alt=""  className="imgCardCar"/></a>
              <p>Ingeniería en Automatización y Control Industrial</p>
            </div>
          </div>
        </section>

        <section className="mainContenedorPlan">
          <h3>Planes formativos con niveles de certificación progresiva.</h3>
          <div className="cardContenedor">
            <div className="cardPlan">
              <img src="https://res.cloudinary.com/du9zaipqt/image/upload/v1606545980/cisa/ch-1_1_gsewrq.svg" alt="CIISA"/>
              <p className="strongP">90%</p>
              <p className="cardPlanTexto">de empleabilidad dentro del primer año de egreso*</p>
            </div>
            <div className="cardPlan">
              <img src="https://res.cloudinary.com/du9zaipqt/image/upload/v1606545980/cisa/ch-2_fttsvp.svg" alt="CIISA"/>
              <p className="strongP">45</p>
              <p  className="cardPlanTexto">Años de trayectoria en educación tecnológica</p>
            </div>
            <div className="cardPlan">
              <img src="https://res.cloudinary.com/du9zaipqt/image/upload/v1606545980/cisa/ch-3_zfb7p0.svg" alt="CIISA"/>
              <p className="strongP">Experiencia</p>
              <p  className="cardPlanTexto">Experiencia exitosa en educación online desde el 2017</p>
            </div>
            <div className="cardPlan">
              <img src="https://res.cloudinary.com/du9zaipqt/image/upload/v1606545980/cisa/ch-1_1_gsewrq.svg" alt="CIISA"/>
              <p className="strongP">+2.600</p>
              <p  className="cardPlanTexto">Titulados confiaron en nosotros</p>
            </div>
          </div>
        </section>

        <section className="mainContenedorInfo">
          <a href="#informes"><button className="masInfoButton">
            Más información »
            </button>
          </a>
        </section>
        
      </div>
    )  
  }
}
export default Main;