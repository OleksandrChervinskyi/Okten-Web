// // // До лекції від 25.02
// - создать массив с 20 числами.
let arr = [10, 20, 44, 23, 1, 0, -1, 345, 3.5, 0.01, 0, 0, 23, 33, -30];
// -- при помощи метода sort и колбека  отсортировать массив.
arr.sort((a, b) => a - b);

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
arr.sort((a, b) => b - a);

// -- при помощи filter получить числа кратные 3
let newArr = arr.filter(value => value % 3 === 0 && value !== 0);
// console.log(newArr);

// -- при помощи filter получить числа кратные 10
let oldArr = arr.filter(value => value % 10 === 0 && value !== 0);
// console.log(oldArr);

// -- перебрать (проитерировать) массив при помощи foreach()
// arr.forEach(value => console.log(value));

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
let moreArr = arr.map(value => value * 3);
// console.log(moreArr);
// console.log(arr);


// - создать массив со словами на 15-20 элементов.
let str = ['never', 'forget', 'to', 'kilo',
    'empty', 'your', 'vacuum', 'bags', 'car', 'fly', 'me', 'and', 'I', 'Mass'
];

// -- отсортировать его по алфавиту в восходящем порядке.
str.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
    } else if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
    } else {

        return 0;
    }
});
// console.log(str);

// -- отсортировать его по алфавиту  в нисходящем порядке.
str.sort((a, b) => {
    if (a.toLowerCase() > b.toLowerCase()) {
        return -1;
    } else if (a.toLowerCase() < b.toLowerCase()) {
        return 1;
    } else {

        return 0;
    }
});
// console.log(str);

// -- отфильтровать слова длиной менее 4х символов
let filtArr = str.filter(value => value.length <= 4);
// console.log(filtArr);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
let mapArr = str.map(value => value + '!');
// console.log(mapArr);


// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [{ name: 'vasya', age: 31, status: false }, { name: 'petya', age: 30, status: true }, { name: 'kolya', age: 29, status: true }, { name: 'olya', age: 28, status: false }, { name: 'max', age: 30, status: true }, { name: 'anya', age: 31, status: false }, { name: 'oleg', age: 28, status: false }, { name: 'andrey', age: 29, status: true }, { name: 'masha', age: 30, status: true }, { name: 'olya', age: 31, status: false }, { name: 'max', age: 31, status: true }];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
users.sort((a, b) => a.age - b.age);
// console.log(users);

// // - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
users.sort((a, b) => a.name.length - b.name.length);
// console.log(users);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін);
let newUsers = JSON.parse(JSON.stringify(users));
newUsers.forEach((value, index) => {
    value.id = value.name + '_' + index;
    return value
});
// console.log(users);
// console.log(newUsers);

// - відсортувати його за індентифікатором
newUsers.sort((a, b) => b.id - a.id);
// console.log(newUsers);


// -- наисать функцию калькулятора с 2мя числами и колбеком
function Calc(a, b, callback) {
    console.log(callback(a, b));
}
// Calc(10, 20, (a, b) => a / b);
// -- наисать функцию калькулятора с 3мя числами и колбеком

function Calc2(a, b, c, callback) {
    console.log(callback(a, b, c));
}
// Calc2(5, 6, 7, (x, y, z) => x / 2 * y + z);

// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================


let cars = [{ producer: "subaru", model: "wrx", year: 2010, color: "blue", type: "sedan", engine: "ej204x", volume: 2, power: 400 }, { producer: "subaru", model: "legacy", year: 2007, color: "silver", type: "sedan", engine: "ez30", volume: 3, power: 250 }, { producer: "subaru", model: "tribeca", year: 2011, color: "white", type: "jeep", engine: "ej20", volume: 2, power: 300 }, { producer: "subaru", model: "leone", year: 1998, color: "yellow", type: "sedan", engine: "ez20x", volume: 2, power: 140 }, { producer: "subaru", model: "impreza", year: 2014, color: "red", type: "sedan", engine: "ej204x", volume: 2, power: 200 }, { producer: "subaru", model: "outback", year: 2014, color: "red", type: "hachback", engine: "ej204", volume: 2, power: 165 }, { producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120 }, { producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120 }, { producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350 }, { producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180 }, { producer: "mercedes", model: "e200", year: 1990, color: "silver", type: "sedan", engine: "eng200", volume: 2, power: 180 }, { producer: "mercedes", model: "e63", year: 2017, color: "yellow", type: "sedan", engine: "amg63", volume: 3, power: 400 }, { producer: "mercedes", model: "c250", year: 2017, color: "red", type: "sedan", engine: "eng25", volume: 2.5, power: 230 }];

// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
// - двигун = 2л
let volume = cars.filter(value => value.volume === 2);
// console.log(volume);

// - виробник мерс
// - двигун більше 3х літрів + виробник мерседес
let prod = cars.filter(value => value.producer === 'mercedes' && value.volume >= 3);
// console.log(prod);

// - двигун більше 3х літрів + виробник субару
let prod2 = cars.filter(value => value.producer === 'subaru' && value.volume >= 3);
// console.log(prod2);

// - сили більше ніж 300
// - сили більше ніж 300 + виробник субару
let prod3 = cars.filter(value => value.producer === 'subaru' && value.power >= 300);
// console.log(prod3);

