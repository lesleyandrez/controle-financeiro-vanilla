import { transacaoStore } from './transacaoStore.js';
import { formatToCurrencyBR } from './util.js';

const $valorAtual = document.getElementById('valor-saldo-atual');
const $valorReceitas = document.getElementById('valor-receitas');
const $valorDespesas = document.getElementById('valor-despesas');

export function atualizaSaldos() {
    const transacoes = transacaoStore.get();
    let receitas = 0;
    let despesas = 0;

    transacoes.map((transacao) => {
        if (transacao.valor > 0) {
            receitas += transacao.valor
        } else {
            despesas -= transacao.valor
        }
    });

    $valorAtual.innerText = formatToCurrencyBR(receitas - despesas);
    $valorReceitas.innerText = formatToCurrencyBR(receitas);
    $valorDespesas.innerText = formatToCurrencyBR(despesas * -1);
}