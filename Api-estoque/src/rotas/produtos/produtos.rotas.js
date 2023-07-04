const express = require("express");
const exibirProduto = require("../../controladores/produtos/exibirProduto");
const listarProdutos = require("../../controladores/produtos/listarProdutos");

const rotasProdutos = express();

rotasProdutos.get("/empresa/produtos", listarProdutos);
rotasProdutos.get("/empresa/produtos/:id", exibirProduto);

module.exports = rotasProdutos;
