// До лекції від 02.03

// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
let textarea = document.getElementById('text');

textarea.value = localStorage.getItem('textarea');

// catch event
textarea.oninput = (e) => {
    localStorage.setItem('textarea', e.target.value);
}

// clean
setTimeout(function() {
    localStorage.clear();
}, 5000);

//========================================

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.


// P.S. Чи я праильно розумію, що такий варіант буде сильно навантажувати сайт? І це правильний варіант вирішення чи краще так не робити?

let allInputVaue = document.getElementsByTagName('input');
let allTextArea = document.getElementsByTagName('textarea');
let allCheckBoxes = getAllTypeFromInput(allInputVaue, 'checkbox');
let allRadioBoxes = getAllTypeFromInput(allInputVaue, 'radio');
let allSelecter = document.getElementsByTagName('option');



function getAllTypeFromInput(arrWithInputs, type) {
    let finishArr = []
    for (i = 0; i < arrWithInputs.length; i++) {
        if (arrWithInputs[i].type === type) {
            finishArr.push(arrWithInputs[i]);
        }
    };
    return finishArr
}


//==inputs===
// save info in LocalStorage
let inpInterval = setInterval(() => {
    for (n = 0; n < allInputVaue.length; n++) {
        localStorage.setItem(`inp${n}`, allInputVaue[n].value);
    }
}, 1000);
// display 
for (i = 0; i < allInputVaue.length; i++) {
    allInputVaue[i].value = localStorage.getItem(`inp${i}`);
}

//==checkbox===
// save info in LocalStorage
let checkInterval = setInterval(() => {
    for (n = 0; n < allCheckBoxes.length; n++) {
        localStorage.setItem(`checkboxStatus${n}`, allCheckBoxes[n].checked);
    }
}, 1000);
// display 
for (i = 0; i < allCheckBoxes.length; i++) {
    let check = JSON.parse(localStorage.getItem(`checkboxStatus${i}`)); // Роблю стрінгу через парс, оскільки по-іншому checkbox не хоче змінювати свій checked
    allCheckBoxes[i].checked = check;
}

//==radio===
// save info in LocalStorage
let radioInterval = setInterval(() => {
    for (n = 0; n < allRadioBoxes.length; n++) {
        localStorage.setItem(`RadioBox${n}`, allRadioBoxes[n].checked);
    }
}, 1000);
// display 
for (i = 0; i < allRadioBoxes.length; i++) {
    let check = JSON.parse(localStorage.getItem(`RadioBox${i}`)); // Роблю стрінгу через парс, оскільки по-іншому radio не хоче змінювати свій стан
    allRadioBoxes[i].checked = check;
}

//==selector===
// save info in LocalStorage
let selectorInterval = setInterval(() => {
    for (n = 0; n < allSelecter.length; n++) {
        localStorage.setItem(`Selecter${n}`, allSelecter[n].selected);
    }
}, 1000);
// display 
for (i = 0; i < allSelecter.length; i++) {
    let select = JSON.parse(localStorage.getItem(`Selecter${i}`)); // Роблю стрінгу через парс, оскільки по-іншому selecter не хоче змінювати свій selected
    allSelecter[i].selected = select;
}


//==textarea===
let areaInterval = setInterval(() => {
    for (n = 0; n < allTextArea.length; n++) {
        localStorage.setItem(`textarea${n}`, allTextArea[n].value);
    }
}, 1000);
// display 
for (i = 0; i < allTextArea.length; i++) {
    allTextArea[i].value = localStorage.getItem(`textarea${i}`);
}

// clear All storage
setTimeout(() => {
    clearInterval(inpInterval);
    clearInterval(checkInterval);
    clearInterval(radioInterval);
    clearInterval(selectorInterval);
    clearInterval(areaInterval);
    localStorage.clear();
}, 10000);
//======================================================================



// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта