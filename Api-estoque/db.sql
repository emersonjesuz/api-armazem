
 create table empresas (
    id serial primary key,
    nome_empresa text not null, 
    email text unique not null,
    telefone text not null, 
    senha text not null
  )

  create table produtos (
   	id serial primary key,
   	nome_produto text not null,
   	descricao text,
  	unidades serial not null, 
   	imagem text,
   	id_empresa serial references empresas(id)
 )

  create table funcionarios (
   	id serial primary key,
   	nome_funcionario text not null,
   	efetivado BOOLEAN DEFAULT FALSE,
   	perfil_imagem text,
   	numero_rg text not null,
   	id_empresa serial references empresas(id)
   	email text unique  not null,
   	telefone text  not null
 )

 create table registros (
  id serial primary key,
  id_empresa serial references empresas(id) not null,
  id_funcionario serial references funcionarios(id) not null,
  nome_funcionario text not null,
  id_produto serial references produtos(id) not null,
  nome_produto text not null,
  tipo text not null,
  unidades text  not null
)