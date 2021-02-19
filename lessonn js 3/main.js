// Леція від 11.02.21

// objects
// embedded objects
// for in
// Object.keys
// Object ref object
// arrays of objects
//JSON
// get elem by id
// style
// innerText
// classlist.add()
// get elements by tag name
// get elements by class name
// for of by elements
// document.createElement
// element.appendChild
// loop + appendchild

let user = {
    name: 'Vasya',
    age: 31,
    weight: 87.9,
    status: true,
    skills: ['java', 'js', 'html', 'mysql'],
    wife: { name: 'Vika' }
};
console.log(user.name);
console.log(user['name']);
console.log(user.age);
//....
console.log(user.skills);
console.log(user.skills[0]);
console.log(user.skills[1]);
console.log(user.skills[4]);

let nameOfSomeUser = user.name;
console.log(nameOfSomeUser);
user.newField = 'new value';
console.log(user);
delete user.newField;

// Как получить/узнать все поля объекта?
// Object.keys
let keys = Object.keys(user); //
console.log(keys); //["name", "age", "weight", "status", "skills", "wife"]

// for in
for (const key in user) {
    console.log(key);
}

for (const key in user) {
    console.log(user[key]);
}

// Object ref object

let user2 = user;
user2.name = 'new name';
console.log(user2.name); // new name
console.log(user.name); // new name

// Array of objects
let listOfSimpleUser = [
    { name: 'kokos', age: 123 },
    user,
    { name: 'abrikos', age: 23, status: false }
];
console.log(listOfSimpleUser[0].name);
console.log(listOfSimpleUser[2].status);
console.log(listOfSimpleUser[1].skills[0]);

let car = { manufact: 'subaru', model: 'legacy' };
let stringifyCar = JSON.stringify(car);
let parseCar = JSON.parse(stringifyCar);
let stringifyList = JSON.stringify(listOfSimpleUser);
let parseList = JSON.parse(stringifyList);


// Для чего это все можно использовать?
//    доступ к тегами атрибутам на вашей странице и изменения их состояния
let point = document.getElementById('point');
point.style.backgroundColor = 'red';
point.style.height = '100px';
point.innerText = 'new text';
point.classList.add('tatata');


//
let listOfTargetElements = document.getElementsByClassName('target');
let div = listOfTargetElements[0];
let p = listOfTargetElements[1];

// OR
// iterate all target elements

for (const element of listOfTargetElements) {
    console.log(element);
    element.style.width = '200px';
    element.style.height = '200px';
    element.style.marginBottom = '10px';
    element.style.backgroundColor = 'red';
}
//

let createdH1 = document.createElement('h1');
createdH1.innerText = 'this is created by js element';

//add to body
document.body.appendChild(createdH1);

// add/ move createdH1 element to div id= countainer
// let container = document.getElementById('container');
// container.appendChild(createdH1);

//если мы хотим сделать дубль нашего элемента,то надо...
let cloneNode = createdH1.cloneNode(true);
let container = document.getElementById('container');
container.appendChild(cloneNode);


//как создавать много блоков?
for (let i = 0; i < 10; i++) {
    //create element
    let htmlDivElement = document.createElement('div');
    // fill it
    htmlDivElement.style.width = '200px';
    htmlDivElement.style.height = '200px';
    htmlDivElement.style.backgroundColor = 'silver';
    htmlDivElement.innerText = '=============';
    // add it to another element
    document.body.appendChild(htmlDivElement);

}

//Для чего это надо?
// Для отображения информации

// как вытяшивать из массивов информацию и передавать ее далее?
let users = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true }
];

// for (let i = 0; i < users.length; i++) {
// 	let div = document.createElement('div');
// 	div.innerText = `${users[i].name} ${users[i].age} ${users[i].status}`;
// 	document.body.appendChild(div);
// }
// Тоже самое но через for of

// for (const user of users) {
// 	let div = document.createElement('div');
// 	div.innerText = `${user.name} ${user.age} ${user.status}`;
// 	document.body.appendChild(div);
// }


// А что если я хочу для каждого свойства свой блок?

for (const user of users) {
    console.log('asjgdasjg');
    let outerDIV = document.createElement('div');

    for (const userKey in user) {
        let propertyValueDIV = document.createElement('div');
        propertyValueDIV.innerText = `${user[userKey]}`;
        propertyValueDIV.classList.add(userKey);
        outerDIV.appendChild(propertyValueDIV);
    }
    document.body.appendChild(outerDIV);
}