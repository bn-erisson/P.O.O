import { Audio } from "./Audio";
//Músicas e Poscasts são filhos de Áudio, e são classes concretas.
// Música tem como atributo album (string) e Poscast tem como atributo tematica (string).
export class Musica extends Audio{
    private album: string;
    
    public constructor(codigo: string, nome: string, genero: string, preco: number, autor: string, duracao: number, album: string){
        super(codigo, nome, genero, preco, autor, duracao);
        this.album = album;
    }

    public getAlbum() : string{
        return this.album;
    }

    public setAlbum(album: string) : void{
        this.album = album;
    }

    public executar() : void{
        console.log("Você está escutando a música " + this.getNome() + " que pertence ao album " + this.getAlbum());
    }
}