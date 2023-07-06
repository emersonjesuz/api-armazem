const knex = require("../../database/conexao.db");
const registrandoUmaAcao = require("../../registros/registros");

async function adicionarProdutos(req, res) {
  const { nomeProduto, descricao, unidades, imagem } = req.body;
  const { status, ...cliente } = req.cliente;

  if (status !== "funcionario")
    return res.status(401).json({ message: "Não Autorizado!" });

  if (!nomeProduto || !unidades)
    return res.status(400).json({ message: "preencha todos os campos!" });

  try {
    const produto = await knex("produtos")
      .insert({
        nome_produto: nomeProduto,
        descricao,
        imagem,
        unidades,
        id_empresa: cliente.id_empresa,
      })
      .returning(["id", "unidades", "nome_produto"]);

    if (!produto)
      return res.status(500).json({ message: "erro interno no servidor!" });

    const registro = await registrandoUmaAcao(
      cliente.id_empresa,
      cliente.id,
      cliente.nome_funcionario,
      produto[0].id,
      produto[0].nome_produto,
      "adicionar",
      produto[0].unidades
    );

    if (!registro)
      return res.status(500).json({ message: "erro  interno no servidor!" });

    res.json("produto adicionado!");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "erro  interno no servidor!" });
  }
}

module.exports = adicionarProdutos;
