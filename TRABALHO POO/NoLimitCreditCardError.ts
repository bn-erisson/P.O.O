export class NoLimitCreditCardError implements Error{
    public name: string;
    public message: string;

    public constructor(message: string){
        this.name = "NoLimitCreditCardError";
        this.message = message;
    }

    public ToString(): string{
        return( this.name + ": " + this.message)
    }
}