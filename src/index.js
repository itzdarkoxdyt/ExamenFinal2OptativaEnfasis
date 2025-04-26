const app = require('./app/app');
const { sequelize } = require('./models'); 

const PORT = process.env.PORT || 3000;

// Verificación de conexión y sincronización
sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida');
    return sequelize.sync({ force: false });
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch(error => {
    console.error('Error al iniciar la aplicación:', error);
  });