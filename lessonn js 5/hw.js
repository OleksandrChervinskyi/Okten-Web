// // До лекції від 23.02

// ========================================================
// -Створити функцію конструктор для об 'єкту який описує теги
// Властивості:
//     назва тегу -
//     опис його дій -
//     масив з атрибутами(2 - 3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити:
//     назву атрибуту -
//     опис дії атрибуту
// інформацію брати з htmlbook.ru

// Таким чином описати теги
//     a -
//     div -
//     h1 -
//     span -
//     input -
//     form -
//     option -
//     select
// Приклад результату {
//     titleOfTag: 'area',
//     action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//         { titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш' },
//         { /*some props and values*/ },
//         { /*...*/ },
//         { /*...*/ },
//     ]

// } === === === === === =

// function Tag(titleOfTag, action, attrs) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }

// let a = new Tag('a', 'вляется одним из важных элементов HTML и предназначен для создания ссылок.', [{ name: 'accesskey', action: 'Активация ссылки с помощью комбинации клавиш.' }, { name: 'coords', action: 'Устанавливает координаты активной области.' }]);

// let div = new Tag('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', [{ name: 'align', action: 'Задает выравнивание содержимого тега <div>.' }, { name: 'title', action: 'Добавляет всплывающую подсказку к содержимому.' }]);

// let h1 = new Tag('h1', 'HTML предлагает шесть заголовков разного уровня', [{ name: 'accesskey', action: 'Активация ссылки с помощью комбинации клавиш.' }, { name: 'align', action: 'Определяет выравнивание заголовка.' }]);

// let span = new Tag('span', 'предназначен для определения строчных элементов документа');

// let input = new Tag('input', 'является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.', [{ name: 'alt', action: 'Альтернативный текст для кнопки с изображением.' }, { name: 'border', action: 'Толщина рамки вокруг изображения.' }]);

// let form = new Tag('form', ' устанавливает форму на веб-странице.', [{ name: 'method', action: 'Метод протокола HTTP.' }, { name: 'name', action: 'Имя формы.' }]);

// console.log(a, div, h1, span, input, form);
// ===================================================

// ===================================================
// -Створити класс для об 'єкту який описує теги
// Властивості
//     -
//     назва тегу -
//     опис його дій -
//     масив з атрибутами(2 - 3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
//     -
//     назву атрибуту -
//     опис дії атрибуту
// інформацію брати з htmlbook.ru

// Таким чином описати теги
//     -
//     a -
//     div -
//     h1 -
//     span -
//     input -
//     form -
//     option -
//     select
// Приклад результату {
//     titleOfTag: 'area',
//     action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//         { titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш' },
//         { /*some props and values*/ },
//         { /*...*/ },
//         { /*...*/ },
//     ]


class Tag {
    constructor(titleOfTag, action, attrs = { name: 'template', action: 'template' }) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = attrs;
    }

    addAttrs(name, action) {
        this.attrs.push({ name: name, action: action });
    }

}

let a = new Tag('a', 'вляется одним из важных элементов HTML и предназначен для создания ссылок.', [{ name: 'align', action: 'Задает выравнивание содержимого тега' }, { name: 'title', action: 'Добавляет всплывающую подсказку к содержимому.' }]);
a.addAttrs('hello', 'discribe word hello');
a.addAttrs('hello', 'discribe word hello');



let div = new Tag('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', [{ name: 'align', action: 'Задает выравнивание содержимого тега <div>.' }, { name: 'title', action: 'Добавляет всплывающую подсказку к содержимому.' }]);

let h1 = new Tag('h1', 'HTML предлагает шесть заголовков разного уровня', [{ name: 'accesskey', action: 'Активация ссылки с помощью комбинации клавиш.' }, { name: 'align', action: 'Определяет выравнивание заголовка.' }]);

let span = new Tag('span', 'предназначен для определения строчных элементов документа');

let input = new Tag('input', 'является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.', [{ name: 'alt', action: 'Альтернативный текст для кнопки с изображением.' }, { name: 'border', action: 'Толщина рамки вокруг изображения.' }]);

let form = new Tag('form', ' устанавливает форму на веб-странице.', [{ name: 'method', action: 'Метод протокола HTTP.' }, { name: 'name', action: 'Имя формы.' }]);

// console.log(a, div, h1, span, input, form);
// ============================================


