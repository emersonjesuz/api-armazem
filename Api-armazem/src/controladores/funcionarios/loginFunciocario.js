const knex = require("../../database/conexao.db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function loginFuncionario(req, res) {
  const { email, senha } = req.body;
  if (!email || !senha)
    return res.status(400).json({ message: "preencha todos os campos !" });
  try {
    const funcionario = await knex("funcionarios").where({ email: email });
    if (!funcionario.length)
      return res.status(404).json({ message: "funcionario não encontrado" });

    if (!funcionario[0].senha || !funcionario[0].efetivado)
      return res
        .status(401)
        .json({ message: "funcionario não estar autenticado!" });

    const senhaConfere = await bcrypt.compare(senha, funcionario[0].senha);

    if (!senhaConfere)
      res.status(401).json({ message: "email ou senha esta incorreta!" });

    const token = jwt.sign(
      { id: funcionario[0].id, status: "funcionario" },
      process.env.SENHA_JWT_EMPRESA,
      {
        expiresIn: "8h",
      }
    );

    const { senha: _, ...dadosFuncionario } = funcionario[0];

    res.json({ funcionario: dadosFuncionario, token });
  } catch (error) {
    return res.status(500).json({ message: "erro interno no servidor!" });
  }
}

module.exports = loginFuncionario;
