//FUNCAO GERADORAS SAO CHAMADA COM SINTAXE DIFERENTE COLOCAMOS UM * NA FRENTE DA PALAVRA FUNCTION*


function* generation() {
    //CODIGO
    yield 'valor1'
    //CODIGO
    yield 'valor2'
    //CODIGO
    yield 'valor3'
}

const g1 = generation()

// console.log(g1) //Object [Generator] {}
// //USAMOS A O METODO NEXT() PARA ACESSAR O VALOR DESSA FUNCAO E SE ADICIONARMOS O .VALUE ELE PEGA EXATAMENTE O VALOR 
// console.log(g1.next()) // { value: 'valor1', done: false } VALUE: INDICA O VALOR DO YIELD E O DONE: INDICA QUE EXISTE MAS VALORES, POR ISTO O RESULTADO TRAS COMO FALSO
// console.log(g1.next()) // { value: 'valor2', done: false }
// console.log(g1.next()) // { value: 'valor3', done: false }
// console.log(g1.next()) // { value: undefined, done: true } VALUE: COMO NAO TEM MAIS VALOR DENTRO AD FUNCAO PARA SER EXIBIDO ELE ME RETORNA UNDEFINED E JAA O DONE: RETORNA COMO TRUE POIS NAO EXISTE MAIS VALORES 

for (let value of g1) {
    console.log(value)
}

// FUNCAO GERADORA DENTRO DE OUTRA FUNCAO
function* generation1() {
    yield 1
    yield 2
    yield 3
}

function* generation2() {
    yield* generation1() // NOTA QUE PRA UTILIZAR UMA FUNCAO DENTRO DE OUTRA GERADORA O YIELD TEM QUE ESTAR COM * NA SUA FRENTE 
    yield 4
    yield 5
    yield 6
}

const g2 = generation2()
for (let value of g2) {
    console.log(value)
}

//EXEMPLO COM FUNCAO DENTRO DE UMA FUNCAO GERADORA

function* generation3() {
    yield function () {
        console.log('vim do yield 1 da funcao 3')
    };
    //...
    yield function () {
        console.log('vim do yield 2 da funcao 3')
    }

}

const g3 = generation3()
const func1 = g3.next().value
const func2 = g3.next().value

func1()
func2()