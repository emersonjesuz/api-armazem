const express = require("express");
const rotasEmpresa = require("./rotas/empresa/empresa.rotas");
const rotasFuncionario = require("./rotas/funcionario/funcionario.rotas");

const app = express();

app.use(express.json());

app.use(rotasEmpresa);
app.use(rotasFuncionario);

app.listen(process.env.PORT);
