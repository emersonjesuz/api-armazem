const knex = require("../../database/conexao.db");

async function listarFuncionarios(req, res) {
  const { id } = req.empresa;

  try {
    const listaDeFuncionarios = await knex("funcionarios")
      .where({
        id_empresa: id,
      })
      .select("id", "nome_funcionario", "perfil_imagem", "email", "telefone");

    res.json(listaDeFuncionarios);
  } catch (error) {
    res.staus(500).json({ message: "erro interno no servidor!" });
  }
}

module.exports = listarFuncionarios;
