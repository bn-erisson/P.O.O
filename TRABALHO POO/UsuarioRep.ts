import {Usuario} from "./Usuario";
import { OperadorDeSistema } from "./OperadorDeSistema";
import { Cliente } from "./Cliente";
import { Gerente } from "./Gerente";
import { Funcionario } from "./Funcionario";
export class UsuarioRep {

    private usuariosMap : Map<string, Usuario>;
    public operadores: Array<OperadorDeSistema>;
    public clientes: Array<Cliente>;
    public usuarios: Array<Usuario>;

    public constructor(){
        this.usuariosMap = new Map<string, Usuario>();
        this.operadores = Array<OperadorDeSistema>();
        this.clientes = Array<Cliente>();
        this.usuarios = Array<Usuario>();

    }

    public getUsuarios() : Map<string, Usuario>{
       return this.usuariosMap;
    }

    public setUsuarios(usuarios : Map<string, Usuario>) : void{
        this.usuariosMap = usuarios;
    }

    public adicionarUsuario(usuario : Usuario) : boolean{
        this.usuariosMap.set(usuario.getEmail(), usuario);
        return true;
    }

    public retonarEmail(matricula: string) : string | undefined{
        for(let user of this.operadores){
            if(user.getMatricula() == matricula){
                return user.getEmail();
            }
        }
    }

/*     public retornarEmail(matricula: string) : string{
        this.usuariosMap.
    } */
    public removerUsuario(chave : string) : boolean{
        this.usuariosMap.delete(chave);
        return true;
    }
    
    public listarOperadores() : Array<OperadorDeSistema>{
        return this.operadores;
    }

    public listarClientes() : Array<Cliente>{
        return this.clientes;
    }

    public retornaUsuario(chave : string) : Usuario | undefined{
        if (this.usuariosMap.has(chave)){
            return this.usuariosMap.get(chave);
        }
        else{
            return undefined;
        }
    }
}