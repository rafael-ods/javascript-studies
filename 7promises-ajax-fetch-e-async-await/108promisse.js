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
        }

        setTimeout(() => {
            resolve(msg) // ESTOU RESOLVENDO MINHA FUNCAOO AQUI, COMO SE FOSSE UM CALLBACK
        }, time)
    })


}

conected('frase1', rand(1, 3))
    .then(res => {
        console.log(res);
        return conected('frase2', rand(1, 3))
    })
    .then(res => {
        console.log(res)
        return conected('frase3', rand(1, 3))
    })
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log('ERROR:', e)
    })




// const conected = (msg, time, callback) => { // PRECISAMOS ADICIONAR UM FUNCAO DE CALLBACK PARA PODER COLOCAR NA ORDEM A EXECUCÃO DE CADA FUNCAO
//     setTimeout(() => {
//         console.log(msg)
//         if (callback) callback()
//     }, time)
// }

//USANDO O CALLBACK PARA EXECUTAR NA ORDEM CORRETA POREM A PROMISE VEIO PARA RESOLVER ISTO
// conected('frase1', rand(1, 3), function () {
//     conected('frase2', rand(1, 3), function () {
//         conected('frase3', rand(1, 3))
//     })
// })


// ORDER ALEATORIA DE CADA FUNCAO
// conected('frase1', rand(1, 3))
// conected('frase2', rand(1, 3))
// conected('frase3', rand(1, 3))