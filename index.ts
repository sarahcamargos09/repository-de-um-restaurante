import { Prato } from "../models/Prato";
import { Contratado } from "../models/Contratado";
import { Freelancer } from "../models/Freelancer";
import { Entrega } from "../models/Entrega";
 
import { PratoRepository } from "./PratoRepository";
import { FuncionarioRepository } from "./FuncionarioRepository";
import { EntregaRepository } from "./EntregaRepository";
 
// Criando os repositórios
const pratoRepository = new PratoRepository();
const funcionarioRepository = new FuncionarioRepository();
const entregaRepository = new EntregaRepository();
 
// Cadastrando pratos
const prato1 = new Prato(
    "Lasanha",
    new Date("2026-11-10"),
    "Italiana"
);
 
const prato2 = new Prato(
    "Feijoada",
    new Date("2026-10-25"),
    "Brasileira"
);
 
const prato3 = new Prato(
    "Sushi",
    new Date("2026-10-28"),
    "Japonesa"
);
 
pratoRepository.salvar(prato1);
pratoRepository.salvar(prato2);
pratoRepository.salvar(prato3);
 
// Cadastrando funcionários contratados
const contratado1 = new Contratado(
    "Ana Silva",
    "Feminino",
    new Date("2024-02-01"),
    "000.000.000-00",
    "00.000.000-0",
    3000
);
 
const contratado2 = new Contratado(
    "Carlos Souza",
    "Masculino",
    new Date("2023-06-15"),
    "111.111.111-11",
    "11.111.111-1",
    3500
);
 
funcionarioRepository.salvar(contratado1);
funcionarioRepository.salvar(contratado2);
 
// Cadastrando freelancers
const freelancer1 = new Freelancer(
    "Pedro Santos",
    "Masculino",
    new Date("2026-09-01"),
    "222.222.222-22",
    "22.222.222-2",
    25,
    new Date("2026-12-31T23:59:59")
);
 
const freelancer2 = new Freelancer(
    "Mariana Lima",
    "Feminino",
    new Date("2026-08-01"),
    "333.333.333-33",
    "33.333.333-3",
    30,
    new Date("2026-10-01T23:59:59")
);
 
funcionarioRepository.salvar(freelancer1);
funcionarioRepository.salvar(freelancer2);
 
// Cadastrando entregas
const entrega1 = new Entrega(
    new Date("2026-10-20T11:30:00"),
    1001,
    "Rua das Flores, 123"
);
 
const entrega2 = new Entrega(
    new Date("2026-10-20T12:15:00"),
    1002,
    "Avenida Brasil, 500"
);
 
entregaRepository.salvar(entrega1);
entregaRepository.salvar(entrega2);
 
// Emitindo relatórios
pratoRepository.relatorioPratos();
funcionarioRepository.relatorioFuncionarios();
funcionarioRepository.relatorioFuncionariosTrabalhando();
entregaRepository.relatorioEntregas();
 
// Calculando salários para 160 horas trabalhadas
funcionarioRepository.relatorioSalarios(160);
 
// Consultando o contrato de um freelancer
funcionarioRepository.consultarContratoFreelancer("Pedro Santos");
 