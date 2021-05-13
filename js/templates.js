import { formatToCurrencyBR } from './util.js';

export function templateTransacao(transacao) {
    const { nome, valor, code } = transacao;
    const className = valor >= 0 ? 'positivo' : 'negativo';
    const valorFormatado = formatToCurrencyBR(valor);

    return `
        <li class="${className}" data-code="${code}">
            ${nome} <span> ${valorFormatado} </span>
            <button class="btn-delete" data-bind="btn-delete">-</button>
        </li>
    `;
}
