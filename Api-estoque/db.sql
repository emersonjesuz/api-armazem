
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
   	cargo text not null,
   	perfil_imagem text,
   numero_rg text not null,
   	id_empresa serial references empresas(id)
 )