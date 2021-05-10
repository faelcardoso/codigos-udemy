// Função sem retorno

function imprimirSoma(a, b, c)
{
    console.log(a + b - c)
}

imprimirSoma(2, 3, 0)
imprimirSoma(2) // Não tem nada no segundo valor = UNDEFINED
imprimirSoma(2, 10, 4, 5, 6, 3, 18)
imprimirSoma()

//função com retorno

function soma (a, b = 1)
{
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())
