export class Message {

    constructor(
        private message: string,
        private number: number
    ) { }

    getMessage(): string {
        return this.message;
    }

    getNumber(): number {
        return this.number;
    }

}
