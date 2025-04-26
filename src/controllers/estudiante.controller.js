const { Estudiante, Curso } = require('../models');

exports.getAllEstudiantes = async (req, res) => {
  try {
    const estudiantes = await Estudiante.findAll();
    res.json(estudiantes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getEstudianteById = async (req, res) => {
  try {
    const estudiante = await Estudiante.findByPk(req.params.id);
    if (!estudiante) {
      return res.status(404).json({ error: 'Estudiante no encontrado' });
    }
    res.json(estudiante);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.createEstudiante = async (req, res) => {
  try {
    const estudiante = await Estudiante.create(req.body);
    res.status(201).json(estudiante);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateEstudiante = async (req, res) => {
  try {
    const [updated] = await Estudiante.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedEstudiante = await Estudiante.findByPk(req.params.id);
      return res.json(updatedEstudiante);
    }
    return res.status(404).json({ error: 'Estudiante no encontrado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteEstudiante = async (req, res) => {
  try {
    const deleted = await Estudiante.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      return res.json({ message: 'Estudiante eliminado' });
    }
    return res.status(404).json({ error: 'Estudiante no encontrado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getCursosByEstudiante = async (req, res) => {
  try {
    const estudiante = await Estudiante.findByPk(req.params.id, {
      include: [{
        model: Curso,
        through: { attributes: [] }
      }]
    });
    if (!estudiante) {
      return res.status(404).json({ error: 'Estudiante no encontrado' });
    }
    res.json(estudiante.Cursos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};