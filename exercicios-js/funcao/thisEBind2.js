function Pessoa() {
    this.idade = 0

    const self /*nome geralmente usado*/ = this

    setInterval(function() { //dentro do set interval temos um temporizador que vai disparar a função automaticamente

        self.idade++ //this está apontando para algo diferente e não para o objeto pessoa

        console.log(self.idade)

    }/*.bind(this)*/, 1000) //O 1000 representa os ms do temporizador
}

new Pessoa 
