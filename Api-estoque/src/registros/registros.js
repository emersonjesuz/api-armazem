const knex = require("../database/conexao.db");

async function registrandoUmaAcao(
  id_empresa,
  id_funcionario,
  nome_funcionario,
  id_produto,
  nome_produto,
  tipo,
  unidades
) {
  const registro = await knex("registros").insert({
    id_empresa,
    id_funcionario,
    nome_funcionario,
    id_produto,
    nome_produto,
    tipo,
    unidades: unidades ? unidades : 0,
  });

  if (!registro) {
    return false;
  }
  return true;
}

module.exports = registrandoUmaAcao;
