function soma() {
    let soma = 0
    for (indice in arguments) {
        soma += arguments[indice]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))

/*

Definimos o parâmetro no momento 
em que chamamos a função e armazenamos 
esses param. no array interno (arguments) 
da função.

*/

