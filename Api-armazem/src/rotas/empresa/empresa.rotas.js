const express = require("express");
const cadastrarEmpresa = require("../../controladores/empresas/cadastrarEmpresas");
const cadastrarFuncionarios = require("../../controladores/empresas/cadastrarFuncionario");
const listarFuncionarios = require("../../controladores/empresas/listarFuncionarios");
const loginDaEmpresa = require("../../controladores/empresas/loginEmpresa");
const historicoProdutos = require("../../controladores/produtos/historicoProdutos");
const vericandoToken = require("../../intermediarios/verificandoToken");

const rotasEmpresa = express();

rotasEmpresa.post("/empresa/login", loginDaEmpresa);
rotasEmpresa.post("/empresa/cadastrar", cadastrarEmpresa);
rotasEmpresa.use(vericandoToken);
rotasEmpresa.get("/empresa/funcionarios", listarFuncionarios);
rotasEmpresa.post("/empresa/funcionario/cadastro", cadastrarFuncionarios);
rotasEmpresa.get("/empresa/registros", historicoProdutos);

module.exports = rotasEmpresa;
