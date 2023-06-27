const knex = require("../../database/conexao.db");
const bcrypt = require("bcrypt");

async function loginFuncionario(req, res) {
  const { email, senha } = req.body;
  if (!email || !senha)
    return res.status(400).json({ message: "preencha todos os campos !" });
  try {
    const funcionario = await knex("funcionarios").where({ email: email });
    if (!funcionario.length)
      return res.status(404).json({ message: "funcionario não encontrado" });

    if (!funcionario[0].senha)
      return res
        .status(401)
        .json({ message: "funcionario não estar autenticado!" });

    const senhaConfere = await bcrypt.compare(senha, funcionario[0].senha);

    if (!senhaConfere)
      res.status(401).json({ message: "email ou senha esta incorreta!" });

    const { senha: _, ...dadosFuncionario } = funcionario[0];
    req.funcionario = dadosFuncionario;
    res.json(dadosFuncionario);
  } catch (error) {
    return res.status(500).json({ message: "erro interno no servidor!" });
  }
}

module.exports = loginFuncionario;
