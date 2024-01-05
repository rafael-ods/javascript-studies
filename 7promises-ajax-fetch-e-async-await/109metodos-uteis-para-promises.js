//PROMISE VEIO PARA RESOLVER A QUESTAO DE QUANDO ALGO DEVE SER EXECUTADO INDEPENDENTE DA ESPERA 
const rand = (min, max) => {
    min *= 1000
    max *= 1000
    return Math.round(Math.random() * (max - min) + min)
}


const conected = (msg, time) => {
    return new Promise((resolve, reject) => { // CONSTRUCTOR DA PROMISE RECEBE DOIS PARAMETROS QUE SAO O RESOLVE: QUE INDICAMOS QND IRA RESOLVER E DEVOLVER ALGO PARA NOS E O REJECT: QND INDICAMOS UMA REJEIÇÃO 
        if (typeof msg !== 'string') {
            reject(new Error('BAD VALUE'))
            return
        }

        setTimeout(() => {
            resolve(msg + ': PROMISE RESOLVED') // ESTOU RESOLVENDO MINHA FUNCAOO AQUI, COMO SE FOSSE UM CALLBACK
        }, time)
    })
}

//PROMISE.ALL() // RECEBE UM ARRAY E RESOLVE TODAS AS PROMISE
const promise = [
    'Sera o primeiro a ser executado',
    conected('Frase1', 1000),
    conected('Frase2', 2000),
    conected('Frase3', 3000),
    'Final'
]

Promise.all(promise).then(res => {
    console.log(res)
}).catch((erro) => {
    console.log(erro)
})

//PROMISE.RACE() // NADA MAIS É DO UMA CORRIDA PARA EXECUTAR A PROMISE MAIS RAPIDA EM EXECUçÃO 
const promise1 = [
    conected('Frase1', 1000),
    conected('Frase2', 2000),
    conected('Frase3', 500),
]

Promise.race(promise1).then(res => {
    console.log(res)
}).catch((erro) => {
    console.log(erro)
})


//PROMISE.RESOLVE

function downloadPage() {
    const isCache = true

    if (isCache) {
        return Promise.resolve('Page OK')
    } else {
        return conected('page in load', 3000)
    }
}

downloadPage()
    .then(res => {
        console.log(res)
    })
    .catch(erro => {
        console.log(erro)
    })