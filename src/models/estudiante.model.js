const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Estudiante = sequelize.define('Estudiante', {
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
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },
  fecha_nacimiento: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    validate: {
      isDate: true
    }
  }
}, {
  timestamps: false
});

module.exports = Estudiante;