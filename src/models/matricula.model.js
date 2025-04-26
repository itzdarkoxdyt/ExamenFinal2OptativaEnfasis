const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Matricula = sequelize.define('Matricula', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  fecha_matricula: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: false
});

module.exports = Matricula;