export default function Home() {
  const bd = [
    {
      id: 1,
      nome: "sofa martins",
      categoria: "sala",
      tipo: "sofa",
      descricao: "sofa preto com capacidade para 5 pessoas",
      unidade: 5,
    },
    {
      id: 2,
      nome: "sofa martins",
      categoria: "sala",
      tipo: "sofa",
      descricao: "sofa preto com capacidade para 5 pessoas",
      unidade: 5,
    },
    {
      id: 3,
      nome: "sofa martins",
      categoria: "sala",
      tipo: "sofa",
      descricao: "sofa preto com capacidade para 5 pessoas",
      unidade: 5,
    },
    {
      id: 4,
      nome: "sofa martins",
      categoria: "sala",
      tipo: "sofa",
      descricao: "sofa preto com capacidade para 5 pessoas",
      unidade: 5,
    },
    {
      id: 5,
      nome: "sofa martins",
      categoria: "sala",
      tipo: "sofa",
      descricao: "sofa preto com capacidade para 5 pessoas",
      unidade: 5,
    },
    {
      id: 6,
      nome: "sofa martins",
      categoria: "sala",
      tipo: "sofa",
      descricao: "sofa preto com capacidade para 5 pessoas",
      unidade: 5,
    },
    {
      id: 7,
      nome: "sofa martins",
      categoria: "sala",
      tipo: "sofa",
      descricao: "sofa preto com capacidade para 5 pessoas",
      unidade: 5,
    },
    {
      id: 8,
      nome: "sofa martins",
      categoria: "sala",
      tipo: "sofa",
      descricao: "sofa preto com capacidade para 5 pessoas",
      unidade: 5,
    },
    {
      id: 9,
      nome: "sofa martins",
      categoria: "sala",
      tipo: "sofa",
      descricao: "sofa preto com capacidade para 5 pessoas",
      unidade: 5,
    },
    {
      id: 10,
      nome: "sofa martins",
      categoria: "sala",
      tipo: "sofa",
      descricao: "sofa preto com capacidade para 5 pessoas",
      unidade: 5,
    },
    {
      id: 11,
      nome: "sofa martins",
      categoria: "sala",
      tipo: "sofa",
      descricao: "sofa preto com capacidade para 5 pessoas",
      unidade: 5,
    },
    {
      id: 12,
      nome: "sofa martins",
      categoria: "sala",
      tipo: "sofa",
      descricao: "sofa preto com capacidade para 5 pessoas",
      unidade: 5,
    },
    {
      id: 3,
      nome: "sofa martins",
      categoria: "sala",
      tipo: "sofa",
      descricao: "sofa preto com capacidade para 5 pessoas",
      unidade: 5,
    },
    {
      id: 4,
      nome: "sofa martins",
      categoria: "sala",
      tipo: "sofa",
      descricao: "sofa preto com capacidade para 5 pessoas",
      unidade: 5,
    },
    {
      id: 15,
      nome: "sofa martins",
      categoria: "sala",
      tipo: "sofa",
      descricao: "sofa preto com capacidade para 5 pessoas",
      unidade: 5,
    },
    {
      id: 16,
      nome: "sofa martins",
      categoria: "sala",
      tipo: "sofa",
      descricao: "sofa preto com capacidade para 5 pessoas",
      unidade: 5,
    },
    {
      id: 17,
      nome: "sofa martins",
      categoria: "sala",
      tipo: "sofa",
      descricao: "sofa preto com capacidade para 5 pessoas",
      unidade: 5,
    },
    {
      id: 18,
      nome: "sofa martins",
      categoria: "sala",
      tipo: "sofa",
      descricao: "sofa preto com capacidade para 5 pessoas",
      unidade: 5,
    },
    {
      id: 19,
      nome: "sofa martins",
      categoria: "sala",
      tipo: "sofa",
      descricao: "sofa preto com capacidade para 5 pessoas",
      unidade: 5,
    },
    {
      id: 20,
      nome: "sofa martins",
      categoria: "sala",
      tipo: "sofa",
      descricao: "sofa preto com capacidade para 5 pessoas",
      unidade: 5,
    },
  ];
  return (
    <div className="flex flex-col w-screen ">
      <header className="w-screen  h-[100px] mb-12 bg-slate-700 border-r border-slate-50"></header>

      <main className="flex  items-center justify-center px-[20px] pr-9  mb-11 w-full   ">
        <div className="flex flex-col  gap-10 border-solid border-r-2 border-r-slate-300 mr-[50px] w-[20vw] h-[100vh] pt-3 ">
          <div className="flex gap-1">
            <input
              className="bg-slate-300 pl-3 p-[5px] rounded-md w-52"
              type="text"
              placeholder="pesquisar por nome "
            />
          </div>

          <div className=" flex justify-start  flex-col gap-5 w-[25vw] ">
            <div className=" flex justify-center items-center w-52 h-10  bg-slate-600 text-gray-100  tracking-wide rounded-md hover:bg-slate-400 transition-colors cursor-pointer">
              Repor estoque
            </div>

            <div className=" flex justify-center items-center w-52 h-10  bg-slate-600 text-gray-100  tracking-wide rounded-md hover:bg-slate-400 transition-colors cursor-pointer">
              filtrar por
            </div>

            <div className=" flex justify-center items-center w-52 h-10  bg-slate-600 text-gray-100  tracking-wide rounded-md hover:bg-slate-400 transition-colors cursor-pointer">
              retirar do estoque
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mb-11 w-[90vw] pr-6 ">
          <div className="w-[50vw] h-[200px] mb-[50px] border-4 border-solid border-slate-600 rounded bg-slate-400 ">
            <span>categoria</span>
            <span>tipo</span>
            <span>unidade</span>
            <span>ordenar</span>
            <span>data</span>
          </div>
          <div className="w-[50vw] h-[60vh]  ">
            <div className="grid grid-cols-6 p-1 place-items-center  bg-slate-600 rounded-t">
              <span className="text-slate-50 font-sans font-bold">Id</span>
              <span className="text-slate-50 font-sans font-bold">Nome</span>
              <span className="text-slate-50 font-sans font-bold">
                Categoria
              </span>
              <span className="text-slate-50 font-sans font-bold">Tipo</span>
              <span className="text-slate-50 font-sans font-bold">
                Descrição
              </span>
              <span className="text-slate-50 font-sans font-bold">Unidade</span>
            </div>

            <div className="grid  mb-10 bg-slate-500  ">
              {bd.map(
                (item, index) =>
                  index < 10 && (
                    <div
                      key={item.id}
                      className="grid grid-cols-6 place-items-center p-1 my-1 border-solid border-b-2 border-b-slate-800"
                    >
                      <span className="text-slate-50 font-sans font-bold">
                        {item.id}
                      </span>
                      <span className="text-slate-50 font-sans font-bold">
                        {item.nome}
                      </span>
                      <span className="text-slate-50 font-sans font-bold">
                        {item.categoria}
                      </span>
                      <span className="text-slate-50 font-sans font-bold">
                        {item.tipo}
                      </span>
                      <span className="text-slate-50 font-sans ">
                        {item.descricao.substring(0, 16)}...
                      </span>
                      <span className="text-slate-50 font-sans ">
                        {item.unidade}
                      </span>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
