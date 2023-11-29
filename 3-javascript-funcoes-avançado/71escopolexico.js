//ESCOPO LÉXICO

const name = 'Rafael' // ELE VAI BUSCANDO E SUBINDO O ESCOPO ATE ENCONTRAR AA SUA VARIAVEL

const talkName = () => {
    const name = 'Celso' // POIS AQUI ELE ENCONTRA A VARIAVEL EM SEU ESCOPO
    console.log(name)
}

function execution() {
    const name = 'Maria' // NESTE CASO AQUI ELE NAO RECONHECE, POIS A FUNCAO ABAIXO GUARDA SEU ESCOPO DE ONDE FOI CHAMADA E DE SEUS PARENTES
    talkName()
}

execution()