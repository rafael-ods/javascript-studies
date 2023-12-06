// FOR EACH APENAS ITERAÇÃO COM ARRAYS

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]


let counter = 0

numbers.forEach((value) => {
    counter += value
    return counter
})

console.log(counter)