const rand = (min = 0, max = 3) => {
    min *= 1000
    max *= 1000
    return Math.round(Math.random() * (max - min) + min)
}


const conected = (msg, time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject(new Error('BAD VALUE'))
                return
            }
            resolve(msg.toLocaleUpperCase() + ': PROMISE RESOLVED')
        }, time)
    })
}

async function executed() {
    try {
        const frase1 = await conected('frase1', rand())
        console.log(frase1)
        const frase2 = await conected('frase2', rand())
        console.log(frase2)
        const frase3 = await conected(333, rand())
        console.log(frase3)
        console.log('Termina aqui:', frase3)
    } catch (e) {
        console.log(e)
    }
}

executed()

// conected('frase1', rand())
//     .then(res => {
//         console.log(res)
//         return conected('frase2', rand())
//     }).then(res => {
//         console.log(res)
//         return conected('frase3', rand())
//     }).then(res => {
//         console.log(res)
//         return res
//     })
//     .then(res => {
//         console.log('Termina aqui:', res)
//     })
//     .catch(error => {
//         console.log(error)
//     })