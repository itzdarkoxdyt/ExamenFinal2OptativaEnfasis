const sequelize = require('../db/db');
const Curso = require('./curso.model');
const Estudiante = require('./estudiante.model');
const Matricula = require('./matricula.model');

// Relaciones muchos-a-muchos
Estudiante.belongsToMany(Curso, {
  through: Matricula,
  foreignKey: 'estudianteId'
});

Curso.belongsToMany(Estudiante, {
  through: Matricula,
  foreignKey: 'cursoId'
});


Matricula.belongsTo(Estudiante, { 
  foreignKey: 'estudianteId',
  onDelete: 'CASCADE' 
});

Matricula.belongsTo(Curso, { 
  foreignKey: 'cursoId',
  onDelete: 'CASCADE' 
});

// Exportación
module.exports = {
  sequelize,
  Curso,
  Estudiante,
  Matricula
};