const cliente = require("./database");

async function cadastrarUsuarioNoBD(nome, email, telefone, cnpjCpf, senha) {
  try {
    await cliente.connect();
    await cliente.query(
      'insert into usuarios ("nome", "telefone", "email", "cnpj_cpf", "senha") values (' +
        "'" +
        nome +
        "', '" +
        telefone +
        "', '" +
        email +
        "','" +
        cnpjCpf +
        "','" +
        senha +
        "');"
    );
  } catch (error) {
    return error;
  } finally {
    cliente.end();
  }
}

async function verificarUsuarioNoBD(email, senha) {
  try {
    cliente.connect();
    const resposta = await cliente.query(
      `select * from usuarios where email = '${email}'  and senha =
        '${senha}'`
    );
    if (!resposta.rows.length) return false;
    return resposta.rows;
  } catch (error) {
    return false;
  } finally {
    cliente.end();
  }
}

module.exports = {
  cadastrarUsuarioNoBD,
  verificarUsuarioNoBD,
};
