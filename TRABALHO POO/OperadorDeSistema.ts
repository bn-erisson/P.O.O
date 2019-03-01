//A classe Cliente é filha de
//Usuário, mas Gerente e OperadorDeSistema são filhas de Funcionário, e as três são
//classes concretas.

import {Funcionario} from "./Funcionario";

export class OperadorDeSistema extends Funcionario{

    public constructor(nome : string, email : string, senha : string, matricula : string, salario : number){
        super(nome, email, senha, matricula, salario);
    }

}