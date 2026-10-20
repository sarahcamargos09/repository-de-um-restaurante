
import { Funcionario } from "../Funcionario";
import { Freelancer } from "../Freelancer";

export class FuncionarioRepository {
    private funcionarios: Funcionario[] = [];

    salvar(funcionario: Funcionario): void {
        this.funcionarios.push(funcionario);
    }

    consultarFuncionarios(): Funcionario[] {
        return [...this.funcionarios];
    }

    relatorioFuncionarios(): void {
        console.log("\n=== RELATÓRIO DE FUNCIONÁRIOS ===");

        console.table(
            this.funcionarios.map(funcionario => ({
                nome: funcionario.nome,
                sexo: funcionario.sexo,
                dataContratacao:
                    funcionario.dataContratacao.toLocaleDateString("pt-BR"),
                cpf: funcionario.cpf,
                rg: funcionario.rg,
                tipo: funcionario.getTipo()
            }))
        );
    }

    relatorioSalarios(horasTrabalhadas: number): void {
        console.log(
            `\n=== RELATÓRIO DE SALÁRIOS: ${horasTrabalhadas} HORAS ===`
        );

        console.table(
            this.funcionarios.map(funcionario => ({
                nome: funcionario.nome,
                tipo: funcionario.getTipo(),
                salario: funcionario
                    .calcularSalario(horasTrabalhadas)
                    .toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    })
            }))
        );
    }

    relatorioFuncionariosTrabalhando(): void {
        console.log("\n=== FUNCIONÁRIOS TRABALHANDO ===");

        const trabalhando = this.funcionarios.filter(funcionario => {
            if (funcionario instanceof Freelancer) {
                return funcionario.contratoAtivo();
            }

            return true;
        });

        console.table(
            trabalhando.map(funcionario => ({
                nome: funcionario.nome,
                tipo: funcionario.getTipo()
            }))
        );
    }

    consultarContratoFreelancer(nome: string): void {
        const freelancer = this.funcionarios.find(
            funcionario =>
                funcionario instanceof Freelancer &&
                funcionario.nome.toLowerCase() === nome.toLowerCase()
        );

        if (!(freelancer instanceof Freelancer)) {
            console.log(`Freelancer "${nome}" não encontrado.`);
            return;
        }

        console.log("\n=== SITUAÇÃO DO CONTRATO ===");
        console.log("Nome:", freelancer.nome);
        console.log(
            "Contrato ativo:",
            freelancer.contratoAtivo() ? "Sim" : "Não"
        );
        console.log(
            "Tempo restante:",
            freelancer.tempoRestanteContrato()
        );
    }
}