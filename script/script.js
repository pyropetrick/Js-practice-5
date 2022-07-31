// normal lvl
// task 1
const myName = {
    name: "Pavel",
    surName: "Chernenko"
}
for(let key in myName) {
    delete myName[key]
}
console.log(myName)

// task 2

const dayInfo = {
    weather: "rainy",
    day: "Sunday"
}
for (let key in dayInfo) {
    if (key === 'weather') console.log(true)
}