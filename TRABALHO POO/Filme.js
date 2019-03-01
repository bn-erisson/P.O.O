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
var Video_1 = require("./Video");
var Filme = /** @class */ (function (_super) {
    __extends(Filme, _super);
    function Filme(codigo, nome, genero, preco, anoLancamento, faixaEtaria, duracao) {
        var _this = _super.call(this, codigo, nome, genero, preco, anoLancamento, faixaEtaria) || this;
        _this.duracao = duracao;
        return _this;
    }
    Filme.prototype.getDuracao = function () {
        return this.duracao;
    };
    Filme.prototype.setDuracao = function (duracao) {
        this.duracao = duracao;
    };
    Filme.prototype.executar = function () {
        console.log("Reproduzindo o filme: " + this.getNome());
    };
    return Filme;
}(Video_1.Video));
exports.Filme = Filme;
