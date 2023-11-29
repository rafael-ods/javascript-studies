// IIFE -> IMMEDIATELY INVOKED FUNCTION EXPRESSION
// Ë UMA EXPRESSAO DE FUNCAO INVOCADA IMEDIATAMENTE

// (function () { // MODO DE DECLARAR UMA FUNCAO QUE NAO TOCA O ESCOPO GLOBAL E AUTO SE INVOCA
//     const names = 'Rafael'
//     console.log(names)
// })()

// const names = 'rafael' // NOTA SE QUE ESTA VARIAVEL NAO AFETA A VARIAVEL DE DENTRO DA FUNCAO
// console.log(names)

(function (years, height, weight) {
    const lastname = 'oliveira'

    const createName = (name) => {
        return name + ' ' + lastname
    }

    const talkName = () => {
        console.log(createName('Rafael'))
    }

    talkName()

    console.log(years, height, weight)
})(30, 1.68, 68)

// (() => {
//     console.log('rafael')
// })()