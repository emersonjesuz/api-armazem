import Link from "next/link";

import { useState } from "react";

export default function Login({ setAlternaCadastroLogin }) {
  const [formularioLogin, setFormulariosLogin] = useState({
    email: "",
    senha: "",
  });

  function dadosDoFormularioLogin(event) {
    event.preventDefault();
    setFormulariosLogin({
      ...formularioLogin,
      [event.target.name]: event.target.value,
    });
  }

  function efetuandoLogin() {
    const { email, senha } = formularioLogin;

    if (!email || !senha) return false;

    return true;
  }

  return (
    <form className=" w-[50%] h-[70%] flex justify-center items-center flex-col gap-5">
      <h2 className="text-3xl text-slate-500 uppercase">login</h2>
      <input
        className="w-[100%] h-10 bg-slate-300 p-2 rounded-md"
        type="email"
        placeholder="Email"
        name="email"
        value={formularioLogin.email}
        onChange={(event) => {
          dadosDoFormularioLogin(event);
        }}
      />
      <input
        className="w-[100%] h-10 bg-slate-300 p-2 rounded-md"
        type="password"
        placeholder="Senha"
        name="senha"
        value={formularioLogin.senha}
        onChange={(event) => {
          dadosDoFormularioLogin(event);
        }}
      />
      <div className="flex justify-center items-center flex-col w-[100%] gap-1">
        <Link
          href={efetuandoLogin ? "gerenciador" : ""}
          className="flex justify-center items-center w-[100%] h-10 bg-stone-200 text-slate-700
          uppercase font-bold rounded-md hover:opacity-70"
        >
          Entrar
        </Link>

        <p className="text-zinc-500">
          aqui você pode{" "}
          <span
            onClick={() => setAlternaCadastroLogin(true)}
            className="underline hover:text-zinc-300 cursor-pointer transition-colors"
          >
            fazer o cadastro
          </span>
          !
        </p>
      </div>
    </form>
  );
}
