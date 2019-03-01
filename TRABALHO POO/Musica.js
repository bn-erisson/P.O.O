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
var Audio_1 = require("./Audio");
//Músicas e Poscasts são filhos de Áudio, e são classes concretas.
// Música tem como atributo album (string) e Poscast tem como atributo tematica (string).
var Musica = /** @class */ (function (_super) {
    __extends(Musica, _super);
    function Musica(codigo, nome, genero, preco, autor, duracao, album) {
        var _this = _super.call(this, codigo, nome, genero, preco, autor, duracao) || this;
        _this.album = album;
        return _this;
    }
    Musica.prototype.getAlbum = function () {
        return this.album;
    };
    Musica.prototype.setAlbum = function (album) {
        this.album = album;
    };
    Musica.prototype.executar = function () {
        console.log("Você está escutando a música " + this.getNome() + " que pertence ao album " + this.getAlbum());
    };
    return Musica;
}(Audio_1.Audio));
exports.Musica = Musica;
