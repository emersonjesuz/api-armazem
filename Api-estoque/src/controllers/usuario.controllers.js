const {
  cadastrarUsuarioNoBD,
  verificarUsuarioNoBD,
} = require("../database/usuario.database");

async function loginDoUsuario(req, res) {
  const { email, senha } = req.body;
  if (!email || !senha)
    return res.status(400).json({ message: "preencha todos os campos" });

  try {
    const respostaDoBanco = await verificarUsuarioNoBD(email, senha);

    if (!respostaDoBanco)
      return res.status(400).json({ message: "usuario nao encontrado" });
    return res.status(300).json(respostaDoBanco);
  } catch (error) {
    return res.status(400).json({ message: "erro no banco  " });
  }
}

async function cadastrarUsuario(req, res) {
  const { nome, email, telefone, cnpjCpf, senha } = req.body;
  const estaPreenchido = !nome || !email || !telefone || !cnpjCpf || !senha;

  if (estaPreenchido)
    return res.status(400).json({ message: "preencha todos os campos" });

  try {
    await cadastrarUsuarioNoBD(nome, email, telefone, cnpjCpf, senha);
    res.status(200).json({ message: "cadastro realizado" });
  } catch (error) {
    return res.status(400).json({ message: "email, cpf ou cnpj ja existe!" });
  }
}

module.exports = {
  loginDoUsuario,
  cadastrarUsuario,
};
