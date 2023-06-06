import { useState } from "react";

export default function Cadastro({ setAlternaCadastroLogin }) {
  const [formularioCadastro, setFormularioCadatro] = useState({
    email: "",
    nomeDaEmpresa: "",
    telefone: "",
    senha1: "",
    senha2: "",
  });

  function dadosDoFormularioCadastro(event) {
    setFormularioCadatro({
      ...formularioCadastro,
      [event.target.name]: event.target.value,
    });
  }

  function efetuarCadastro(event) {
    event.preventDefault();

    const { email, nome, telefone, senha1, senha2 } = formularioCadastro;

    const estaVazio =
      !email || !nomeDaEmpresa || !telefone || !senha1 || !senha2;

    if (estaVazio) return;

    if (senha1 !== senha2) return;

    setAlternaCadastroLogin(false);
  }
  return (
    <form
      onSubmit={(event) => efetuarCadastro(event)}
      className=" w-[50%] h-[70%] flex justify-center items-center flex-col gap-5"
    >
      <h2 className="text-3xl text-slate-500 uppercase">Cadastre-se</h2>
      <input
        className="w-[100%] h-10 bg-slate-300 p-2 rounded-md"
        type="text"
        placeholder="Nome da empresa"
        name="nomeDaEmpresa"
        value={formularioCadastro.nomeDaEmpresa}
        onChange={(event) => dadosDoFormularioCadastro(event)}
      />
      <input
        className="w-[100%] h-10 bg-slate-300 p-2 rounded-md"
        type="email"
        placeholder="Email"
        name="email"
        value={formularioCadastro.email}
        onChange={(event) => dadosDoFormularioCadastro(event)}
      />
      <input
        className="w-[100%] h-10 bg-slate-300 p-2 rounded-md"
        type="tel"
        placeholder="Telefone"
        name="telefone"
        value={formularioCadastro.telefone}
        onChange={(event) => dadosDoFormularioCadastro(event)}
      />
      <input
        className="w-[100%] h-10 bg-slate-300 p-2 rounded-md"
        type="password"
        placeholder="Senha"
        name="senha1"
        value={formularioCadastro.senha1}
        onChange={(event) => dadosDoFormularioCadastro(event)}
      />
      <input
        className="w-[100%] h-10 bg-slate-300 p-2 rounded-md"
        type="password"
        placeholder="Confirme sua senha"
        name="senha2"
        value={formularioCadastro.senha2}
        onChange={(event) => dadosDoFormularioCadastro(event)}
      />
      <div className="flex justify-center items-center flex-col w-[100%] gap-1">
        <button
          className="w-[100%] h-10 bg-stone-200 text-slate-700 
        uppercase font-bold rounded-md hover:opacity-70"
        >
          Cadastrar
        </button>
        <p className="text-zinc-500">
          eu ja possuo{" "}
          <span
            onClick={() => setAlternaCadastroLogin(false)}
            className="underline hover:text-zinc-300 cursor-pointer transition-colors"
          >
            cadastro
          </span>
          !
        </p>
      </div>
    </form>
  );
}
