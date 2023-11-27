const sum = (numOne, numtwo) => {
    return Number(numOne + numtwo)
}

console.log(sum(2, 8))

function raiz(n) {
    return Math.sqrt(n).toFixed(2)
}

console.log(raiz(16))

const year = function (years, date) {
    return years - date
}

console.log(year(2023, 31))