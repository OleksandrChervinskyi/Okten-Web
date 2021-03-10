// // До лекції від 27.02

// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let button = document.getElementById('bt');
button.onclick = function() {
    let elText = document.getElementById('text');
    elText.innerText = '';
}

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let buttonHidenHimself = document.getElementById('butself');
buttonHidenHimself.onclick = function() {
    buttonHidenHimself.remove();
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let btConfirm = document.getElementById('bt_confirm');
btConfirm.onclick = function() {
    let ageInput = document.getElementById('age_input');
    if (+ageInput.value > 18) {
        alert('Your age correctly')
    } else if (ageInput.value == '') {
        alert('Enter your age!');
    } else {
        alert('Your age too low');
    }
}

// - Создайте меню, которое раскрывается/сворачивается при клике
let btMenu = document.getElementById('bt_menu');
let menu = document.getElementById('menu');

btMenu.addEventListener('click', function() {
    if (menu.style.display !== 'none') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }

})

// - Создать список комментариев , пример объекта коментария - 
let coments = [{ title: 'lorem', body: 'lorem ipasdfsum dasdolo sit ameti' }, { title: 'lorem2', body: 'lorem ipsum dolo sit am43eti' }, { title: 'lorem3', body: 'lorem ipsum dosfgflo sit amaseti' }, { title: 'lore4', body: 'lorem ipsum dolo sit ameti' }];

// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
let div = document.createElement('div');


coments.forEach(value => {
    let p = document.createElement('p');
    let bt = document.createElement('button');
    bt.id = 'bt_hide';
    bt.innerText = 'Hide body!';
    p.innerText = `${value.title} - ${value.body}  `;

    bt.addEventListener('click', function() {
        if (p.innerText !== value.title) {
            p.innerText = value.title;
        } else {
            p.innerText = `${value.title} - ${value.body}  `;
        }
    })

    div.appendChild(p);
    div.appendChild(bt);
})
document.body.appendChild(div);


// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let twoFormBt = document.getElementById('two_form_bt');
twoFormBt.addEventListener('click', function() {
    console.log(document.forms);
})


// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.
let place = document.getElementById('place_for_table');

function createTable(numberOfLine, numberCellInLine, fatherElement) {
    let table = document.createElement('table');
    for (let i = 0; i < numberOfLine; i++) {
        let tr = document.createElement('tr');
        for (let n = 0; n < numberCellInLine; n++) {
            let td = document.createElement('td');
            td.style.border = '1px solid green';
            td.innerText = 'Text text';
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    fatherElement.appendChild(table);
}
// createTable(4, 6, place);


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
function createInputs(numberOfLine, countOfCell, textIntoInputs) {
    let input
}

// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.


// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку


// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку



// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

// -- взять массив пользователей
// let usersWithAddress = [
//                 {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//                 {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//                 {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//                 {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//                 {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//                 {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//                 {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//                 {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//                 {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
//             ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ



// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне


// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан