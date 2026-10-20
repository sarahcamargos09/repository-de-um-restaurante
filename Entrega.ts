export class Entrega {
    dataHoraSaida: Date;
    numeroPedido: number;
    enderecoEntrega: string;

    constructor(
        dataHoraSaida: Date,
        numeroPedido: number,
        enderecoEntrega: string
    ) {
        this.dataHoraSaida = dataHoraSaida;
        this.numeroPedido = numeroPedido;
        this.enderecoEntrega = enderecoEntrega;
    }
}