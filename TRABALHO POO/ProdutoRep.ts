import { Produto } from "./Produto";

export class ProdutoRep{
    private produtos: Map<string, Produto>;

    public constructor(){
        this.produtos = new Map<string, Produto>();
    }

    //eu quero que o repositório comece vazio ou com alguma coisa dentro?

    public adicionar(produto: Produto): boolean{
        this.produtos.set(produto.getCodigo(), produto);
        return true;
    }
    
    // oq fazer pra não retornar indefined?
    public retornar(chave: string) : Produto | undefined{
        if(this.produtos.has(chave)){
            return this.produtos.get(chave);
        } else{
            return undefined;
        }
    }

    public deletar(chave: string) : boolean{
        this.produtos.delete(chave);
        return true;
    }

    public getProdutos() : Map<string, Produto>{
        return this.produtos;
    }

    public setProdutos(mapa: Map<string, Produto>): void{
        this.produtos = mapa;
    }
}