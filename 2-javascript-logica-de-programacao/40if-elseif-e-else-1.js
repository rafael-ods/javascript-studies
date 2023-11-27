/*
IF PODEMOS UTILIZAR SOZINHO
ELSE IF SEMPRE ESTA ACOMPANHADO DE IF E PODEMOS TER VARIOS
ELSE SEMPRE ESTA ACOMPANHADO DE UM IF E SO PODEMOS TER UM ELSE POR CONDICAO 
*/

const hora = 18

if (hora <= 11) {
    console.log('bom dia')
} else if (hora <= 17) {
    console.log('boa tarde')
} else {
    console.log('boa noite')
}

const daySol = '' // FOR UM VALOR NAO CONSIDERANDO FALSY A EXPRESSAO SE TORNA VERDADEIRA

if (daySol) {
    console.log('vou fazer algo hoje!')
} else(
    console.log('vou ficar em casa')
)