// До лекції від 11.02F

// создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let user = {
//     name: 'Alex',
//     age: 23,
//     sex: 'men',
//     wife: { name: 'Tanya', age: 22 },
//     pets: ['dog', 'cat']
// };

// let car = {
//     title: 'mazda',
//     year: 2010,
//     state: true,
//     wheel: { mark: 'continental', size: 17 },
//     color: ['blue', 'grey']
// }

// let book = {
//     writer: 'Saks',
//     type: 'medecine',
//     statusRead: false,
//     pages: { count: 200, type: 'paper' },
//     cowriter: ['Kafka', false]
// }

// let phone = {
//     mark: 'iphone',
//     model: '4s',
//     memory_gb: 64,
//     cases: { color: 'red', weight: 100 },
//     color: ['gold', 'silver']
// }

// let house = {
//     area: 200,
//     basement: true,
//     famaly: 'Romanovy',
//     neighbors: { name: 'Ivan', relation: 'ok' },
//     works: ['roof', 'footer', 'livingroom']
// }


// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// for (const key in user) {
//     console.log(key, user[key]);
// }

// for (const key in car) {
//     console.log(key, car[key]);
// }
// for (const key in book) {
//     console.log(key, book[key]);
// }
// for (const key in phone) {
//     console.log(key, phone[key]);
// }
// for (const key in house) {
//     console.log(key, house[key]);
// }

// - 5 Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
// - 6 Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// - 7 Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
let cars = [
    car1 = { model: 'zaz', year: 2020, power: 'strong', color: 'grey', driver: { name: 'men', age: 20, ex: 'high' } },
    car2 = { model: 'wv', year: 2019, power: 'low', color: 'green', driver: { name: 'men', age: 20, ex: 'high' } },
    car3 = { model: 'merc', year: 2018, power: 'medium', color: 'gold', driver: { name: 'men', age: 20, ex: 'high' } },
    car4 = { model: 'mazda', year: 2017, power: 'strong', color: 'none', driver: { name: 'men', age: 20, ex: 'high' } },
    car5 = { model: 'toyota', year: 2016, power: 'strong', color: 'black', driver: { name: 'men', age: 20, ex: 'high' } },
    car6 = { model: 'deo', year: 2022, power: 'strong', color: 'grey', driver: { name: 'men', age: 20, ex: 'high' } },
    car7 = { model: 'kraz', year: 2010, power: 'strong', color: 'grey', driver: { name: 'men', age: 20, ex: 'high' } },
    car8 = { model: 'honda', year: 2000, power: 'strong', color: 'grey', driver: { name: 'men', age: 20, ex: 'high' } }
]

// 8 - проитерировать каждый массив из задания 5,6,7 при помощи while.
// 9 - проитерировать каждый массив из задания 5,6,7 при помощи for .
// 10 - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// c = 0
// while (c < cars.length) {
//     console.log(cars[c]);
//     c++
// }

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

// for (const i of cars) {
//     console.log(i);
// }


// 11 - взять объекты из задания 1 и превратить каждый в json.
// let jsonFile = JSON.stringify(user);
// let jsonFile1 = JSON.stringify(car);
// let jsonFile2 = JSON.stringify(book);
// let jsonFile3 = JSON.stringify(house);
// let jsonFile4 = JSON.stringify(phone);

// console.log(jsonFile, jsonFile1, jsonFile2, jsonFile3, jsonFile4);


// 12 - взять json из задания 11 и превратить их обратно в объекты.
// let jsonFilep = JSON.parse(jsonFile);
// let jsonFile1p = JSON.parse(jsonFile1);
// let jsonFile2p = JSON.parse(jsonFile2);
// let jsonFile3p = JSON.parse(jsonFile3);
// let jsonFile4p = JSON.parse(jsonFile4);
// console.log(jsonFilep, jsonFile1p, jsonFile2p, jsonFile3p, jsonFile4p);

// 13 - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// 14 - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// 15 - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

// let newArr = [];
// for (const i of cars) {
//     let jsonObj = JSON.stringify(i);
//     newArr.push(jsonObj);
// }
// console.log(newArr);

// // Parse
// for (const i of newArr) {
//     let n = JSON.parse(i);
//     console.log(n);
// }


// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив

// let users = [
//     user1 = { name: 'Vasya', age: 31, weight: 87.9, status: true, skills: ['java', 'js', 'html', 'mysql'], wife: { name: 'Vika' } },
//     user2 = { name: 'Andrev', age: 12, weight: 100, status: true, skills: ['python', 'js', 'html', 'mysql'], wife: { name: 'Evdokiya' } },
//     user3 = { name: 'Igor', age: 222, weight: 20, status: false, skills: ['python', 'node', 'css', 'sqllite'], wife: { name: 'Eva' } }
// ];

// let arrSpec = []
// for (const i of users) {
//     for (const n of i.skills) {
//         arrSpec.push(n)
//     }
// }
// console.log(arrSpec);


// За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [{ name: 'vasya', age: 31, status: false, skills: ['java', 'js'] }, { name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html'] }, { name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo'] }, { name: 'olya', age: 28, status: false, skills: ['java', 'js'] }, { name: 'max', age: 30, status: true, skills: ['mysql', ',mongo'] }];

// for (const i of users) {
//     for (const n of i.skills) {
//         console.log(n);
//     }
// }

