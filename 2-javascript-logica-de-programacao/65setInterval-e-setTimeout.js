/*
FUNÇÃO DE CONTROLAR TIMER
*/

const getHours = () => {
    const date = new Date()
    const getHour = date.toLocaleTimeString('pt-BR', {
        hour12: false
    })

    return getHour
}


const time = setInterval(() => { // É UMA FUNÇÃO QUE SERA EXECUTADO DENTRO DE UM X PERIODO DE TEMPO E O ARGUMENTO DEVE SER PASSADO DEPOIS DAS FUNCTION{}, 1000 E TBM PODEMOS ATRIBUIR A UMA VARIAVEL
    console.log(getHours())
}, 1000)

setTimeout(() => { // É UMA FUNÇÃO QUE SERA EXECUTADO DENTRO DE UM X PERIODO DE TEMPO E APENAS UMA VEZ 
    console.log('NAO DESISTA RAFAEL VOCE ESTA INDO MUITO BEM')
    clearInterval(time) // SERVE PARA PARAR UMA EXECUÇÃO
}, 5000)