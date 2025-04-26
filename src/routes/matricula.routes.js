const express = require('express');
const router = express.Router();
const controller = require('../controllers/matricula.controller');

router.post('/', controller.createMatricula);
router.get('/', controller.getAllMatriculas);

module.exports = router;