// ===================================================
//     CLASS
// -Створити функцію конструктор яка дозволяє створювати об 'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.додати в об 'єкт функції:
//     --drive() - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//     --info() - яка виводить всю інформацію про автомобіль
//     --increaseMaxSpeed(newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     --changeYear(newValue) - змінює рік випуску на значення newValue
//     --addDriver(driver) - приймає об 'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'
// єкт car
function newCar(model, producer, yearOFIssue, topSpeed, volume) {
    this.model = model;
    this.producer = producer;
    this.yearOFIssue = yearOFIssue;
    this.topSpeed = topSpeed;
    this.volume = volume;

    this.drive = function() {
        console.log(`Їдемо зі швидкістю ${this.topSpeed} на годину`);
    }

    this.info = function() {
        if (this.driver) {
            console.log(`Model - ${this.model},\nProduser - ${this.producer}\nYear - ${this.yearOFIssue}\nTop speed - ${this.topSpeed} км/год\nVolume - ${this.volume}\nDriver - ${this.driver}`);
        } else {
            console.log(`Model - ${this.model},\nProduser - ${this.producer}\nYear - ${this.yearOFIssue}\nTop speed - ${this.topSpeed} км/год\nVolume - ${this.volume}`);
        }
    }

    this.increaseMaxSpeed = function(newSpeed = this.topSpeed) {
        this.topSpeed += newSpeed;
    }

    this.changeYear = function(newValue = this.yearOFIssue) {
        this.yearOFIssue = newValue
    }
    this.addDriver = function(...driver) {
        this.driver = driver;
    }
}

let zaz = new newCar('zaz', 'USA', '2019', 200, '2.5');
// zaz.drive();
// zaz.increaseMaxSpeed(-20);
// zaz.changeYear('1992p');
// zaz.addDriver('Max', '1998', 'Categories - B');
// zaz.info();


// ============================================================

// ============================================================
//  -Створити клас який дозволяє створювати об 'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.додати в об 'єкт функції:
//     --drive() - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//     --info() - яка виводить всю інформацію про автомобіль
//     --increaseMaxSpeed(newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     --changeYear(newValue) - змінює рік випуску на значення newValue
//     --addDriver(driver) - приймає об 'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

class Car {
    constructor(model, producer, yearOFIssue, topSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.yearOFIssue = yearOFIssue;
        this.topSpeed = topSpeed;
        this.volume = volume;
    }

    drive() {
        console.log(`Їдемо зі швидкістю ${this.topSpeed} на годину`);
    }
    info() {
        if (this.driver) {
            console.log(`Model - ${this.model},\nProduser - ${this.producer}\nYear - ${this.yearOFIssue}\nTop speed - ${this.topSpeed} км/год\nVolume - ${this.volume}\nDriver - ${this.driver}`);
        } else {
            console.log(`Model - ${this.model},\nProduser - ${this.producer}\nYear - ${this.yearOFIssue}\nTop speed - ${this.topSpeed} км/год\nVolume - ${this.volume}`);
        }
    }
    increaseMaxSpeed(newSpeed = this.topSpeed) {
        this.topSpeed += newSpeed;
    }
    changeYear(newValue = this.yearOFIssue) {
        this.yearOFIssue = newValue
    }
    addDriver(...driver) {
        this.driver = driver;
    }
}

let volvo = new Car('volovo', 'Швеція', '2019', 200, '2.5');
// volvo.drive();
// volvo.increaseMaxSpeed(-20);
// volvo.changeYear('1992p');
// volvo.addDriver('Max', '1998', 'Categories - B');
// volvo.info();
//===========================================================


//===========================================================
//  -створити класс попелюшка з полями ім 'я, вік, розмір ноги
//     --Створити 10 попелюшок, покласти їх в масив
//     --Сторити об 'єкт класу "принц" за допомоги класу який має поля ім'
// я, вік, туфелька яку він знайшов.
//     --за допоиоги циклу знайти яка попелюшка повинна бути з принцом 

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, findedShoesSize) {
        this.name = name;
        this.age = age;
        this.findedShoesSize = findedShoesSize;
    }
}

let Tanka = new Cinderella('Tanya', 18, 38);
let Ann = new Cinderella('Ann', 19, 39);
let Katya = new Cinderella('Katya', 20, 37);
let Vika = new Cinderella('Vika', 21, 40);
let Nastya = new Cinderella('Nastya', 22, 41);
let Ola = new Cinderella('Ola', 23, 35);
let Yula = new Cinderella('Yula', 24, 37);
let Margo = new Cinderella('Margo', 25, 40);
let Evdikiya = new Cinderella('Evdikiya', 43, 32);

let Povlik = new Prince('Pavlik', 17, 37);

let allCandidate = [Tanka, Ann, Katya, Vika, Nastya, Ola, Yula, Margo, Evdikiya];

// for (const women of allCandidate) {
//     if (women.footSize === Povlik.findedShoesSize) {
//         console.log(`This is destiny - ${women.name} and ${Povlik.name}`);
//     }
// }
//============================================================

//============================================================
//  -створити функцію конструктор попелюшка з полями ім 'я, вік, розмір ноги
//     --Створити 10 попелюшок, покласти їх в масив
//     --Сторити об 'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
//     --функція повинна приймати масив попелюшок, та шукає ту котра йому підходить 

function CinderellaNew(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;

}

function PrinceNew(name, age, findedShoesSize) {
    this.name = name;
    this.age = age;
    this.findedShoesSize = findedShoesSize;

}

function findCinderella(arrayOfCandidate, Prince) {
    let result = '';
    for (const women of arrayOfCandidate) {
        if (women.footSize === Prince.findedShoesSize) {
            result += `This is destiny - ${women.name} and ${Povlik.name}\n`;
        }
    }
    return result;
}
let couple = findCinderella(allCandidate, Povlik);
console.log(couple);

//============================================================