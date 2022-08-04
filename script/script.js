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

console.log(colors["ru pum pu ru rum"].red)
console.log(colors["ru pum pu ru rum"].blue)


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
// Registration
// const loginReg = prompt('Введите ваш ник для регистрации');
// const passwordReg = prompt('Введите ваш пароль для регистрации');
// login
// const loginLog = prompt('Введите ваш ник для входа в аккаунт');
// const passwordLog = prompt('Введите ваш пароль для входа в аккаунт');

// const registr = {
//     username: loginReg,
//     password: passwordReg
// }

// const login = {
//     username: loginLog,
//     password: passwordLog
// }

// if ((login.username === registr.username) && (login.password === registr.password)) console.log(`Добро пожаловать, ${login.username}!`)
// else console.log('Неправильно введен логин или пароль!')

// ----------advanced lvl--------------

// task 1
const SCORE_BACK = "2:5";

const numberObj = {
    0: "ноль",
    1: "один",
    2: "два",
    3: "три",
    4: "четыре",
    5: "пять",
    6: "шесть",
    7: "семь",
    8: "восемь",
    9: "девять",
}
function filterScore(score) {
    let parseScore = score.split(":");
    const teamScore = {
        teamOne: +parseScore[0],
        teamTwo: +parseScore[1]
    }
    if (teamScore.teamOne > 9 || teamScore.teamTwo > 9 || teamScore.teamOne < 0 || teamScore.teamTwo < 0) return console.log("Вероятнее всего есть какая-то ошибка в счете или матч уже завершился")
    else return console.log(`${numberObj[teamScore.teamOne]}:${numberObj[teamScore.teamTwo]}`)

}


filterScore(SCORE_BACK)

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


console.log(animals.bird?.name || 'bird or bird name not exist');


