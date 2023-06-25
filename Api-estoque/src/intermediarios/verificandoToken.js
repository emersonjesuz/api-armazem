require("dotenv").config();
const jwt = require("jsonwebtoken");
const knex = require("../database/conexao.db");

async function vericandoToken(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization)
    return res.status(401).json({ message: "Não autorizado!" });

  const token = authorization.split(" ")[1];
  try {
    const { id } = jwt.verify(token, process.env.SENHA_JWT);

    const existeEmpresa = await knex("empresas").where({ id: id }).count();

    if (!existeEmpresa[0].count)
      return res.status(401).json({ message: "Não autorizado!" });

    next();
  } catch (error) {
    return res.status(500).json({ message: "Erro interno no servidor!" });
  }
}

module.exports = vericandoToken;