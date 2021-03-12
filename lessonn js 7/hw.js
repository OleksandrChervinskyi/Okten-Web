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
    if (+ageInput.value >= 18) {
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
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let place = document.getElementById('place_for_table');

// Створюю інпути та кнопку
let input1 = document.createElement('input');
input1.type = 'number';
place.appendChild(input1);

let input2 = document.createElement('input');
input2.type = 'number';
place.appendChild(input2);

let input3 = document.createElement('input');
input3.type = 'text';
place.appendChild(input3);

let btInput = document.createElement('button');
btInput.innerText = 'Press for colection information'
place.appendChild(btInput);

// Привязую подію виклику функції createTable при натисканні з даними з інпутів

btInput.addEventListener('click', function() {
    // Спочатку перевіряю чи вже існує така таблиця, якщо так - видаляю стару та створюю нову
    let checkTable = document.getElementById('table_place');
    if (!checkTable) {
        createTable(input1.value, input2.value, place, input3.value);
        input1.value = null;
        input2.value = null;
        input3.value = '';

    } else {
        checkTable.remove();
        createTable(input1.value, input2.value, place, input3.value);
        input1.value = null;
        input2.value = null;
        input3.value = '';
    }
})

// Функція створення таблиці
function createTable(numberOfLine, numberCellInLine, fatherElement, innerText) {
    let table = document.createElement('table');
    table.id = 'table_place';
    for (let i = 0; i < numberOfLine; i++) {
        let tr = document.createElement('tr');
        for (let n = 0; n < numberCellInLine; n++) {
            let td = document.createElement('td');
            td.style.border = '1px solid green';
            td.innerText = innerText;
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
    fatherElement.appendChild(table);
}
//============================================
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
let caruselWrap = document.getElementById('carusel');

// Архів картинок
let pictures = [
    { id: 1, name: 'photo1', url: '1.jpeg' },
    { id: 2, name: 'photo2', url: '2.jpeg' },
    { id: 3, name: 'photo3', url: '3.jpeg' },
    // { id: 4, name: 'photo4', url: '3.jpeg' },
    // { id: 5, name: 'photo5', url: '3.jpeg' },


];

// Створюю кнопки
let btLeft = document.createElement('button');
btLeft.innerText = 'previous';
caruselWrap.appendChild(btLeft);

let btRight = document.createElement('button');
btRight.innerText = 'next';
caruselWrap.appendChild(btRight);

// Створюю картинки
let index = 0;
let img = document.createElement('img');
img.src = pictures[index].url;
img.classList = 'pictures';
img.style.width = '200px';
img.style.height = '200px';
img.style.marginRight = '20px';

caruselWrap.appendChild(img);



// Onclick Button Next
btRight.onclick = () => {
    if (index < pictures.length - 1) {
        index++;
    } else {
        index = 0;
    }
    img.src = pictures[index].url;
};

// Onclick Button Back
btLeft.onclick = () => {
    if (index > 0) {
        index--;
    } else {
        index = pictures.length - 1;
    }
    img.src = pictures[index].url;
};

//================================================

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
let matArr = ['blat', 'syka'];

let swearsWrap = document.getElementById('swears');
let inp = document.createElement('input');
inp.type = 'text';

let matBt = document.createElement('button');
matBt.innerText = 'Check your text?'

matBt.onclick = function() {
    matArr.forEach(value => {
        if (inp.value.includes(value)) {
            alert('warning! warning!')
        }
    })
}

swearsWrap.appendChild(inp);
swearsWrap.appendChild(matBt);
//===================================