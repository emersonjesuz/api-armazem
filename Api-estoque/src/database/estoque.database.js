const cliente = require("./database");

async function exibirEstoque() {
  try {
    await cliente.connect();
    const resultado = await cliente.query("select * from estoque");
    if (!resultado.rows.length) return false;
    return resultado.rows;
  } catch (error) {
    return false;
  } finally {
    await cliente.end();
  }
}

async function adicionarEstoque(
  nome,
  categoria,
  descricao,
  codigo_barra,
  usuario_id
) {
  try {
    await cliente.connect();
    await cliente.query(
      `insert into estoque ("nome", "categoria", "descricao", "codigo_barra", "usuario_id") values ('${nome}', '${categoria}', '${descricao}', '${codigo_barra}', '${usuario_id}');`
    );
  } catch (error) {
    return error;
  } finally {
    await cliente.end();
  }
}

async function atualizarItemDoEstoque(id, ...atualizacoes) {
  try {
    const [nome, descricao] = atualizacoes;
    await cliente.connect();
    await cliente.query(
      "update estoque set nome ='" +
        nome +
        "', descricao = '" +
        descricao +
        "' where id = " +
        id
    );
  } catch (error) {
    return false;
  } finally {
    await cliente.end();
  }
}

async function ApagarDoEstoque(id) {
  try {
    await cliente.connect();
    await cliente.query("delete from estoque where id = '" + id + "'");
  } catch (error) {
    return error;
  } finally {
    await cliente.end();
  }
}

module.exports = {
  exibirEstoque,
  adicionarEstoque,
  atualizarItemDoEstoque,
  ApagarDoEstoque,
};
