import { Video } from "./Video";
import { Produto } from "./Produto";

export class Serie extends Video{
    private numeroDeEpisodios: number;
    private duracaoMediaDeEpisodio: number;

    public constructor(codigo: string, nome: string, genero: string, preco: number, anoLancamento: number, faixaEtaria: number, numeroDeEpisodios: number, duracaoMediaDeEpisodio: number){
        super(codigo, nome, genero, preco, anoLancamento, faixaEtaria);
        this.numeroDeEpisodios = numeroDeEpisodios;
        this.duracaoMediaDeEpisodio = duracaoMediaDeEpisodio;
    }

    public getNumeroDeEpisodios() : number{
        return this.numeroDeEpisodios;
    }

    public setNumeroDeEpisodios(numeroDeEpisodios: number) : void{
        this.numeroDeEpisodios = numeroDeEpisodios;
    }

    public getDuracaoMediaDeEpisodio() : number{
        return this.duracaoMediaDeEpisodio;
    }

    public setDuracaoMediaDeEpisodio(duracaoMediaDeEpisodio: number) : void{
        this.duracaoMediaDeEpisodio = duracaoMediaDeEpisodio;
    }

    public executar() : void{
        console.log("Você está assistindo a série: " + this.getNome());
    }
}

