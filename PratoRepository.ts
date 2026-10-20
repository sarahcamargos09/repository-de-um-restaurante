
import { Prato } from "../Prato";

export class PratoRepository {
    private pratos: Prato[] = [];

    salvar(prato: Prato): void {
        this.pratos.push(prato);
    }

    consultarPratos(): Prato[] {
        return [...this.pratos];
    }

    relatorioPratos(): void {
        console.log("\n=== RELATÓRIO DE PRATOS ===");

        console.table(
            this.pratos.map(prato => ({
                nome: prato.nome,
                dataValidade:
                    prato.dataValidade.toLocaleDateString("pt-BR"),
                nacionalidade: prato.nacionalidade
            }))
        );
    }
}