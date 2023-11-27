/*
TRY -> TENTE EXECUTAR  UM CODIGO CASO NAO CONSIGA CAIRA NO BLOCO CATCH

BLOCO:

TRY {

}CATCH(ERROR)  {

}

*/

const sum = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('X E Y PRECISAM SER NUMEROS') // PALAVRA RESERVADA PARA LANÇAR UM ERRO CASO ELE ACONTEÇA E ELA É UMA FUNÇÃO CONSTRUTORA
    }

    return x + y
}

try {
    console.log(sum(1, 2))
    console.log(sum('a', 2))
} catch (error) {
    console.log(error)
}