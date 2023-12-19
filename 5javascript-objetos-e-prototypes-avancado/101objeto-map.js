const people = [{
        id: 0,
        name: 'Rafael',
    },
    {
        id: 1,
        name: 'Celso',
    },
    {
        id: 2,
        name: 'Maria',
    },
]


// const newPeoples = {}

// for (let value of people) {
//     const {
//         id
//     } = value

//     newPeoples[id] = {
//         ...value,
//     }
// }

const newPeoples = new Map()

for (let value of people) {
    const {
        id
    } = value

    newPeoples.set(id, {
        ...value
    })
}

console.log(newPeoples)