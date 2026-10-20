import { Funcionario } from "./Funcionario";

export class Contratado extends Funcionario {
    salarioFixo: number;

    constructor(
        nome: string,
        sexo: string,
        dataContratacao: Date,
        cpf: string,
        rg: string,
        salarioFixo: number
    ) {
        super(nome, sexo, dataContratacao, cpf, rg);

        if (salarioFixo < 0) {
            throw new Error("O salário fixo não pode ser negativo.");
        }

        this.salarioFixo = salarioFixo;
    }

    calcularSalario(horasTrabalhadas: number): number {
        return this.salarioFixo;
    }

    getTipo(): string {
        return "Contratado";
    }
}