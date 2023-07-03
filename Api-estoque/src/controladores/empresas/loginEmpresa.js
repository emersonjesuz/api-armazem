require("dotenv").config();
const knex = require("../../database/conexao.db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function loginDaEmpresa(req, res) {
  const { email, senha } = req.body;
  if (!email || !senha)
    return res.status(400).json({ message: "preencha todos os campos" });
  try {
    const existeEmpresa = await knex("empresas").where({ email: email });

    if (!existeEmpresa.length)
      return res.status(400).json({ message: "email ou senha incorreto!" });
    const verificarSenha = await bcrypt.compare(senha, existeEmpresa[0].senha);

    if (!verificarSenha)
      return res.status(400).json({ message: "email ou senha incorreto!" });

    const token = jwt.sign(
      { id: existeEmpresa[0].id },
      process.env.SENHA_JWT_EMPRESA,
      {
        expiresIn: "8h",
      }
    );
    const { senha: _, ...dadosEmpresa } = existeEmpresa[0];

    return res.json({ dadosEmpresa, token });
  } catch (error) {
    return res.status(500).json({ message: "error interno no servidor! " });
  }
}

module.exports = loginDaEmpresa;
