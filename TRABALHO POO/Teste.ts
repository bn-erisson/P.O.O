import { Data } from "./Data";

declare function require(name: string): any;
var readline = require('readline-sync'); 

let dia, mes, ano: any = readline.question("").split("/");
let data: Data = new Data(Number(dia), Number(mes), Number(ano));
console.log(data);