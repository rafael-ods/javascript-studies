/*
> maior que
>= maior igual que ou maior
< menor que 
<= menor igual que ou menor
== igualdade valor (N RECOMENDADO POIS SO CHECA VALOR )
=== igualdade restrita (RECOMENDADO A USAR POIS CHECA VALOR E TIPO)
!= Diferente (N RECOMENDADO POIS SO CHECA VALOR )
!== Diferente restrita (RECOMENDADO A USAR POIS CHECA VALOR E TIPO)
*/

const num1 = 10
const num2 = 9

console.log('1Parte', num1 > num2)
console.log('1Parte', num1 >= 10)
console.log('1Parte', num1 < 11)
console.log('1Parte', num1 <= 9)

const num3 = 10
const num4 = "10"

console.log('2Parte', num3 == num4) // nao recomendado pois ele so checa o valor e não o tipo
console.log('2Parte', num3 === num4)

const num5 = 10
const num6 = "10"

console.log('3parte', num5 != num6) // nao recomendado pois ele so checa o valor e não o tipo
console.log('3parte', num5 !== num6)