// 24 ---------------------
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let usersAddress = [];
// for (const i of users) {
//     usersAddress.push(i.address)
// }
// console.log(usersAddress);


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

// for (let i of users) {
//     let div = document.createElement('div');
//     div.innerText = `${i.name} - ${i.age}`;
//     document.body.appendChild(div)
// }


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// for (const i of users) {
//     let container = document.createElement('div');
//     container.classList.add('wrap');
//     // add name
//     let name = document.createElement('h4');
//     name.innerText = `${i.name}`;
//     container.appendChild(name);
//     // add age
//     let age = document.createElement('p');
//     age.innerText = `${i.age}`;
//     container.appendChild(age);
//     // add status
//     let status = document.createElement('p');
//     status.innerText = `${i.status}`;
//     container.appendChild(status);
//     // add address
//     let address = document.createElement('p');
//     address.innerText = `${i.address.city}, ${i.address.country}, ${i.address.street}, ${i.address.houseNumber}`;
//     container.appendChild(address);

//     document.body.appendChild(container);
// }


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// for (const i of users) {
//     let container = document.createElement('div');
//     container.classList.add('wrap');
//     // add name
//     let name = document.createElement('h4');
//     name.innerText = `${i.name}`;
//     container.appendChild(name);

//     // add age
//     let age = document.createElement('p');
//     age.innerText = `${i.age}`;
//     container.appendChild(age);

//     // add status
//     let status = document.createElement('p');
//     status.innerText = `${i.status}`;
//     container.appendChild(status);

//     // add address
//     let address = document.createElement('div');
//     address.innerText = 'Address: ';
//     // add address-city
//     let addressCity = document.createElement('span');
//     addressCity.innerText = `${i.address.city}, `;
//     address.appendChild(addressCity);
//     // add address-country
//     let addressCountry = document.createElement('span');
//     addressCountry.innerText = `${i.address.country}, `;
//     address.appendChild(addressCountry);

//     // add address-street
//     let addressStreet = document.createElement('span');
//     addressStreet.innerText = `${i.address.street}, `;
//     address.appendChild(addressStreet);

//     // add address-house
//     let addressHouse = document.createElement('span');
//     addressHouse.innerText = `${i.address.houseNumber}`;
//     address.appendChild(addressHouse);

//     container.appendChild(address);


//     document.body.appendChild(container);
// }


// 87 - Дано 2 масиви з рівною кількістю об'єктів.
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id". Записати цей об 'єкт в новий масив Частковий приклад реультату:
// let usersWithCities = [{ id: 1, name: 'vasya', age: 31, status: false, address: { user_id: 1, country: 'Ukraine', city: 'Ternopil' } }....]

// Масиви:
let usersWithId = [{ id: 1, name: 'vasya', age: 31, status: false }, { id: 2, name: 'petya', age: 30, status: true }, { id: 3, name: 'kolya', age: 29, status: true }, { id: 4, name: 'olya', age: 28, status: false }, ];

let citiesWithId = [{ user_id: 3, country: 'USA', city: 'Portland' }, { user_id: 1, country: 'Ukraine', city: 'Ternopil' }, { user_id: 2, country: 'Poland', city: 'Krakow' }, { user_id: 4, country: 'USA', city: 'Miami' }, ];


// let arrUserWithCity = [];
// for (const i of usersWithId) {
//     for (const n of citiesWithId) {
//         if (n.user_id == i.id) {
//             i.address = n;
//             arrUserWithCity.push(i)
//         }
//     }

// }
// console.log(arrUserWithCity);


// 100 створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// - змінити цей текст використовуючи селектори id, class,  tag
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// let findDivs = document.getElementsByTagName('div');
// for (const i of findDivs) {
//     i.innerText = 'sm new';
//     i.style.height = '100px';
//     i.style.maxWidth = '300px';
//     i.style.border = '1px solid red';
// }

// let findClassCard = document.getElementsByClassName('card');
// for (const i of findClassCard) {
//     i.innerText = 'calss text';
//     i.style.maxWidth = '100px';
// }


// let findIdTarget = document.getElementById('header-id');
// findIdTarget.innerText = 'New text';
// findIdTarget.style.height = '100px';
// findIdTarget.style.border = '2px solid green';


// - 103 за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt

// let n = prompt('Введіть кількість рядків');
// let m = prompt('Введіть кількість комірок');

// let ul = document.createElement('table');
// for (let i = 0; i < n; i++) {
//     let li = document.createElement('tr');

//     for (let i = 0; i < m; i++) {
//         let spanInLi = document.createElement('td');
//         spanInLi.style.border = '1px solid #000';
//         spanInLi.style.width = '100px';
//         spanInLi.style.height = '50px';

//         li.appendChild(spanInLi);
//     }

//     ul.appendChild(li)
// }
// document.body.appendChild(ul)


// // --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
// //  - знайти всі елементі, які мають class
// let allClass = document.getElementsByClassName('bg__text');
// console.log(allClass);

// //  - знайти всі параграфи ,та змінити текст на hello oktenweb!
// let allP = document.getElementsByTagName('p');
// for (const i of allP) {
//     i.innerText = 'Hello oktenweb';
// }
// //  - знайти всі div та змінити ім колір на червоний

// let allDivs = document.getElementsByTagName('div');
// for (const i of allDivs) {
//     i.style.backgroundColor = 'red';
// }