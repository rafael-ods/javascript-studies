/*
BREAK E CONTINUE -> PALAVRAS RESERVADAS A FORS EM GERAIS 
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (value of numbers) {
    if (value === 2 || value === 5) {
        console.log('PULEI')
        continue; // É UMA PALAVRA RESERVADA QUE SERVE PARA INDICAR QUE O LAÇO CONTINUA POIS DENTRO DE UM FOR CASO ELE ACHE A PRIMEIRA VERIFICACAO VERDADEIRA PARA POR PADRAO 
    }

    if (value === 7) {
        console.log(value)
        break; // INDICA QUE AO ENCONTRAR A CONDICAO ESPERADA ELE NAO PRECISA MAIS PERCORRER O LAÇO
    }

    console.log(value)
}