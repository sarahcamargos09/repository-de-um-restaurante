
export abstract class Funcionario {
    nome: string;
    sexo: string;
    dataContratacao: Date;
    cpf: string;
    rg: string;

    constructor(
        nome: string,
        sexo: string,
        dataContratacao: Date,
        cpf: string,
        rg: string
    ) {
        this.nome = nome;
        this.sexo = sexo;
        this.dataContratacao = dataContratacao;
        this.cpf = cpf;
        this.rg = rg;
    }

    abstract calcularSalario(horasTrabalhadas: number): number;

    abstract getTipo(): string;
}