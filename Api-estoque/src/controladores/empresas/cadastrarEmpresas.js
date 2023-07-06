const knex = require("../../database/conexao.db");
const bcrypt = require("bcrypt");

async function cadastrarEmpresa(req, res) {
  const { nome_empresa, email, telefone, senha } = req.body;

  if (!nome_empresa || !email || !telefone || !senha)
    return res.status(400).json({ message: "preencha todos os campos" });

  try {
    const senhaCriptografada = await bcrypt.hash(senha, 10);

    await knex("empresas").insert({
      nome_empresa,
      email,
      telefone,
      senha: senhaCriptografada,
    });

    res.json(" nova empresa criada");
  } catch (error) {
    if (error.constraint === "usuarios_email_key")
      return res.status(400).json({ message: "empresa ja existe !" });
    return res.status(500).json({ message: "error interno no servidor!" });
  }
}

module.exports = cadastrarEmpresa;
