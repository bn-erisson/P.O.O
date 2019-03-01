"use strict";
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
exports.__esModule = true;
var Aff = /** @class */ (function () {
    function Aff(name) {
        this.name = name;
    }
    return Aff;
}());
exports.Aff = Aff;
var a = new Aff('oi');
var b = new Aff('oie');
var mapp = new Map();
mapp.set('1', {
    a: a
});
mapp.set('2', {
    b: b
});
function c() {
    return mapp;
}
console.log(a instanceof Aff, mapp.get('1'));
function d() {
    var e_1, _a;
    try {
        for (var mapp_1 = __values(mapp), mapp_1_1 = mapp_1.next(); !mapp_1_1.done; mapp_1_1 = mapp_1.next()) {
            var _b = __read(mapp_1_1.value, 2), key = _b[0], value = _b[1];
            console.log(c().get(key) instanceof Aff);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (mapp_1_1 && !mapp_1_1.done && (_a = mapp_1["return"])) _a.call(mapp_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
var user = d();
//console.log(user instanceof Aff);
