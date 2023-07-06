const express = require("express");
const adicionarProdutos = require("../../controladores/produtos/adicionarProdutos");
const exibirProduto = require("../../controladores/produtos/exibirProduto");
const listarProdutos = require("../../controladores/produtos/listarProdutos");

const rotasProdutos = express();

rotasProdutos.get("/empresa/produtos", listarProdutos);
rotasProdutos.get("/empresa/produtos/:id", exibirProduto);
rotasProdutos.post("/empresa/produtos/adicionar", adicionarProdutos);

module.exports = rotasProdutos;
