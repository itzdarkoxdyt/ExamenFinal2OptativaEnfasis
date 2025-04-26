const express = require('express');
const router = express.Router();


router.use('/cursos', require('./curso.routes'));
router.use('/estudiantes', require('./estudiante.routes'));
router.use('/matriculas', require('./matricula.routes'));

module.exports = router;