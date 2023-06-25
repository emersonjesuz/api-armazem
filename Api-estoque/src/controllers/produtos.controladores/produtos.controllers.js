const { exibirEstoqueNoBD } = require("../../database/estoque.database");

async function exibirEstoque(req, res) {
  const { usuario_id } = req.params;

  if (!usuario_id)
    return res.status(400).json({ messege: "é nescesario o id do usuario" });
  try {
    const resultadoDoBanco = await exibirEstoqueNoBD(usuario_id);
    if (!resultadoDoBanco)
      return res.status(400).json({ messege: "usuario não existe" });
    return res.status(200).json(resultadoDoBanco);
  } catch (error) {
    return res.status(404).json({ messege: "usuario não existe" });
  }
}

module.exports = {
  exibirEstoque,
};
