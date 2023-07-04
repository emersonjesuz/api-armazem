const express = require("express");
const rotasEmpresa = require("./rotas/empresa/empresa.rotas");
const rotasFuncionario = require("./rotas/funcionario/funcionario.rotas");
const rotasProdutos = require("./rotas/produtos/produtos.rotas");

const app = express();

app.use(express.json());

app.use(rotasFuncionario);
app.use(rotasEmpresa);
app.use(rotasProdutos);

app.listen(process.env.PORT);
