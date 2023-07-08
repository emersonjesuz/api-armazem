const knex = require("../../database/conexao.db");

async function listarProdutos(req, res) {
  const { pagina } = req.query;
  const { status, ...cliente } = req.cliente;

  let idCliente = cliente.id_empresa;
  if (status !== "funcionario") {
    idCliente = cliente.id;
  }
  try {
    const paginacao = pagina ? pagina : 0;
    const produtosEmEstoque = await knex("produtos")
      .where({
        id_empresa: idCliente,
        deletado: false,
      })
      .select("id", "nome_produto", "descricao", "unidades", "imagem")
      .limit(10)
      .offset(paginacao);

    return res.json(produtosEmEstoque);
  } catch (error) {
    return res.status(500).json({ messege: "Error interno do servidor!" });
  }
}

module.exports = listarProdutos;
