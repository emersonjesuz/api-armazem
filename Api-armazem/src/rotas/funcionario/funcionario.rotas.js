const express = require("express");
const autenticarFuncionario = require("../../controladores/funcionarios/autenticarFuncionario");
const loginFuncionario = require("../../controladores/funcionarios/loginFunciocario");

const rotasFuncionario = express();

rotasFuncionario.post("/funcionario/autenticar", autenticarFuncionario);
rotasFuncionario.post("/funcionario/login", loginFuncionario);

module.exports = rotasFuncionario;
