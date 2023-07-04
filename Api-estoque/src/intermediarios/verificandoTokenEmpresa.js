require("dotenv").config();
const jwt = require("jsonwebtoken");
const knex = require("../database/conexao.db");

async function vericandoTokenEmpresa(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization)
    return res.status(401).json({ message: "Não autorizado!" });

  const token = authorization.split(" ")[1].split("//")[0];

  try {
    const { id } = jwt.verify(token, process.env.SENHA_JWT_EMPRESA);

    const existeEmpresa = await knex("empresas").where({ id: id });

    if (!existeEmpresa.length)
      return res.status(401).json({ message: "Não autorizado!" });
    const { senha: _, ...dadosEmpresa } = existeEmpresa[0];
    req.empresa = dadosEmpresa;

    next();
  } catch (error) {
    if (error.message === "invalid token")
      return res.status(401).json({ message: "Não autorizado!" });
    return res.status(500).json({ message: "Erro interno no servidor!" });
  }
}

module.exports = vericandoTokenEmpresa;
