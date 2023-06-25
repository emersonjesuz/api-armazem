const knex = require("../../database/conexao.db");

async function cadastrarFuncionarios(req, res) {
  const {
    nomeFuncionario,
    email,
    telefone,
    senioridade,
    imagemPerfil,
    numeroRg,
  } = req.body;
  const { id: empresaId } = req.empresa;

  if (!nomeFuncionario || !email || !telefone || !senioridade || !numeroRg)
    return res.status(400).json({ message: "preencha todos os campos!" });

  try {
    const analisandoSenioridade = await verificarSenioridade(senioridade);
    if (!analisandoSenioridade)
      return res
        .status(400)
        .json({ message: "preencha a senioridade corretamente" });

    const dadosFuncionario = {
      nome_funcionario: nomeFuncionario,
      senioridade,
      perfil_imagem: imagemPerfil,
      numero_rg: numeroRg,
      id_empresa: empresaId,
      email,
      telefone,
    };
    const cadastrar = await knex("funcionarios").insert(dadosFuncionario);
    if (!cadastrar) return res.status(401).json({ message: "kkk" });
    res.json({ message: "novo funcionario adicionado!" });
  } catch (error) {
    if (error.constraint === "funcionarios_email_key")
      return res.status(400).json({ message: "funcionario ja existe!" });
    return res.status(500).json({ message: "erro interno no servidor!" });
  }
}

async function verificarSenioridade(senioridade) {
  try {
    const validacaoSenioridade =
      senioridade === "junior" ||
      senioridade === "pleno" ||
      senioridade === "senior";

    if (!validacaoSenioridade) return false;

    if (senioridade === "senior") {
      const verifcandoSeExisteSenior = await knex("funcionarios").where({
        senioridade: senioridade,
      });

      if (!verifcandoSeExisteSenior.length) {
        return true;
      }
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
}

module.exports = cadastrarFuncionarios;