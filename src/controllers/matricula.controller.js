const { Matricula, Estudiante, Curso } = require('../models');

exports.createMatricula = async (req, res) => {
  try {
    const { estudianteId, cursoId } = req.body;
    
    const [estudiante, curso] = await Promise.all([
      Estudiante.findByPk(estudianteId),
      Curso.findByPk(cursoId)
    ]);
    
    if (!estudiante || !curso) {
      return res.status(404).json({ error: 'Estudiante o curso no encontrado' });
    }
    
    const matriculaExistente = await Matricula.findOne({ 
      where: { estudianteId, cursoId } 
    });
    
    if (matriculaExistente) {
      return res.status(400).json({ error: 'El estudiante ya está matriculado en este curso' });
    }
    
    const matricula = await Matricula.create({ estudianteId, cursoId });
    res.status(201).json(matricula);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllMatriculas = async (req, res) => {
  try {
    const matriculas = await Matricula.findAll({
      include: [
        { model: Estudiante },
        { model: Curso }
      ]
    });
    res.json(matriculas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};