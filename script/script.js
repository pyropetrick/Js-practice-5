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
const SCORE_FROM_BACK = '2:5';

const SCORE = {
    teamOne: +SCORE_FROM_BACK.split(":")[0],
    teamTwo: +SCORE_FROM_BACK.split(":")[1],
}
console.log(SCORE)

function filterScore(score) {
    if (score.teamOne > 9 || score.teamTwo > 9 || score.teamOne < 0 || score.teamTwo < 0) console.log("Возможно матч уже завершился давно или кто-то сбился со счета, но уже больше 9 забитых мячей")
    else console.log(`Ведется неутешительная борьба за первенство, первая команда забила ${score.teamOne} мячей, а вторая команда ${score.teamTwo}`)
}
filterScore(SCORE)

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
const defaults = {
    bird: {
        name: 'Linki',
        age: 1,
    }
}
const animalWorld = {
    ...defaults,
    ...animals,
}

function findBird(object) {
    console.log(object.bird.name)
}

findBird(animalWorld);