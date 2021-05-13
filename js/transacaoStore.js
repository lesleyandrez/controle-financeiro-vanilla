export const transacaoStore = {
    _transacoes: [],
    get() {
        return this._transacoes;
    },
    set(transacoes = []) {
        this._transacoes = transacoes;
    },
}
