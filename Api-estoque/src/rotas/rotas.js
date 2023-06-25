const express = require("express");
const cadastrarEmpresa = require("../controllers/usuarios.controladores/cadastrarUsuario");
const loginDoUsuario = require("../controllers/usuarios.controladores/loginUsuario");
const vericandoToken = require("../intermediarios/verificandoToken");

const rotas = express();

rotas.post("/login", loginDoUsuario);
rotas.post("/cadastrar", cadastrarEmpresa);

rotas.use(vericandoToken);
// rotas.get("/estoque/:usuario_id", exibirEstoque);

module.exports = rotas;
