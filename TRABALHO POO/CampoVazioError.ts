export class CampoVazioError implements Error{
    public name: string;
    public message: string;

    public constructor(message: string){
        this.name = "CampoVazioError";
        this.message = message;
    }
}