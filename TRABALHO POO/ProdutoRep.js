"use strict";
exports.__esModule = true;
var ProdutoRep = /** @class */ (function () {
    function ProdutoRep() {
        this.produtos = new Map();
    }
    //eu quero que o repositório comece vazio ou com alguma coisa dentro?
    ProdutoRep.prototype.adicionar = function (produto) {
        this.produtos.set(produto.getCodigo(), produto);
        return true;
    };
    // oq fazer pra não retornar indefined?
    ProdutoRep.prototype.retornar = function (chave) {
        if (this.produtos.has(chave)) {
            return this.produtos.get(chave);
        }
        else {
            return undefined;
        }
    };
    ProdutoRep.prototype.deletar = function (chave) {
        this.produtos["delete"](chave);
        return true;
    };
    ProdutoRep.prototype.getProdutos = function () {
        return this.produtos;
    };
    ProdutoRep.prototype.setProdutos = function (mapa) {
        this.produtos = mapa;
    };
    return ProdutoRep;
}());
exports.ProdutoRep = ProdutoRep;
