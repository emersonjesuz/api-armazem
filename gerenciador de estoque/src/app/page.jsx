"use client";

import Cadastro from "@/components/cadastro/page";
import Login from "@/components/login/page";
import { useState } from "react";

export default function Home() {
  const [alternaCadastroLogin, setAlternaCadastroLogin] = useState(false);

  return (
    <main
      className=" flex justify-center items-center flex-wrap w-screen min-h-screen
     bg-gradient-to-r from-slate-600 bg-slate-300  "
    >
      <div className="flex justify-center items-center w-[80vw] h-[90vh] ">
        <div className="flex justify-center items-center flex-col w-[50%] h-[100%]">
          <h1 className="text-5xl uppercase font-bold  text-slate-700 m-2">
            controle de estoque
          </h1>
          <p className="w-[80%] text-2xl text-slate-200 text-opacity-70 ">
            Aqui você tem controle sobre seu estoque facil, pratico e rapido!
          </p>
        </div>
        <div className="flex justify-center items-center w-[50%] h-[100%] ">
          {alternaCadastroLogin ? (
            <Cadastro setAlternaCadastroLogin={setAlternaCadastroLogin} />
          ) : (
            <Login setAlternaCadastroLogin={setAlternaCadastroLogin} />
          )}
        </div>
      </div>
    </main>
  );
}
