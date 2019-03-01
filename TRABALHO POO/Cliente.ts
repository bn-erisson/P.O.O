import {Usuario} from "./Usuario";
import {Data} from "./Data";
import {Produto} from "./Produto";
import {CartaoDeCredito} from "./CartaoDeCredito";

export class Cliente extends Usuario {
    private endereco : string;
    private dataDeNascimento : Data;
    private listaDeProdutos : Array<Produto>;
    private cartaoDeCredito : CartaoDeCredito;

    public constructor(nome : string, email : string, senha : string, endereco : string, dataDeNascimento : Data, listaDeProdutos : Array<Produto> = [], cartaoDeCredito : CartaoDeCredito) {
        super(nome,email,senha);
        this.endereco = endereco;
        this.dataDeNascimento = dataDeNascimento;
        this.listaDeProdutos = listaDeProdutos;
        this.cartaoDeCredito = cartaoDeCredito;
    }

    public getEndereco() : string{
        return this.endereco;
    }

    public setEndereco(endereco : string) : void{
        this.endereco = endereco;
    }

    public getDataDeNascimeto() : Data{
        return this.dataDeNascimento;
    }

    public setDataDeNascimento(dataDeNascimento : Data) : void{
        this.dataDeNascimento = dataDeNascimento;
    }

    public getListaDeProdutos() : Array<Produto>{
        return this.listaDeProdutos;
    }

    public setListaDeProdutos(listaDeProdutos : Array<Produto>) : void{
        this.listaDeProdutos = listaDeProdutos;
    }

    public getCartaoDeCredito() : CartaoDeCredito{
        return this.cartaoDeCredito;
    }

    public setCartaoDeCredito(cartaoDeCredito : CartaoDeCredito) : void{
        this.cartaoDeCredito = cartaoDeCredito;
    }

    public comprarProduto(produto : Produto) : boolean{
        this.listaDeProdutos.push(produto);
        return true;
    }

    public executarMidia(midia : Produto) : void{
        midia.executar();
    }

}


