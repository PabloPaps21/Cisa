const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postulacionSchema = new Schema (
  {
    nombre: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required:  true,
      lowercase: true,
      trim: true
    },
    telefono: {
      type: Number,
      required:true
    },
    carrera: {
      type: String,
      required:true,
      enum: [
        "Ingenieria en Informatica", 
        "Tecnico en Programacion y Analisis de Sistemas",
        "Admision Especial a Ingenieria en Informatica",
        "Ingenieria en Conectividad y Redes",
        "Tecnico en Conectividad y Redes",
        "Admision Especial a Ingenieria en Conectividad y Redes",
        "Ingenieria en Ciberseguridad",
        "Tecnico en Ciberseguridad",
        "Admision Especial a Ingeniería en Ciberseguridad",
        "Tecnico en Automatizacion y Control Industrial",
        "Tecnico en Control Industrial",
        "Admision Especial a Ingenieria en Automatizacion y Control Industrial",
        "Ingenieria en Automatizacion y Control Industrial"
      ]
    },
    tipo: {
      type: String,
      required:true,
      enum: [
        "Admisiones Especiales",
        "Tecnico",
        "Ingenieria"
      ]
    }  
  },
  {
    timestamps:true,
    versionKey:false
  }
)


const Postulaciones = mongoose.model('Postulaciones', postulacionSchema);
module.exports = Postulaciones;