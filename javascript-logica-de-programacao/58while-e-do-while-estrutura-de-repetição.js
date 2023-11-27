const random = (min, max) => {
    const result = Math.random() * (max - min) + min
    return Math.floor(result)
}

const num1 = 1
const num2 = 50
let resultRandom = random(num1, num2)

while (resultRandom !== 10) {
    resultRandom = random(num1, num2)
    console.log(resultRandom)
}

// let i = 0;

// while (i <= 10) {
//     console.log(i)
//     i++
// }