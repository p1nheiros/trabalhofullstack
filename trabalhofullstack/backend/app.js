const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pessoaRoutes = require('./routes/pessoa-routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/pessoas', pessoaRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
