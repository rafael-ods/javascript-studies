const name = 'Rafael';
const lastname = 'oliveira';
const years = 31;
const weight = 68;
const heigth = 1.68;
let imc = weight / (heigth * heigth)
let anoNascimento = 2023 - years

console.log(`${name} ${lastname} tem ${years} anos, pesa ${weight} kg, tem ${heigth} de altura e seu IMC é de ${imc.toFixed(2)}`)
console.log(`${name} ${lastname} nasceu em ${anoNascimento}`)