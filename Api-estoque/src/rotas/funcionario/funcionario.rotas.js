const express = require("express");
const autenticarFuncionario = require("../../controladores/funcionarios/autenticarFuncionario");
const loginFuncionario = require("../../controladores/funcionarios/loginFunciocario");
const verificandoTokenFuncionario = require("../../intermediarios/verificandoTokenFuncionario");

const rotasFuncionario = express();

rotasFuncionario.post("/funcionario/autenticar", autenticarFuncionario);
rotasFuncionario.post("/funcionario/login", loginFuncionario);
// rotasFuncionario.use(verificandoTokenFuncionario);
// rotasFuncionario.get("/funcionario/:idFuncionario", listarFuncionarios);

module.exports = rotasFuncionario;
