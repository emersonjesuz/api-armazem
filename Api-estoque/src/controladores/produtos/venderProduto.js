const knex = require("../../database/conexao.db");
const registrandoUmaAcao = require("../../registros/registros");

async function venderProduto(req, res) {
  const { id } = req.params;
  const { unidades } = req.body;
  const { status, ...cliente } = req.cliente;

  if (status !== "funcionario")
    return res.status(401).json({ message: "Não Autorizado!" });

  if (!id) return res.status(400).json({ message: "informe um produto!" });

  if (!unidades)
    return res
      .status(400)
      .json({ message: "informe a quantidade do produto!" });

  try {
    const produto = await knex("produtos").where({ id });

    if (!produto.length)
      return res.status(404).json({ message: "produto não encontrado!" });

    if (produto[0].unidades < unidades)
      return res.status(400).json({ message: "produto insuficiente!" });

    await knex("produtos")
      .where({ id })
      .update({ unidades: produto[0].unidades - unidades });

    const registro = await registrandoUmaAcao(
      cliente.id_empresa,
      cliente.id,
      cliente.nome_funcionario,
      produto[0].id,
      produto[0].nome_produto,
      "vender",
      unidades
    );

    if (!registro)
      return res.status(400).json({ message: " error ao registrar a ação!" });

    res.json("produto vendido!");
  } catch (error) {
    return res.status(500).json({ message: "error interno no servidor!" });
  }
}

module.exports = venderProduto;
