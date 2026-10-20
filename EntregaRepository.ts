
import { Entrega } from "../models/Entrega";

export class EntregaRepository {
    private entregas: Entrega[] = [];

    salvar(entrega: Entrega): void {
        this.entregas.push(entrega);
    }

    consultarEntregas(): Entrega[] {
        return [...this.entregas];
    }

    relatorioEntregas(): void {
        console.log("\n=== RELATÓRIO DE ENTREGAS ===");

        console.table(
            this.entregas.map(entrega => ({
                dataHoraSaida:
                    entrega.dataHoraSaida.toLocaleString("pt-BR"),
                numeroPedido: entrega.numeroPedido,
                enderecoEntrega: entrega.enderecoEntrega
            }))
        );
    }
}