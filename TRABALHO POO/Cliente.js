"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Usuario_1 = require("./Usuario");
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente(nome, email, senha, endereco, dataDeNascimento, listaDeProdutos, cartaoDeCredito) {
        if (listaDeProdutos === void 0) { listaDeProdutos = []; }
        var _this = _super.call(this, nome, email, senha) || this;
        _this.endereco = endereco;
        _this.dataDeNascimento = dataDeNascimento;
        _this.listaDeProdutos = listaDeProdutos;
        _this.cartaoDeCredito = cartaoDeCredito;
        return _this;
    }
    Cliente.prototype.getEndereco = function () {
        return this.endereco;
    };
    Cliente.prototype.setEndereco = function (endereco) {
        this.endereco = endereco;
    };
    Cliente.prototype.getDataDeNascimeto = function () {
        return this.dataDeNascimento;
    };
    Cliente.prototype.setDataDeNascimento = function (dataDeNascimento) {
        this.dataDeNascimento = dataDeNascimento;
    };
    Cliente.prototype.getListaDeProdutos = function () {
        return this.listaDeProdutos;
    };
    Cliente.prototype.setListaDeProdutos = function (listaDeProdutos) {
        this.listaDeProdutos = listaDeProdutos;
    };
    Cliente.prototype.getCartaoDeCredito = function () {
        return this.cartaoDeCredito;
    };
    Cliente.prototype.setCartaoDeCredito = function (cartaoDeCredito) {
        this.cartaoDeCredito = cartaoDeCredito;
    };
    Cliente.prototype.comprarProduto = function (produto) {
        this.listaDeProdutos.push(produto);
        return true;
    };
    Cliente.prototype.executarMidia = function (midia) {
        midia.executar();
    };
    return Cliente;
}(Usuario_1.Usuario));
exports.Cliente = Cliente;
