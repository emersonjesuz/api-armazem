const knex = require("../../database/conexao.db");
const registrandoUmaAcao = require("../../registros/registros");

async function editarProduto(req, res) {
  const { id } = req.params;
  const { nomeProduto, descricao, unidade, imagem } = req.body;

  const { status, ...cliente } = req.cliente;

  if (status !== "funcionario")
    return res.status(401).json({ message: "Não Autorizado!" });

  if (!id)
    return res.status(400).json({ message: "informe o produto correto!" });

  try {
    const editandoProduto = await knex("produtos")
      .update({
        nome_produto: nomeProduto,
        descricao,
        unidade,
        imagem,
      })
      .where({ id })
      .returning(["id", "nome_produto"]);

    if (!editandoProduto.length)
      return res.status(404).json({ message: "produto não encontrado!" });

    const registro = await registrandoUmaAcao(
      cliente.id_empresa,
      cliente.id,
      cliente.nome_funcionario,
      editandoProduto[0].id,
      editandoProduto[0].nome_produto,
      "editar",
      unidade
    );

    if (!registro)
      return res.status(500).json({ message: "erro interno no servidor!" });

    res.json("produto atualizado!");
  } catch (error) {
    return res.status(500).json({ message: "erro interno no servidor!" });
  }
}

module.exports = editarProduto;
