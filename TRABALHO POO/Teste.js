"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Data_1 = require("./Data");
var readline = require('readline-sync');
let dia, mes, ano = readline.question("").split("/");
let data = new Data_1.Data(Number(dia), Number(mes), Number(ano));
console.log(data);
