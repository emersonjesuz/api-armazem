const knex = require("../../database/conexao.db");

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

    await knex("registros").insert({
      id_empresa: cliente.id_empresa,
      id_funcionario: cliente.id,
      nome_funcionario: cliente.nome_funcionario,
      id_produto: produto[0].id,
      nome_produto: produto[0].nome_produto,
      tipo: "adicionar",
      unidades: produto[0].unidades,
    });

    res.json("produto adicionado!");
  } catch (error) {
    return res.status(500).json({ message: "erro interno no servidor!" });
  }
}

module.exports = adicionarProdutos;
