const express = require("express");
const loginFuncionario = require("./controladores/funcionarios/loginFunciocario");
const rotasEmpresa = require("./rotas/empresa/empresa.rotas");
const rotasFuncionario = require("./rotas/funcionario/funcionario.rotas");

const app = express();

app.use(express.json());
app.post("/funcionario/login", loginFuncionario);

app.use(rotasEmpresa);
app.use(rotasFuncionario);

app.listen(process.env.PORT);
