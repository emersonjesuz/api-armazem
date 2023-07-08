const express = require("express");
const adicionarProdutos = require("../../controladores/produtos/adicionarProdutos");
const deletarProduto = require("../../controladores/produtos/deletarProduto");
const editarProduto = require("../../controladores/produtos/editarProduto");
const exibirProduto = require("../../controladores/produtos/exibirProduto");
const listarProdutos = require("../../controladores/produtos/listarProdutos");
const venderProduto = require("../../controladores/produtos/venderProduto");

const rotasProdutos = express();

rotasProdutos.get("/empresa/produtos", listarProdutos);
rotasProdutos.get("/empresa/produtos/:id", exibirProduto);
rotasProdutos.post("/empresa/produtos/vender/:id", venderProduto);
rotasProdutos.post("/empresa/produtos/adicionar", adicionarProdutos);
rotasProdutos.patch("/empresa/produtos/editar/:id", editarProduto);
rotasProdutos.delete("/empresa/produtos/deletar/:id", deletarProduto);

module.exports = rotasProdutos;
