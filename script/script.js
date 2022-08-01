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

// task 3
const student = {
    name: 'John',
    age: 19,
    isHappy: true
}
for (let key in student) {
    console.log(`${key}: ${student[key]}`)
}

// task 4
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};
// На самом деле мог и без циклов сделать, если что переделаю
for (let key in colors) {
    for (let i in colors[key]) {
        if (i === 'red') console.log(colors[key][i])
        else if (i === 'blue') console.log(colors[key][i])
    }
}

// task 5
let salaries = {
    andrey1: 500,
    sveta: 413,
    anton: 987,
    andrey2: 664,
    alexandra: 199
}
let averageSal = 0;
let numHum = 0;
for (let sum in salaries) {
    averageSal  += salaries[sum];
    numHum++;

}
averageSal /=  numHum;
console.log(averageSal)

// task 6

// const registr = {
//     username: prompt('Введите ваш ник для регистрации'),
//     password: prompt('Введите ваш пароль для регистрации')
// }

// const login = {
//     username: prompt('Введите ваш ник для входа в аккаунт'),
//     password: prompt('Введите ваш пароль для входа в аккаунт')
// }

// if ((login.username === registr.username) && (login.password === registr.password)) console.log(`Добро пожаловать, ${login.username}!`)
// else console.log('Неправильно введен логин или пароль!')