const express = require("express");
const adicionarProdutos = require("../../controladores/produtos/adicionarProdutos");
const editarProduto = require("../../controladores/produtos/editarProduto");
const exibirProduto = require("../../controladores/produtos/exibirProduto");
const listarProdutos = require("../../controladores/produtos/listarProdutos");

const rotasProdutos = express();

rotasProdutos.get("/empresa/produtos", listarProdutos);
rotasProdutos.get("/empresa/produtos/:id", exibirProduto);
rotasProdutos.post("/empresa/produtos/adicionar", adicionarProdutos);
rotasProdutos.patch("/empresa/produtos/editar/:id", editarProduto);

module.exports = rotasProdutos;
