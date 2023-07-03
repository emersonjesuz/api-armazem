const express = require("express");
const cadastrarEmpresa = require("../../controladores/empresas/cadastrarEmpresas");
const cadastrarFuncionarios = require("../../controladores/empresas/cadastrarFuncionario");
const listarFuncionarios = require("../../controladores/empresas/listarFuncionarios");
const loginDaEmpresa = require("../../controladores/empresas/loginEmpresa");
const vericandoTokenEmpresa = require("../../intermediarios/verificandoTokenEmpresa");

const rotasEmpresa = express();

rotasEmpresa.post("/empresa/login", loginDaEmpresa);
rotasEmpresa.post("/empresa/cadastrar", cadastrarEmpresa);

rotasEmpresa.use(vericandoTokenEmpresa);

rotasEmpresa.get("/empresa/funcionarios", listarFuncionarios);
rotasEmpresa.post("/empresa/funcionario/cadastro", cadastrarFuncionarios);

module.exports = rotasEmpresa;
