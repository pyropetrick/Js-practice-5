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

// ----------advanced lvl--------------

// task 1

// let ourScore = prompt("Введите количество голов обеих команд в формате n:m, счет голов не может быть больше 9");

// //  только если a:b ввести не робит программа , а так все вроде учел.
// function filterScore(score) {
//     if ((score.length > 3) || (score[1] !== ':')) console.log('вы ввели какую-то херню')
//     else {
//         score = score.split(":");
//         let teamFirst = +score[0];
//         let teamSecond = +score[1];
//         if ((teamFirst > 9 || teamSecond > 9) || (teamFirst < 0 || teamSecond < 0)) console.log("Введите корректный счет")
//         else {
//             if (teamFirst === 9) console.log(`Первая команда победила со счетом ${teamFirst} - ${teamSecond}`)
//             else if (teamSecond === 9) console.log(`Вторая команда победила со счетом ${teamSecond} - ${teamFirst}`)
//             else console.log(`Первая команда забила - ${teamFirst} голов, вторая команда забила - ${teamSecond} голов`)
//         }
//     }
    
// }
// filterScore(ourScore)

// task 2

let student1 = {
    name: 'Polina',
    age: 27,
}

let student2 = {
    name: 'Polina',
    age: 27,
}
function isEqual (object1, object2) {
    property1 = Object.getOwnPropertyNames(object1);
    property2 = Object.getOwnPropertyNames(object2);
    if (property1.length !== property2.length) return false

    else {
        for (let i in property1) {
            let prop = property1[i];
            if (object1[prop] !== object2[prop]) return false
        }
        return true
    }
}
console.log(isEqual(student1,student2))

// task 3

const animals = {
    cat: {
        name: 'Енчик',
        age: 3,
    },
    dog: {
        name: 'Орео',
        age: 2,
    },

}

function findBird(object) {
    if (object.bird === undefined) console.log("Птички не существует в нашем объекте")
    else if (object.bird.name === undefined) console.log('У птички нет имени')
    else console.log(object.bird.name)
}

findBird(animals);