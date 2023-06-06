const express = require("express");

const {
  cadastrarUsuario,
  loginDoUsuario,
} = require("../controllers/usuario.controllers");
const router = express();

router.post("/login", loginDoUsuario);
router.post("/cadastrar", cadastrarUsuario);

module.exports = router;
