//A classe Cliente é filha de
//Usuário, mas Gerente e OperadorDeSistema são filhas de Funcionário, e as três são
//classes concretas.
//import {Usuario} from "./Usuario";
import {Funcionario} from "./Funcionario";
import { OperadorDeSistema} from "./OperadorDeSistema";
import { Usuario } from "./Usuario";
import { UsuarioRep } from "./UsuarioRep";

export class Gerente extends Funcionario{

    public constructor(nome : string, email : string, senha : string, matricula : string, salario : number){
        super(nome,email,senha,matricula,salario);

    }
    
}