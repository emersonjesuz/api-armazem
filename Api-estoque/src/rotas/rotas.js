const express = require("express");
const cadastrarEmpresa = require("../controllers/empresas.controladores/cadastrarEmpresas");
const loginDoUsuario = require("../controllers/empresas.controladores/loginEmpresa");
const cadastrarFuncionarios = require("../controllers/funcionarios.controladores/cadastrarFuncionario");
const vericandoToken = require("../intermediarios/verificandoToken");

const rotas = express();

rotas.post("/login", loginDoUsuario);
rotas.post("/cadastrar", cadastrarEmpresa);

rotas.use(vericandoToken);

rotas.post("/funcionarios/cadastrar", cadastrarFuncionarios);

module.exports = rotas;
