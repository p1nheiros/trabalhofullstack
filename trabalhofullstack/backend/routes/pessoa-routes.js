const express = require('express');
const pessoaController = require('../controllers/pessoa-controller'); // Importa o controlador

const router = express.Router();

// Define as rotas e associa ao controlador
router.post('/', pessoaController.createPessoa); // Rota para criar pessoa
router.get('/', pessoaController.getPessoas); // Rota para listar pessoas

module.exports = router;
