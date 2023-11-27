/*
FOR IN -> ELE LE O INDEX (POSIÇÃO) DO ARRAY OU OBJETO 
*/

const people = {
    name: 'Rafael',
    lastname: 'Oliveira',
    years: 30,

}

for (let key in people) {
    const getKey = key
    console.log(people[getKey])
}


const frutas = ['Pera', 'Manga', 'Caju']

for (let i in frutas) {
    console.log(frutas[i])
}