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
//Um Pacote é-um Produto e é uma classe concreta. Tem como atributos produtos (Array<Produto>), 
//uma validade (Data, faça uma classe Data com dia, mes e ano, todos do tipo number) 
//e um precoMensal (number). Como ele é um Produto, também terá o atributo preco de Produto
// (sem precisar sem escrito explicitamente). Assim, o preco do Pacote é a soma dos preços de cada
// produto em produtos. O precoMensal de um Pacote é 15% do preco do Pacote.
var Produto_1 = require("./Produto");
// o preço mensal eu coloco = 0 no constructor?
// o preco mensal do pacote é só os 15% ou é o preco do Pacote com 15% de desconto
var Pacote = /** @class */ (function (_super) {
    __extends(Pacote, _super);
    function Pacote(codigo, nome, genero, preco, produtos, validade, precoMensal) {
        if (preco === void 0) { preco = 0; }
        if (precoMensal === void 0) { precoMensal = 0; }
        var _this = _super.call(this, codigo, nome, genero, preco) || this;
        _this.produtos = produtos;
        _this.validade = validade;
        for (var _i = 0, _a = _this.produtos; _i < _a.length; _i++) {
            var p = _a[_i];
            var precoP = p.getPreco();
            _this.preco = _this.preco + precoP;
        }
        _this.precoMensal = _this.preco * 0.85;
        return _this;
    }
    Pacote.prototype.getProdutos = function () {
        return this.produtos;
    };
    Pacote.prototype.setProdutos = function (produtos) {
        this.produtos = produtos;
    };
    Pacote.prototype.getValidade = function () {
        return this.validade;
    };
    Pacote.prototype.setValidade = function (validade) {
        this.validade = validade;
    };
    Pacote.prototype.getPrecoMensal = function () {
        return this.precoMensal;
    };
    Pacote.prototype.setPrecoMensal = function (precoMensal) {
        this.precoMensal = precoMensal;
    };
    Pacote.prototype.executar = function () {
        console.log("Você está comprando o pacote " + this.getNome + " por " + this.precoMensal + " reais.");
    };
    return Pacote;
}(Produto_1.Produto));
exports.Pacote = Pacote;
