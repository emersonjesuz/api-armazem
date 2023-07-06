const knex = require("../../database/conexao.db");

async function historicoProdutos(req, res) {
  const { pagina } = req.query;
  const { status } = req.cliente;

  if (status !== "empresa")
    return res.status(401).json({ message: "Não Autorizado!" });

  if (!pagina) return res.status(400).json({ message: "informe a pagina!" });

  try {
    const registros = await knex("registros").limit(10).offset(pagina);

    res.json(registros);
  } catch (error) {
    res.status(500).json({ message: "erro interno no servidor!" });
  }
}

module.exports = historicoProdutos;
