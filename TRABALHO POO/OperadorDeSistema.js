"use strict";
//A classe Cliente é filha de
//Usuário, mas Gerente e OperadorDeSistema são filhas de Funcionário, e as três são
//classes concretas.
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
var Funcionario_1 = require("./Funcionario");
var OperadorDeSistema = /** @class */ (function (_super) {
    __extends(OperadorDeSistema, _super);
    function OperadorDeSistema(nome, email, senha, matricula, salario) {
        return _super.call(this, nome, email, senha, matricula, salario) || this;
    }
    return OperadorDeSistema;
}(Funcionario_1.Funcionario));
exports.OperadorDeSistema = OperadorDeSistema;
