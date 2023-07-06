const knex = require("../../database/conexao.db");

async function exibirProduto(req, res) {
  const { id } = req.params;
  if (!id) return res.status(400).json({ message: "informe o produto!" });

  try {
    const produto = await knex("produtos")
      .where({ id })
      .select("id", "nome_produto", "descricao", "unidades", "imagem");
    return res.json(produto);
  } catch (error) {
    return res.status(500).json({ message: "Erro  interno do servidor!" });
  }
}

module.exports = exibirProduto;
