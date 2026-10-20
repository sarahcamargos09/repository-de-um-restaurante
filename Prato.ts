export class Prato {
    nome: string;
    dataValidade: Date;
    nacionalidade: string;

    constructor(
        nome: string,
        dataValidade: Date,
        nacionalidade: string
    ) {
        this.nome = nome;
        this.dataValidade = dataValidade;
        this.nacionalidade = nacionalidade;
    }
}