const { response } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const Postulaciones = require('../models/postulaciones');
const router = express.Router();
const catchErros = require('../middlewares/catchEerrors');
const Postulacion = require('../models/postulaciones');


//crea postulacion
router.post('/postulate', (req,res,next) => {
  Postulacion.create({
    nombre: req.body.nombre,
    email: req.body.email,
    telefono: req.body.telefono,
    carrera: req.body.carrera,
    tipo: req.body.tipo
  })
  .then(response => {
    res.json(response);
  })
  .catch(err => {
    res.json(err)
  })
})

//get todas las postulaciones
router.get('/postulaciones', (req,res,next) => {
  Postulacion.find()
  .then(response => {
    res.json(response);
  })
  .catch(err => {
    res.json(err)
  })
})
//get tecnico
router.get('/tecnico', (req,res,next) => {
  Postulacion.find({ tipo: "Tecnico" })
  .then(response => {
    res.json(response);
  })
  .catch(err => {
    res.json(err)
  })
})
//get ingenieria
router.get('/ingenieria', (req,res,next) => {
  Postulacion.find({ tipo: "Ingenieria" })
  .then(response => {
    res.json(response);
  })
  .catch(err => {
    res.json(err)
  })
})
//get Admisiones Especiales
router.get('/admisionesEsp', (req,res,next) => {
  Postulacion.find({ tipo: "Admisiones Especiales" })
  .then(response => {
    res.json(response);
  })
  .catch(err => {
    res.json(err)
  })
})

module.exports = router