// До лекції від 16.02

// -створити функцію яка виводить масив
function outputArray(arr) {

    console.log(arr);
}
// outputArray();


//     - створити функцію яка заповнює масив рандомними числами та виводить його.Для виведення використати попвередню функцію. -
function getFillArray(countOfElement = 1) {
    let arr = [];
    for (let i = 0; i < countOfElement; i++) {
        arr.push(Math.random());
    }

    outputArray(arr);
}
// getFillArray(5);


//     створити функцію яка приймає три числа та виводить та повертає найменьше. -
function getSmollestNumber(num1, num2, num3) {
    let result = Math.min(num1, num2, num3)
    console.log(result);
    return result;
}
// getSmollestNumber(11, 2.9, 2.89);


//     створити функцію яка приймає три числа та виводить та повертає найбільше. -
function getMaxNumber(num1, num2, num3) {
    let result = Math.max(num1, num2, num3)
    console.log(result);
    return result;
}
// getMaxNumber(11, 29, 2.89);


//     створити функцію яка приймає будь - яку кількість чисел, повертає найменьше, а виводить найбільше -
//     створити функцію яка виводить масив -
//     створити функцію яка повертає найбільше число з масиву -
//     створити функцію яка повертає найменьше число з масиву -
function getMaxAndMin(...nums) {
    let result = Math.max.apply(null, nums);
    console.log(result);
    return Math.min.apply(null, nums);
}
// let a = getMaxAndMin(110, 2, 3, 188);
// console.log(a);


//     створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його. -
function getSumNumbersOfArry(...numbers) {
    sum = 0
    for (const i of numbers) {
        sum = sum + i;
    };
    return sum
}
// getSumNumbersOfArry(1, 2, 3);


//     створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень. -
function getAverege(...nums) {
    let sum = 0
    for (const i of nums) {
        sum = sum + i;
    };
    let result = sum / nums.length;
    console.log(result);
    return result
}
// getAverege(1, 2, 3, 54);


//     Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об 'єктів в масиві -
//     Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них -
let a = [{ age: 25, name: 'Olex' }, , 24, 'Words', false, { age: 44, name: 'Petr', sex: 'men' }, { age: 44, sex: 'men' }];

function getCountOfObj(arrayWithObj) {
    let sumOfObj = 0;
    let sumOfKeys = 0;
    for (const i of arrayWithObj) {
        if (typeof(i) === 'object') {
            sumOfObj += 1;
            for (const keys in i) {
                sumOfKeys += 1;
            }
        }
    }
    console.log('Amount of object : ', sumOfObj);
    console.log('Amount of keys : ', sumOfKeys);
}
// getCountOfObj(a);


//     створити функцію яка скаладає значення елементів з однаковими індексами та повертає новий результуючий масив.
// Приклад
let ar = [1, 0, 2, 0, 3, 4];
let br = [2, 3, 4, 5];
// результат
//     [3, 5, 7, 9] -
function getSumSameElements(arr1, arr2) {
    let finishArr = []
    for (let i = 0; i < arr1.length; i++) {
        let result = arr1[i] + arr2[i];
        finishArr.push(result)
    }
    console.log(finishArr);
}
// getSumSameElements(ar, br);


//     ** * приймає масив та число "i", та міняє місцями об `єкт який знаходиться в індексі "i" на "i+1"
function replace(arr, i) {
    if (i > arr.length - 1) {
        console.log('Not posible index');
    } else {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }

    console.log(arr);
}
// replace(ar, 4);


// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
let numbers = [0, 0, 23, 0, 44, 0, 1, 0, 0, 1];



function getNullEnd(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 0) {
            let removed = arr.splice(i, 1);

            arr.push(+removed);

        }
    }
    console.log(arr);


}
// getNullEnd(numbers);


// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
function addBlock(type = 'div', text = 'No text') {
    let p = document.createElement(type);
    p.innerText = text;
    document.body.appendChild(p);
}
// addBlock('h1', 'helloo');


// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// Для кожної властивості створити всередені блока автомоблія свій блок
function addCars(array, elementId) {
    // find id
    let wrap = document.getElementById(elementId);
    for (const i of array) {
        // create div
        let div = document.createElement('div');
        div.classList = 'elements_of_array';
        if (typeof(i) == 'object') {
            // If is object in aray create ul
            let ul = document.createElement('ul');
            ul.classList = 'object_in_array';
            for (const key in i) {
                // create li for each elements of object
                let li = document.createElement('li');
                li.classList = 'info_about_part_of_element';
                li.innerText = `${key} - ${i[key]}`;
                ul.appendChild(li)
            }
            div.appendChild(ul)
        } else {
            div.innerText = i;
        }
        wrap.appendChild(div)
    }
}
// addCars(a, 'cars');


// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id", та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
let usersWithId = [{ id: 1, name: 'vasya', age: 31, status: false }, { id: 2, name: 'petya', age: 30, status: true }, { id: 3, name: 'kolya', age: 29, status: true }, { id: 4, name: 'olya', age: 28, status: false }, ];
let citiesWithId = [{ user_id: 3, country: 'USA', city: 'Portland' }, { user_id: 1, country: 'Ukraine', city: 'Ternopil' }, { user_id: 2, country: 'Poland', city: 'Krakow' }, { user_id: 4, country: 'USA', city: 'Miami' }, ];

function uniteTwoArray(userArr, cityArr) {
    // create userArr clone in order to don't change beginning array
    let userArrClone = JSON.parse(JSON.stringify(userArr));
    let finArr = []
    for (const user of userArrClone) {
        for (const city of cityArr) {
            if (user.id === city.user_id) {
                user.address = city;
                finArr.push(user)
            }
        }
    }
    console.log(userArr);
    console.log(finArr);
}
// uniteTwoArray(usersWithId, citiesWithId);


// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [{
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

function createBlocksWithRulesInDOM(arr) {
    let wrapHW = document.createElement('div');
    wrapHW.className = 'wrap-hw';

    for (const i of arr) {
        // create wrap
        let rule = document.createElement('div');
        rule.className = 'rule';
        // create title
        let title = document.createElement('h3');
        title.className = 'rule_title';
        title.innerText = i.title;
        // create text
        let text = document.createElement('p');
        text.className = 'rule_text';
        text.innerText = i.body;

        // add all element to each other
        rule.appendChild(title);
        rule.appendChild(text);
        wrapHW.appendChild(rule);
    }

    document.body.appendChild(wrapHW);
}
// createBlocksWithRulesInDOM(rules);


// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!

function getExactPower(N) {
    let result = Math.sqrt(N);
    if (N == 0 || N == 1) {
        console.log('No');
    } else if (Number.isInteger(result)) {
        if (result !== 2) {
            getExactPower(result);
        } else {
            console.log('Yes');
        }
    } else {
        console.log('No');
    }
}
// getExactPower(0);
// getExactPower(1);
// getExactPower(16);
// getExactPower(16.33);


// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій


function deepCopy(obj) {
    for (const key in obj) {
        if (typeof(obj[key]) === 'object') {
            deepCopy(obj[key]);
        } else {
            let result = (key, obj[key]);
            // console.log(key, obj[key]);
            console.log(result);

        }
    }
}
deepCopy({ name: 'Alex', age: 25, wife: { name: 'Tanya', age: 24, sun: { nameSun: 'Svetozar', hobby: 'violonchel' } } });

// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
let arr = [1, 3, ['Hello', 'Wordd', [9, 6, 1]],
    ['oops'], 9
];

let result = arr.flat(Infinity);
// console.log(result);