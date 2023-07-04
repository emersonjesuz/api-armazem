const knex = require("../database/conexao.db");

async function verificandoTokenFuncionario(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization)
    return res.status(401).json({ message: "Não autorizado!" });

  const token = authorization.split(" ")[1].split("//")[1];
  try {
    const { id } = jwt.verify(token, process.env.SENHA_JWT_FUNCIONARIO);

    const funcionario = await knex("funcionarios").where({ id });

    if (!funcionario.length)
      return res.status(404).json("funcionario não encontrado!");

    req.funcionario = funcionario[0];
    next();
  } catch (error) {
    res.status(500).json({ message: "Erro interno no servidor!" });
  }
}

module.exports = verificandoTokenFuncionario;
