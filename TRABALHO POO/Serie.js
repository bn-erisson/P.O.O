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
var Serie = /** @class */ (function (_super) {
    __extends(Serie, _super);
    function Serie(codigo, nome, genero, preco, anoLancamento, faixaEtaria, numeroDeEpisodios, duracaoMediaDeEpisodio) {
        var _this = _super.call(this, codigo, nome, genero, preco, anoLancamento, faixaEtaria) || this;
        _this.numeroDeEpisodios = numeroDeEpisodios;
        _this.duracaoMediaDeEpisodio = duracaoMediaDeEpisodio;
        return _this;
    }
    Serie.prototype.getNumeroDeEpisodios = function () {
        return this.numeroDeEpisodios;
    };
    Serie.prototype.setNumeroDeEpisodios = function (numeroDeEpisodios) {
        this.numeroDeEpisodios = numeroDeEpisodios;
    };
    Serie.prototype.getDuracaoMediaDeEpisodio = function () {
        return this.duracaoMediaDeEpisodio;
    };
    Serie.prototype.setDuracaoMediaDeEpisodio = function (duracaoMediaDeEpisodio) {
        this.duracaoMediaDeEpisodio = duracaoMediaDeEpisodio;
    };
    Serie.prototype.executar = function () {
        console.log("Você está assistindo a série: " + this.getNome());
    };
    return Serie;
}(Video_1.Video));
exports.Serie = Serie;
