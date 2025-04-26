const { Sequelize } = require('sequelize');
const config = require('../../config');


const sequelize = new Sequelize(config.db.name, config.db.user, config.db.password, {
  host: config.db.host,
  dialect: 'mysql',
  port: 3306, 
  logging: process.env.NODE_ENV === 'development' ? console.log : false, 
  define: {
    freezeTableName: true, 
    timestamps: false 
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  dialectOptions: {
    connectTimeout: 60000 
  }
});


sequelize.authenticate()
  .then(() => {
    console.log('Conexión a MySQL establecida correctamente');
  })
  .catch(err => {
    console.error('Error de conexión a MySQL:', err);
  });

module.exports = sequelize;