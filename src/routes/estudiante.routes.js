const express = require('express');
const router = express.Router();
const {
  getAllEstudiantes,
  getEstudianteById,
  createEstudiante,
  updateEstudiante,
  deleteEstudiante,
  getCursosByEstudiante
} = require('../controllers/estudiante.controller');


router.get('/', getAllEstudiantes);
router.get('/:id', getEstudianteById);
router.post('/', createEstudiante);
router.put('/:id', updateEstudiante);
router.delete('/:id', deleteEstudiante);
router.get('/:id/cursos', getCursosByEstudiante);

module.exports = router;