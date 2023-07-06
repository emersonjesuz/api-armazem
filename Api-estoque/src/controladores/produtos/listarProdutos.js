const knex = require("../../database/conexao.db");

async function listarProdutos(req, res) {
  const { pagina } = req.query;
  const { id: empresaId } = req.cliente;

  try {
    if (!pagina) return res.status(400).json({ messege: "informe a pagina" });
    const produtosEmEstoque = await knex("produtos")
      .where({
        id_empresa: empresaId,
      })
      .select("id", "nome_produto", "descricao", "unidades", "imagem")
      .limit(10)
      .offset(pagina);

    return res.json(produtosEmEstoque);
  } catch (error) {
    return res.status(500).json({ messege: "Error interno do servidor!" });
  }
}

module.exports = listarProdutos;
