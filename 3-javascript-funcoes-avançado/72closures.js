//CLOSURES É HABILIDADE QUE FUNÇÃO TEM EM ACESSAR SEU ESCOPO LÉXICO
let name = 'Celso' // NESTE CASO SE NAO HOUVESSE A VARIAVEL DA FUNCAO CELSO SERIA EXIBIDO

function talkName() {
    let name = 'Rafael' // SE ESSA VARIAVEL NAO EXISTE AQUI ELE IA FAZER O O CLOSURES E BUSCAR NO SEU ESCOPO ASSIM
    return function () {
        return name
    }
}

const result = talkName()
console.log(result())