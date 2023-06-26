const knex = require("../../database/conexao.db");
const bcrypt = require("bcrypt");

async function cadastrarSenhaDoFuncionario(req, res) {
  const { nomeFuncionario, email, numeroRg, senha } = req.body;

  if (!nomeFuncionario || !email || !numeroRg || !senha)
    return res.status(400).json({ message: "preencha todos os campos!" });

  try {
    const funcionario = await knex("funcionarios").where({
      email: email,
      nome_funcionario: nomeFuncionario,
      numero_rg: numeroRg,
    });

    if (!funcionario.length)
      return res.status(401).json({ message: "Funcionario não encontrado!" });

    if (funcionario[0].senha)
      return res.json({
        message: "funcionario ja posui as autenticações validas!",
      });

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    await knex("funcionarios")
      .update({ senha: senhaCriptografada })
      .where({ id: funcionario[0].id });

    res.json({ message: "Funcionario autenticado" });
  } catch (error) {
    res.status(500).json({ message: "Erro interno do servidor!" });
  }
}

module.exports = cadastrarSenhaDoFuncionario;
