const knex = require("../../database/conexao.db");

async function listarProdutos(req, res) {
  const { id: empresaId } = req.cliente;

  try {
    const produtosEmEstoque = await knex("produtos")
      .where({
        id_empresa: empresaId,
      })
      .select("id", "nome_produto", "descricao", "unidades", "imagem");

    return res.json(produtosEmEstoque);
  } catch (error) {
    return res.status(500).json({ messege: "Error interno do servidor!" });
  }
}

module.exports = listarProdutos;
