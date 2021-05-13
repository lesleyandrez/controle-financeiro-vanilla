import { generateCode } from './util.js';

export const transacoesMock = [
    {
        nome: 'Salário',
        valor: 2400,
        code: generateCode(),
    },
    {
        nome: 'Lanche',
        valor: -29.9,
        code: generateCode(),
    },
    {
        nome: 'Luz',
        valor: -120.48,
        code: generateCode(),
    },
    {
        nome: 'Internet',
        valor: -83.9,
        code: generateCode(),
    },
    {
        nome: 'Site da Padaria',
        valor: 1500,
        code: generateCode(),
    },
];
