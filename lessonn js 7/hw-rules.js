// // До лекції від 27.02


// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
function makeContent() {
    // Створюю меню-оглавление
    let wrapContent = document.getElementById('wrap');
    wrapContent.style.position = 'relative';

    let menu = document.createElement('ul');
    menu.style.position = 'absolute';
    menu.style.top = '0px';
    menu.style.right = '10px';

    wrapContent.appendChild(menu);

    // Витягуєм коллекцію за тегами h2
    let h2 = document.getElementsByTagName('h2');

    // Знаходимо, витягуємо текст та створюємо а-шки в середині меню
    for (let i = 0; i < h2.length; i++) {

        // назва якорей
        let anker = 'rule' + i

        // додаю заголовкам айдішки
        h2[i].setAttribute('id', anker)

        // створюю а-шки та додаю якоря
        let a = document.createElement('a');
        a.style.display = 'block';
        a.innerText = h2[i].innerText;
        a.href = '#' + anker;

        menu.appendChild(a);
    }
}
// makeContent();

//================================================
// -- взять массив пользователей
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// Данные выводить в документ

let usersWithAddress = [
    { id: 1, name: 'vasya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
    { id: 2, name: 'petya', age: 30, status: true, address: { city: 'Kyiv', street: 'Shevchenko', number: 1 } },
    { id: 3, name: 'kolya', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } },
    { id: 4, name: 'olya', age: 28, status: false, address: { city: 'Ternopil', street: 'Shevchenko', number: 90 } },
    { id: 5, name: 'max', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 115 } },
    { id: 6, name: 'anya', age: 31, status: false, address: { city: 'Kyiv', street: 'Shevchenko', number: 2 } },
    { id: 7, name: 'oleg', age: 28, status: false, address: { city: 'Ternopil', street: 'Shevchenko', number: 22 } },
    { id: 8, name: 'andrey', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 43 } },
    { id: 9, name: 'masha', age: 30, status: true, address: { city: 'Kyiv', street: 'Shevchenko', number: 12 } },
    { id: 10, name: 'olya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
    { id: 11, name: 'max', age: 31, status: true, address: { city: 'Ternopil', street: 'Shevchenko', number: 121 } }
];

// Створюю оболочку для чекбоксів                  
let divWithCheckboxes = document.createElement('div');
divWithCheckboxes.style.display = 'flex';
divWithCheckboxes.style.flexDirection = 'column';
document.body.appendChild(divWithCheckboxes);

// Checkbox n1
let checkBox = document.createElement('input');
checkBox.setAttribute('type', 'checkbox');

let spanDescribesCheckbox = document.createElement('span');
spanDescribesCheckbox.innerText = 'Фільтр користувачів за статусом false';

divWithCheckboxes.appendChild(checkBox);
divWithCheckboxes.appendChild(spanDescribesCheckbox);

// Checkbox n2
let checkBox2 = document.createElement('input');
checkBox2.setAttribute('type', 'checkbox');

let spanDescribesCheckbox2 = document.createElement('span');
spanDescribesCheckbox2.innerText = 'Гоород Киев';

divWithCheckboxes.appendChild(checkBox2);
divWithCheckboxes.appendChild(spanDescribesCheckbox2);

// Checkbox n3
let checkBox3 = document.createElement('input');
checkBox3.setAttribute('type', 'checkbox');

let spanDescribesCheckbox3 = document.createElement('span');
spanDescribesCheckbox3.innerText = 'Oставляет старше 29 лет включительно';

divWithCheckboxes.appendChild(checkBox3);
divWithCheckboxes.appendChild(spanDescribesCheckbox3);

// Button для общего отфильтрования
let filtBt = document.createElement('button');
filtBt.innerText = 'Filter!';
divWithCheckboxes.appendChild(filtBt);

// Місце для виведення данних
let finDiv = document.createElement('div');
document.body.appendChild(finDiv);

// Додаю подію на клік
filtBt.onclick = () => {
        let finArr = JSON.parse(JSON.stringify(usersWithAddress));

        // 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
        if (checkBox.checked) {
            finArr = finArr.filter(value => !value.status);
        }

        // 2й - оставляет тех у кого город киев
        if (checkBox2.checked) {
            finArr = finArr.filter(value => value.address.city === 'Kyiv');
        }

        //3й - оставляет старше 29 лет включительно
        if (checkBox3.checked) {
            finArr = finArr.filter(value => value.age >= 29);
        }


        finDiv.innerText = '';
        finDiv.innerText = JSON.stringify(finArr);


    }
    // ==============================================



// Ще не виконав
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)




// let test = document.getElementById('wrap');
// i = 0

// function getAllChild(father) {
//     // Buttons
//     if (document.getElementById('buttonBack') === null) {
//         let buttonBack = document.createElement('button');
//         buttonBack.id = 'buttonBack';
//         buttonBack.innerText = 'Back';
//         document.body.appendChild(buttonBack);

//         let buttonNext = document.createElement('button');
//         buttonNext.id = 'buttonNext';
//         buttonNext.innerText = 'Next';
//         document.body.appendChild(buttonNext);
//     }

//     // Body
//     buttonNext.addEventListener('click', function() {
//         if (father.children.length > 0) {
//             getAllChild(father.children[i + 1]);
//             i++

//         } else {
//             console.log(father.children[0]);
//         }
//     })
// }


// getAllChild(test);


let test = document.getElementById('wrap');
let i = 0;

function getAllChild(father) {
    // Buttons
    if (document.getElementById('buttonBack') === null) {
        let buttonBack = document.createElement('button');
        buttonBack.id = 'buttonBack';
        buttonBack.innerText = 'Back';
        document.body.appendChild(buttonBack);

        let buttonNext = document.createElement('button');
        buttonNext.id = 'buttonNext';
        buttonNext.innerText = 'Next';
        document.body.appendChild(buttonNext);
    }

    // Body

    buttonNext.onclick = () => {


    }


}


// getAllChild(test);








// getAllChild('wrap');
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//====================================

// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
// let allWords = document.getElementsByTagName('body');
// console.log(allWords.childElementCount);

// function getAllWords(collection) {
//     if (collection.childElementCount !== 'undefined') {
//         for (const i of collection) {
//             getAllWords(i)
//         }
//     } else {
//         console.log(collection);
//     }
// }
// getAllWords(allWords);



// // for (const i of allWords) {
// //     console.log(i);
// //     i.onmouseover = function() {
// //         i.style.color = 'red';
// //     }
// // }