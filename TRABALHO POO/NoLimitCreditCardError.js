"use strict";
exports.__esModule = true;
var NoLimitCreditCardError = /** @class */ (function () {
    function NoLimitCreditCardError(message) {
        this.name = "NoLimitCreditCardError";
        this.message = message;
    }
    NoLimitCreditCardError.prototype.ToString = function () {
        return (this.name + ": " + this.message);
    };
    return NoLimitCreditCardError;
}());
exports.NoLimitCreditCardError = NoLimitCreditCardError;