// - мотор серіі ej
// - сили більше ніж 300 + виробник субару + мотор серіі ej
let eng = cars.filter(value => value.engine.slice(0, 2) === 'ej' && value.power >= 300 && value.producer === 'subaru');
// console.log(eng);

// - двигун меньше 3х літрів + виробник мерседес
let a = cars.filter(value => value.volume < 3 && value.producer === 'mercedes');
// console.log(a);

// - двигун більше 2л + сили більше 250
let b = cars.filter(value => value.volume > 2 && value.power >= 250);
// console.log(b);

// - сили більше 250  + виробник бмв
let c = cars.filter(value => value.producer === 'bmw' && value.power >= 250);
// console.log(c);


// - взять слдующий массив
let usersWithAddress = [{ id: 1, name: 'vasya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } }, { id: 2, name: 'petya', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 1 } }, { id: 3, name: 'kolya', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } }, { id: 4, name: 'olya', age: 28, status: false, address: { city: 'Lviv', street: 'Ahevchenko', number: 90 } }, { id: 5, name: 'max', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 115 } }, { id: 6, name: 'anya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 2 } }, { id: 7, name: 'oleg', age: 28, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 22 } }, { id: 8, name: 'andrey', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 43 } }, { id: 9, name: 'masha', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 12 } }, { id: 10, name: 'olya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } }, { id: 11, name: 'max', age: 31, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } }];
// -- отсортировать его по id пользователей
// -- отсортировать его по id пользователей в обратном опрядке
usersWithAddress.sort((a, b) => b.id - a.id);

// -- отсортировать его по возрасту пользователей
// -- отсортировать его по возрасту пользователей в обратном порядке
usersWithAddress.sort((a, b) => b.age - a.age);

// -- отсортировать его по имени пользователей
// -- отсортировать его по имени пользователей в обратном порядке
usersWithAddress.sort((a, b) => {
    if (a.name > b.name) {
        return -1;
    } else if (a.name < b.name) {
        return 1;
    } else {
        return 0;
    }
});

// -- отсортировать его по названию улицы  в алфавитном порядке
usersWithAddress.sort((a, b) => {
    if (a.address.street < b.address.street) {
        return -1;
    } else if (a.address.street > b.address.street) {
        return 1;
    } else {
        return 0;
    }
});

// -- отсортировать его по номеру дома по возрастанию
usersWithAddress.sort((a, b) => a.address.number - b.address.number);

// console.log(usersWithAddress);

// -- отфильтровать (оставить) тех кто младше 30
let yong = usersWithAddress.filter(value => value.age <= 30);
// console.log(yong);

// -- отфильтровать (оставить) тех у кого отрицательный статус
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
let yongB = usersWithAddress.filter(value => value.age <= 30 && !value.status);
// console.log(yongB);

// -- отфильтровать (оставить) тех у кого номер дома четный
let yongC = usersWithAddress.filter(value => value.address.number % 2 === 0);
// console.log(yongC);


// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================

// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
class Car {
    constructor(mark, volume, owner, price, year, ) {
        this.mark = mark;
        this.volume = volume;
        this.owner = owner;
        this.price = price;
        this.year = year;

    }
}

class Owner {
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
}
let carPark = [];

let men1 = new Owner('Alex', 26, 5);
let men2 = new Owner('Tom', 19, 2);
let men3 = new Owner('Miki', 45, 20);
let men4 = new Owner('Max', 66, 5);
let men5 = new Owner('Ivanka', 18, 0);

let car1 = new Car('mazda', 2, men1, 20000, 1998);
let car2 = new Car('zaz', 3, men2, 3000, 2000);
let car3 = new Car('bmw', 2, men3, 54634, 2002);
let car4 = new Car('merc', 5, men4, 3000, 1998);
let car5 = new Car('zaz', 1.9, men5, 6500, 2000);
let car6 = new Car('bmw', 2.5, men1, 2100, 2020);
let car7 = new Car('mazda', 2, men2, 4754, 2019);
let car8 = new Car('mazda', 1, men3, 5000, 2018);
let car9 = new Car('merc', 7, men4, 60000, 2017);
let car10 = new Car('mazda', 2, men4, 100000, 1998);

carPark.push(car1, car2, car3, car4, car5, car6, car7, car8, car9, car10);

// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).

// let newDriver = new Owner('Petro', 49, 20);
// carPark.filter((value, index) => {
//     if (index < carPark.length / 2) {
//         value.volume = value.volume + (value.volume * 0.1);
//         value.owner = newDriver;
//     }
// });
// console.log(carPark);

// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
carPark.filter((value, index) => {
    if (index % 2 === 1) {
        value.volume += value.volume * 0.1;
        value.price += value.price * 0.05;
    }
});

// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
carPark.forEach(value => {
    if (value.owner.experience <= 5 && value.owner.age >= 25) {
        value.owner.experience += 1;
    }
});
// console.log(carPark);

// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
totalPrice = 0
carPark.forEach(value => totalPrice += value.price);
// console.log(totalPrice);


// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.

// Пример:
// let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

let array = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];

function getMinAndMaxIndex(arr, number) {

    indexs = [];
    if (arr.includes(number)) {
        arr.forEach((value, index) => {
            if (value === number) {
                indexs.push(index);
            }
        })
    } else {
        indexs.push(-1);
    }
    let result = `Min is ${indexs[0]} and Max is ${indexs[indexs.length - 1]}`;
    return result
}

let ready = getMinAndMaxIndex(array, 111);
console.log(ready);