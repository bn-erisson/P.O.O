"use strict";
exports.__esModule = true;
var UsuarioRep = /** @class */ (function () {
    function UsuarioRep() {
        this.usuariosMap = new Map();
        this.operadores = Array();
        this.clientes = Array();
        this.usuarios = Array();
    }
    UsuarioRep.prototype.getUsuarios = function () {
        return this.usuariosMap;
    };
    UsuarioRep.prototype.setUsuarios = function (usuarios) {
        this.usuariosMap = usuarios;
    };
    UsuarioRep.prototype.adicionarUsuario = function (usuario) {
        this.usuariosMap.set(usuario.getEmail(), usuario);
        return true;
    };
    UsuarioRep.prototype.retonarEmail = function (matricula) {
        for (var _i = 0, _a = this.operadores; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.getMatricula() == matricula) {
                return user.getEmail();
            }
        }
    };
    /*     public retornarEmail(matricula: string) : string{
            this.usuariosMap.
        } */
    UsuarioRep.prototype.removerUsuario = function (chave) {
        this.usuariosMap["delete"](chave);
        return true;
    };
    UsuarioRep.prototype.listarOperadores = function () {
        return this.operadores;
    };
    UsuarioRep.prototype.listarClientes = function () {
        return this.clientes;
    };
    UsuarioRep.prototype.retornaUsuario = function (chave) {
        if (this.usuariosMap.has(chave)) {
            return this.usuariosMap.get(chave);
        }
        else {
            return undefined;
        }
    };
    return UsuarioRep;
}());
exports.UsuarioRep = UsuarioRep;
