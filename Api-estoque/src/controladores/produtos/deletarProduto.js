const knex = require("../../database/conexao.db");

async function deletarProduto(req, res) {
  const { id } = req.params;
  const { status, ...cliente } = req.cliente;

  if (status !== "funcionario")
    return res.status(401).json({ message: "Não Autorizado!" });

  if (!id) return res.status(400).json({ message: "informe o produto" });

  try {
    const produto = await knex("produtos").where({ id });

    if (!produto.length)
      return res.status(404).json({ message: "informe o produto correto" });

    if (produto[0].unidades > 0)
      return res
        .status(404)
        .json({ message: "o produto ainda possuir unidades" });

    const deletandoProduto = await knex("produtos")
      .del()
      .where({ id, unidades: 0 })
      .returning(["id", "unidades", "nome_produto"]);

    const registro = await registrandoUmaAcao(
      cliente.id_empresa,
      cliente.id,
      cliente.nome_funcionario,
      deletandoProduto[0].id,
      deletandoProduto[0].nome_produto,
      "deletar",
      deletandoProduto[0].unidades
    );
    //  não deleta por conta da referencia

    if (!registro)
      return res.status(500).json({ message: "erro  interno no servidor!" });

    res.json("produto deletado!");
  } catch (error) {
    return res.status(500).json({ message: "erro  interno no servidor!" });
  }
}

module.exports = deletarProduto;
