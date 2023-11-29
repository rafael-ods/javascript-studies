// FunCAO DE CALLBACK SÃO FUNCAO QUE SAO EXECUTADA QND DETERMINADA FUNCAO É REALIZADA


const randomNumber = (min = 1000, max = 3000) => {
    const rand = Math.random() * (max - min) + min
    return Math.floor(rand)
}


function f1(callback) {
    setTimeout(() => {
        console.log('F1')
        if (callback) callback()
    }, randomNumber())
}

function f2(callback) {
    setTimeout(() => {
        console.log('F2')
        if (callback) callback()

    }, randomNumber())
}

function f3(callback) {
    setTimeout(() => {
        console.log('F3')
        if (callback) callback()
    }, randomNumber())
}

// f1(() => {
//     f2(() => {
//         f3(() => {
//             console.log('OLA MUNDO')
//         })
//     })
// })

f1(f1Callback) //NOME DE CRIAçÃO DA FUNCAO DE CALLBACK

function f1Callback() {
    f2(f2Callback)
}

function f2Callback() {
    f3(f3Callback)
}

function f3Callback() {
    console.log('Ola MUNDO')
}