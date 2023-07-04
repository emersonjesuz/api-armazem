require("dotenv").config();
const jwt = require("jsonwebtoken");
const knex = require("../database/conexao.db");

async function vericandoToken(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization)
    return res.status(401).json({ message: "Não autorizado!" });

  const token = authorization.split(" ")[1];

  try {
    const { id, status } = jwt.verify(token, process.env.SENHA_JWT_EMPRESA);

    const verificandoStatusDoCliente =
      status === "empresa" ? "empresas" : "funcionarios";

    const existeCliente = await knex(verificandoStatusDoCliente).where({
      id: id,
    });

    if (!existeCliente.length)
      return res.status(401).json({ message: "Não autorizado!" });
    const { senha: _, ...dadosCliente } = existeCliente[0];
    req.cliente = { status, ...dadosCliente };

    next();
  } catch (error) {
    if (error.message === "invalid token")
      return res.status(401).json({ message: "Não autorizado!" });
    return res.status(500).json({ message: "Erro interno no servidor!" });
  }
}

module.exports = vericandoToken;
