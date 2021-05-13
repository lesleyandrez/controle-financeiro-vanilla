import { atualizaSaldos } from './saldoHelper.js';
import { templateTransacao } from './templates.js';
import { $transacaoForm } from './transacaoForm.js';
import { transacaoStore } from './transacaoStore.js';
import {
    formatToCurrencyBR,
    generateCode,
} from './util.js';

const $transacoes = document.getElementById('transacoes');

export function inserirTrasacao(transacao) {
    const valorFormatado = formatToCurrencyBR(transacao.valor);
    const className = transacao.valor >= 0 ? 'positivo' : 'negativo';

    $transacoes.insertAdjacentHTML('beforeend', templateTransacao(transacao));

    const {
        $valorTransacao,
        $nomeTransacao,
        $btnAdicionar,
    } = $transacaoForm;

    $nomeTransacao.value = '';
    $valorTransacao.value = '';

    $btnAdicionar.disabled = true;
    $nomeTransacao.focus();
}

export function preencheTransacoesIniciais() {
    const transacoesHTML = transacaoStore.get().map((transacao) => {
        return templateTransacao(transacao);
    }).join('');

    $transacoes.innerHTML = transacoesHTML;
}

export function listenClickRemove() {
    $transacoes.addEventListener('click', (event) => {
        const $btnRemove = event.target;

        if ($btnRemove.dataset.bind === 'btn-delete') {
            const $li = $btnRemove.closest('li');
            const code = $li.dataset.code;
            const transacoes = transacaoStore.get();
            transacaoStore.set(transacoes.filter(transacao => transacao.code !== code));
            atualizaSaldos();
            $li.remove();
        }
    });
}

export function listenInputForm() {
    $transacaoForm.$form.oninput = () => {
        const {
            $valorTransacao,
            $nomeTransacao,
            $btnAdicionar,
        } = $transacaoForm;

        const estaPreenchido = $nomeTransacao.value && $valorTransacao.value;

        $btnAdicionar.disabled = !estaPreenchido;
    }
}

export function listenSubmitForm() {
    $transacaoForm.$form.onsubmit = (event) => {
        event.preventDefault();

        const transacoes = transacaoStore.get();
        const {
            $valorTransacao,
            $nomeTransacao,
        } = $transacaoForm;

        const valor = +$valorTransacao.value;
        const nome = $nomeTransacao.value;
        const code = generateCode();

        const transacao = {
            nome,
            valor,
            code,
        };

        transacaoStore.set([...transacoes, transacao]);
        inserirTrasacao(transacao);
        atualizaSaldos()
    };
}