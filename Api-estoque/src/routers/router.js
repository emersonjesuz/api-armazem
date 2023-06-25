const express = require("express");
const cadastrarEmpresa = require("../controllers/usuarios.controladores/cadastrarUsuario");
const loginDoUsuario = require("../controllers/usuarios.controladores/loginUsuario");

const router = express();

router.post("/login", loginDoUsuario);
router.post("/cadastrar", cadastrarEmpresa);
// router.get("/estoque/:usuario_id", exibirEstoque);

module.exports = router;
