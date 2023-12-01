//FUNCAO RECURSIVA NADA MAIS É UMA FUNCAO QUE SE CHAMA ELA MESMO DE VOLTA 

function recursiva(max) {
    console.log(max)
    if (max >= 10) return
    max++
    recursiva(max)
}

recursiva(0)