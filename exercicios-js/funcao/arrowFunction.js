let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a 
}

dobro = a => 2 * a //return implicito
console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá' // se colocarmos o blocos, é necessário acrescentar o return
olá = _ => 'Olá' // Aqui de fato temos UM parâmetro

console.log(ola())

let saudacao = () => console.log('Olá Cardosin')

saudacao()

// Para criarmos uma => devemos sempre armazená-la em uma variável