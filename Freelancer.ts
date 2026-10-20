import { Funcionario } from "./Funcionario";

export class Freelancer extends Funcionario {
    salarioHora: number;
    dataLimiteContrato: Date;

    constructor(
        nome: string,
        sexo: string,
        dataContratacao: Date,
        cpf: string,
        rg: string,
        salarioHora: number,
        dataLimiteContrato: Date
    ) {
        super(nome, sexo, dataContratacao, cpf, rg);
        this.salarioHora = salarioHora;
        this.dataLimiteContrato = dataLimiteContrato;
    }

    calcularSalario(horasTrabalhadas: number): number {
        return this.salarioHora * horasTrabalhadas;
    }

    getTipo(): string {
        return "Freelancer";
    }

    contratoAtivo(): boolean {
        return Date.now() <= this.dataLimiteContrato.getTime();
    }

    tempoRestanteContrato(): string {
        const diferenca =
            this.dataLimiteContrato.getTime() - Date.now();

        if (diferenca <= 0) {
            return "Contrato encerrado";
        }

        const dias = Math.floor(
            diferenca / (1000 * 60 * 60 * 24)
        );

        const horas = Math.floor(
            (diferenca % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

        return `${dias} dias e ${horas} horas`;
    }
}
