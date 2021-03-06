Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra')
    } else if(nota.entre(7, 8.9)) {
        console.log('Aprovado')
    } else if(nota.entre(4, 6.9)) {
        console.log('Recuperação')
    } else if(nota.entre(0, 3.9)) {
        console.log('Reprovado')
    } else {
        console.log('Nota inválida')
    }
}

imprimirResultado(5.5)
imprimirResultado(6)
imprimirResultado(10)
imprimirResultado(8.4)
imprimirResultado(2)
imprimirResultado(-1)
imprimirResultado(11)

