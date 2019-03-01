export class ProdutoInexistenteError implements Error{
    public name: string;
    public message: string;

    public constructor(message: string){
        this.name = "ProdutoInexistenteError";
        this.message = message;
    }
}