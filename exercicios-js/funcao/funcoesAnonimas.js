const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(2, 3)
imprimirResultado(2, 3, soma)
imprimirResultado(2, 3, function (x, y) {
    return x * y
}) 
imprimirResultado(3, 4, (x, y) => x * y) // Arrow sempre será anôonima

const pessoa = {
    falar: function () {
        console.log('Eae')
    }
}

pessoa.falar()
