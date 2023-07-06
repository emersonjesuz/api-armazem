const knex = require("../../database/conexao.db");

async function cadastrarFuncionarios(req, res) {
  const { nomeFuncionario, email, telefone, imagemPerfil, numeroRg } = req.body;
  const { id: empresaId, status } = req.cliente;

  if (status !== "empresa")
    return res.status(401).json({ message: "Não Autorizado!" });

  if (!nomeFuncionario || !email || !telefone || !numeroRg)
    return res.status(400).json({ message: "preencha  todos os campos!" });

  try {
    const dadosFuncionario = {
      nome_funcionario: nomeFuncionario,
      perfil_imagem: imagemPerfil,
      numero_rg: numeroRg,
      id_empresa: empresaId,
      email,
      telefone,
    };
    const cadastrar = await knex("funcionarios").insert(dadosFuncionario);
    if (!cadastrar)
      return res.status(401).json({ message: "funcionario não cadastrado!" });
    res.json("novo funcionario adicionado!");
  } catch (error) {
    if (error.constraint === "funcionarios_email_key")
      return res.status(400).json({ message: "funcionario ja existe!" });
    return res.status(500).json({ message: "Erro interno no servidor!" });
  }
}

module.exports = cadastrarFuncionarios;
