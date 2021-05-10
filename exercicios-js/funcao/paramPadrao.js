// Estratégia 1 para gerar um valor padrão

function soma1(a, b, c) {
     a = a || 1
     b = b || 1
     c = c || 1
     return a + b + c
}

console.log(soma1(), soma1(2), soma1(2, 3), soma1(4, 5, 2), soma1(0, 0, 0)) //Esse pode causar bugs e voltar o 3. Como vemos no console

// Estratégia 2, 3, 4 para gerar um valor padrão

function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // Se for verdadeiro que a está indefinido, ele receberá o valor de 1
    b = 1 in arguments ? b : 1 
    /* 
    existe valor no param. b = existe valor no indice 1
    se não existe valor no param. b = não existe valor no
    indice 1. Por isso atribua o valor 1
    */
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(), soma2(2), soma2(2, 3), soma2(4, 5, 2), soma2(0, 0, 0)) // Esse retorna o valor esperado de 0 no console. Não causa um bug

// Padrão ES2015 de atribuir o valor padrão

function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(2), soma3(2 ,3), soma3(4, 5, 2), soma3(0, 0, 0)) // USE SEMPRE ESSE PADRÃO