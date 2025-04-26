const express = require('express');
const router = express.Router();
const {
  getAllCursos,
  getCursoById,
  createCurso,
  updateCurso,
  deleteCurso,
  getEstudiantesByCurso
} = require('../controllers/curso.controller');


router.get('/', getAllCursos);


router.get('/:id', getCursoById);


router.post('/', createCurso);


router.put('/:id', updateCurso);


router.delete('/:id', deleteCurso);


router.get('/:id/estudiantes', getEstudiantesByCurso);

module.exports = router;