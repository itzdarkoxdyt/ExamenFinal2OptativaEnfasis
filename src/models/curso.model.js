const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Curso = sequelize.define('Curso', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  duracion_horas: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1
    }
  }
}, {
  timestamps: false
});

module.exports = Curso;