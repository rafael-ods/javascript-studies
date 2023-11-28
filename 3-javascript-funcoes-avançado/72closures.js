//CLOSURES É HABILIDADE QUE FUNÇÃO TEM EM ACESSAR SEU ESCOPO LÉXICO

function talkName() {
    let name = 'Rafael'
    return function () {
        return name
    }
}

const result = talkName()
console.log(result())