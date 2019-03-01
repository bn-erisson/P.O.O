//Um Pacote é-um Produto e é uma classe concreta. Tem como atributos produtos (Array<Produto>), 
//uma validade (Data, faça uma classe Data com dia, mes e ano, todos do tipo number) 
//e um precoMensal (number). Como ele é um Produto, também terá o atributo preco de Produto
// (sem precisar sem escrito explicitamente). Assim, o preco do Pacote é a soma dos preços de cada
// produto em produtos. O precoMensal de um Pacote é 15% do preco do Pacote.
import { Produto } from "./Produto";
import { Data } from "./Data";

// o preço mensal eu coloco = 0 no constructor?
// o preco mensal do pacote é só os 15% ou é o preco do Pacote com 15% de desconto
export class Pacote extends Produto{

    private produtos: Array<Produto>;
    private validade: Data | null;
    private precoMensal: number;

    public constructor(codigo: string, nome: string, genero: string, preco: number = 0, produtos: Array<Produto>, validade: Data | null, precoMensal: number = 0){
      super(codigo, nome, genero, preco);
      this.produtos = produtos;
      this.validade = validade;
      for(let p of this.produtos){
        let precoP: number = p.getPreco(); 
        this.preco = this.preco + precoP;
      }
      this.precoMensal = this.preco * 0.85;
    }

    public getProdutos() : Array<Produto>{
        return this.produtos;
    }

    public setProdutos(produtos: Array<Produto>) : void{
        this.produtos = produtos;
    }

    public getValidade() : Data | null{
        return this.validade;
    }

    public setValidade(validade: Data | null) : void{
        this.validade = validade;
    }

    public getPrecoMensal() : number{
        return this.precoMensal;
    }

    public setPrecoMensal(precoMensal: number) : void{
        this.precoMensal = precoMensal;
    } 

    public executar() : void{
        console.log("Você está comprando o pacote " + this.getNome + " por " + this.precoMensal + " reais.");
    }



}