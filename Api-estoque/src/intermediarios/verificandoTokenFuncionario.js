const knex = require("../database/conexao.db");

async function verificandoTokenFuncionario(req, res, next) {
  const { idFuncionario } = req.params;
  console.log(req.url);
  if (!idFuncionario)
    return res.status(401).json({ message: "Não autorizado!" });

  try {
    const funcionario = await knex("funcionarios").where({ id: idFuncionario });

    if (!funcionario.length)
      return res.status(404).json("funcionario não encontrado!");

    req.funcionario = funcionario[0];
    next();
  } catch (error) {
    res.status(500).json({ message: "Erro interno no servidor!" });
  }
}

module.exports = verificandoTokenFuncionario;
