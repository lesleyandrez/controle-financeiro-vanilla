export function formatToCurrencyBR(number) {
    return number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export function generateCode() {
    return [100, 200, 300, 400].map((number) => {
        return randomInteger(number);
    }).join('-');
}

function randomInteger(max = 100) {
    // Math.floor === ~~
    return ~~(Math.random() * max) + 1;
}
