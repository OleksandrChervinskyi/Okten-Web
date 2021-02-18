// Леція від 02.02.21
// let a = 2
//     // Обєкт
// const user = {
//     name: 'rerj',
//     age: '23'
// }

// // Масив
// let wallet = [100, 200, 100, 500, 1000, 200]

// // Консоль лог - вивід в браузері
// console.log(a);
// console.log(b);
// console.log(c);

// console.log(wallet[3]);
// console.log(user.name);
// console.log(user['name']);

// // Також вивід на екран (не використовуються рідко)
// document.write('222');
// document.write(a + 'br');
// document.write(a);

// document.write('<h1>' + a + '</h1>');
// document.write(`<h1>${a}</h1>`);


// // Третій спосіб виводу через модальні вікна (не варто користуватись)
// alert(a);

// // Arrow
// let users = [
//     { username: 'vasya', password: '1234' },
//     { username: 'kio', password: '1333' },
//     { username: 'sas', password: '1fsdf' },
// ]

// console.log(users);
// console.log(users[0].password);

// // Заглушка
// let car = null;

// ---------------------------------------
// checklist!
// let,var,const
// number
// string
//boolean
// if
// switch

// tips with parse ot types

// Вывод информации
console.log('hello');
document.write('yo!');
document.write('<h1>yo!</h1>');
// получение информации от пользователя
let answer = prompt('your question here');
console.log(answer);
document.write(answer);

/*Куда записывать информацию?*/
/*Переменные и их типы*/
let age = 31;
console.log(age);
let height = 187;
let normalWeight = height - 100;
console.log("normal weight for you is ", normalWeight);
// + - / * %
console.log(10 % 3); //1
let weight = 87.9;

console.log(weight);
let name = 'Vasya';
console.log(name);
name = "Petya";
console.log(name);
let status = true;
console.log(status);
status = 5 > 6;
console.log(status);
// > < >= <= == != === !==
//!? Где это используется?
let question = 5 > 6;
if (question) {
    console.log('if question =  true you will see this');
} else {
    console.log('if question =  false you will see this block');
}

let a = 10;
let b = 20;
let c = 30;
let d = 10;
if (d === a) {
    console.log('d = 10');
} else if (d === b) {
    console.log('d = 20');
} else if (d === c) {
    console.log('d === 30');
} else {
    console.log('d is unknow');
}

switch ('') {
    case "start":
        console.log('go');
        break;
    case 'stop':
        console.log('you must stop');
        break;
    default:
        console.log('wait');

}


// false -> false, 0, '', undefined, NaN, null

// console.log(!!'hello');
// console.log(!!100);
// console.log(!!-100);

// console.log(!!0);
// console.log(!!' ');
// console.log(!!undefined);
//
// console.log(100 / 'hello');
// console.log(!!NaN);
//
// console.log(!!null);

// let answer = confirm('are you older than 18?');
// console.log(answer);

/**/
// let bool = true;
// bool = !bool;


// // parseInt();
// // parseFloat();
// let pow = Math.pow(3, 4);
// console.log(pow);
// let floor = Math.floor(3.99);
// console.log(floor);
// let round = Math.round(3.99);
// console.log(round);

// let random = Math.random();
// console.log(random);

// let random = Math.random() * 50;
// console.log(random);

// let random = Math.random() * 50 + 10;
// console.log(random);