import { generateCode } from './util.js';
import { atualizaSaldos } from './saldoHelper.js';
import { templateTransacao } from './templates.js';
import { $transacaoForm } from './transacaoForm.js';
import { transacaoStore } from './transacaoStore.js';
import { listenInputForm } from './transacoesHelper.js';
import { listenSubmitForm } from './transacoesHelper.js';
import { listenClickRemove } from './transacoesHelper.js';
import {
    inserirTrasacao,
    preencheTransacoesIniciais,
} from './transacoesHelper.js';
import { transacoesMock } from './transacoesMock.js';

transacaoStore.set(transacoesMock);

preencheTransacoesIniciais();
atualizaSaldos();

listenInputForm();
listenClickRemove();
listenSubmitForm();
