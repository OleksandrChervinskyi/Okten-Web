// До лекції від 02.03

// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
// let textarea = document.getElementById('text');

// textarea.value = localStorage.getItem('textarea');

// // catch event
// textarea.oninput = (e) => {
//     localStorage.setItem('textarea', e.target.value);
// }

// // clean
// setTimeout(function() {
//     localStorage.clear();
// }, 5000);

// //==============================================================
// // - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// // Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// // Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// // Сделайте ваш скрипт как можно более универсальным.

// // --- v1----
// // // P.S. Чи я праильно розумію, що такий варіант буде сильно навантажувати сайт? І це правильний варіант вирішення чи краще так не робити?

// // let allInputVaue = document.getElementsByTagName('input');
// // let allTextArea = document.getElementsByTagName('textarea');
// // let allCheckBoxes = getAllTypeFromInput(allInputVaue, 'checkbox');
// // let allRadioBoxes = getAllTypeFromInput(allInputVaue, 'radio');
// // let allSelecter = document.getElementsByTagName('option');



// // function getAllTypeFromInput(arrWithInputs, type) {
// //     let finishArr = []
// //     for (i = 0; i < arrWithInputs.length; i++) {
// //         if (arrWithInputs[i].type === type) {
// //             finishArr.push(arrWithInputs[i]);
// //         }
// //     };
// //     return finishArr
// // }


// // //==inputs===
// // // save info in LocalStorage
// // let inpInterval = setInterval(() => {
// //     for (n = 0; n < allInputVaue.length; n++) {
// //         localStorage.setItem(`inp${n}`, allInputVaue[n].value);
// //     }
// // }, 1000);
// // // display 
// // for (i = 0; i < allInputVaue.length; i++) {
// //     allInputVaue[i].value = localStorage.getItem(`inp${i}`);
// // }

// // //==checkbox===
// // // save info in LocalStorage
// // let checkInterval = setInterval(() => {
// //     for (n = 0; n < allCheckBoxes.length; n++) {
// //         localStorage.setItem(`checkboxStatus${n}`, allCheckBoxes[n].checked);
// //     }
// // }, 1000);
// // // display 
// // for (i = 0; i < allCheckBoxes.length; i++) {
// //     let check = JSON.parse(localStorage.getItem(`checkboxStatus${i}`)); // Роблю стрінгу через парс, оскільки по-іншому checkbox не хоче змінювати свій checked
// //     allCheckBoxes[i].checked = check;
// // }

// // //==radio===
// // // save info in LocalStorage
// // let radioInterval = setInterval(() => {
// //     for (n = 0; n < allRadioBoxes.length; n++) {
// //         localStorage.setItem(`RadioBox${n}`, allRadioBoxes[n].checked);
// //     }
// // }, 1000);
// // // display 
// // for (i = 0; i < allRadioBoxes.length; i++) {
// //     let check = JSON.parse(localStorage.getItem(`RadioBox${i}`)); // Роблю стрінгу через парс, оскільки по-іншому radio не хоче змінювати свій стан
// //     allRadioBoxes[i].checked = check;
// // }

// // //==selector===
// // // save info in LocalStorage
// // let selectorInterval = setInterval(() => {
// //     for (n = 0; n < allSelecter.length; n++) {
// //         localStorage.setItem(`Selecter${n}`, allSelecter[n].selected);
// //     }
// // }, 1000);
// // // display 
// // for (i = 0; i < allSelecter.length; i++) {
// //     let select = JSON.parse(localStorage.getItem(`Selecter${i}`)); // Роблю стрінгу через парс, оскільки по-іншому selecter не хоче змінювати свій selected
// //     allSelecter[i].selected = select;
// // }


// // //==textarea===
// // let areaInterval = setInterval(() => {
// //     for (n = 0; n < allTextArea.length; n++) {
// //         localStorage.setItem(`textarea${n}`, allTextArea[n].value);
// //     }
// // }, 1000);
// // // display 
// // for (i = 0; i < allTextArea.length; i++) {
// //     allTextArea[i].value = localStorage.getItem(`textarea${i}`);
// // }

// // // clear All storage
// // setTimeout(() => {
// //     clearInterval(inpInterval);
// //     clearInterval(checkInterval);
// //     clearInterval(radioInterval);
// //     clearInterval(selectorInterval);
// //     // clearInterval(areaInterval);
// //     // localStorage.clear();
// // }, 30000);

// // --- v2-----
// let form = document.getElementById('myform');


// getSavedInfo(form);

// function saveInfo(f) {
//     setLocalStorage(f);
// }

// function setLocalStorage(itemsFromForm) {
//     for (let item = 0; item < itemsFromForm.children.length; item++) {
//         if (itemsFromForm[item].type === 'checkbox' || itemsFromForm[item].type === 'radio') {
//             localStorage.setItem(itemsFromForm[item].type + item, itemsFromForm[item].checked);
//         } else if (itemsFromForm[item].type === 'select-one') {
//             // Не розібрався з селекторами. Занчення змінюється
//             // localStorage.setItem(itemsFromForm[item].type + item, .......);
//         } else {
//             localStorage.setItem(itemsFromForm[item].type + item, itemsFromForm[item].value);
//         }
//     }
// }

// function getSavedInfo(tag) {
//     for (i = 0; i < localStorage.length; i++) {
//         if (tag[i].type === 'checkbox' || tag[i].type === 'radio') {
//             pars = JSON.parse(localStorage.getItem(tag.children[i].type + i)); // працює лише після Parse();
//             tag[i].checked = pars;
//         } else if (tag[i].type === 'select-one') {
//             // Не розібрався з селекторами. Значення змінюється
//             // .......... = localStorage.getItem(tag.children[i].type + i);
//         } else {
//             tag[i].value = localStorage.getItem(tag.children[i].type + i);
//         }

//     }
// }

// //======================================================================

// // -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// // Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// // Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

let textarea3 = document.getElementById('textarea3');
let btSave = document.getElementById('savehistorybt');
let btNext = document.getElementById('history_next');
let btPrevious = document.getElementById('history_previous');
let btClear = document.getElementById('btclear');

// //---v2----
let index

function findIndex() {
    for (const key in localStorage) {
        if (localStorage.getItem(key) === textarea3.value) {
            index = key;
        }
    }
    return index
}

//Save
btSave.onclick = function() {
    localStorage.setItem('index', 0) // значення індекса за замовчуванням, щоб при лічільнику id індекса не впливав на інші
    localStorage.setItem(localStorage.length + 1, textarea3.value);

}

//Back
btPrevious.onclick = function() {
    let indexF = findIndex()
    if (localStorage.getItem(+indexF - 1) !== null) {
        textarea3.value = localStorage.getItem(+indexF - 1);
        localStorage.setItem('index', indexF);
    }
    console.log(indexF);

}

// Next
btNext.onclick = function() {
    let indexN = findIndex()
    if (localStorage.getItem(+indexN + 1) !== null) {
        textarea3.value = localStorage.getItem(+indexN + 1);
        localStorage.setItem('index', indexN);
    }
}

//Clear
btClear.onclick = function() {
    localStorage.clear();
}


//---v1---- (працює некоректно)
// create counter and set default value = 0 in localStorage
// if (!localStorage.getItem('counter')) {
//     localStorage.setItem('counter', 0);
//     counter = localStorage.getItem('counter');
// } else {
//     counter = localStorage.get Item('counter');
// }

// // set text area value from localStorage
// textarea3.value = localStorage.getItem(`txtar${counter - 1}`);

// // button save last value
// btSave.addEventListener('click', function() {
//     localStorage.setItem(`txtar${counter}`, textarea3.value);
//     counter++;
//     localStorage.setItem('counter', counter);

// });

// //button previous item from history
// let r = 1;
// let d = 1;
// btPrevious.onclick = function() {
//     textarea3.value = localStorage.getItem(`txtar${counter - r}`);
//     r++
// };
// //button Next iten from history
// btNext.onclick = function() {
//     textarea3.value = localStorage.getItem(`txtar${counter - r + d}`);
//     d++
// };

// //  Clear All
// btClear.onclick = function() {
//     localStorage.clear();
// }

//===========================================================================
// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта4

let form4 = document.getElementById('form4');
let name = document.getElementById('name');
let number = document.getElementById('number');
let email = document.getElementById('email');
let firm = document.getElementById('firm');
let depart = document.getElementById('depart');
let date = document.getElementById('date');

let btSaveCont = document.getElementById('save_contact');
let btDelCont = document.getElementById('del_contact');
let btEdit = document.getElementById('edit_contact');
let btDelAll = document.getElementById('del_all');

let select = document.getElementById('contacts_list');


// Show all saved contacts
for (const key in localStorage) {
    if (localStorage.getItem(key) !== null) {
        let option = document.createElement('option');
        option.innerText = JSON.parse(localStorage.getItem(key)).name;
        select.appendChild(option);
        console.log(typeof(localStorage.getItem(key)));
    }
}

class Users {
    constructor(name, number, email, firm, depart, date) {
        this.name = name;
        this.number = number;
        this.email = email;
        this.firm = firm;
        this.depart = depart;
        this.date = date;
    }
}

function getObjectFromLocalStorageWithName(name) {
    for (const key in localStorage) {
        let obj = JSON.parse(localStorage.getItem(key));
        if (obj !== null && obj.name === name) {
            return obj
        }
    }
}

function getKey(name) {
    for (const key in localStorage) {
        let obj = JSON.parse(localStorage.getItem(key));
        if (obj !== null && obj.name === name) {
            return key
        }
    }
}


// Save 
btSaveCont.onclick = function() {
    if (!getKey(name.value)) {
        let user = new Users(name.value, number.value, email.value, firm.value, depart.value, date.value);
        localStorage.setItem(localStorage.length + 1, JSON.stringify(user));
    } else {
        // resave
        let newUser = new Users(name.value, number.value, email.value, firm.value, depart.value, date.value);
        localStorage.setItem(getKey(name.value), JSON.stringify(newUser));
    }
};

// Edit
btEdit.onclick = function() {
    for (const option of select) {
        if (option.selected) {
            for (const key in localStorage) {
                if (localStorage.getItem(key) !== null) {
                    let obj = JSON.parse(localStorage.getItem(key));
                    let objname = obj.name
                    if (option.innerText === objname) {
                        name.value = obj.name;
                        number.value = obj.number;
                        email.value = obj.email;
                        firm.value = obj.firm;
                        depart.value = obj.depart;
                        date.value = obj.date;
                    }
                }
            }
        }
    }
}

// Delete
btDelCont.onclick = function() {
    for (const option of select) {
        if (option.selected) {
            for (const key in localStorage) {
                if (localStorage.getItem(key) !== null) {
                    let obj = JSON.parse(localStorage.getItem(key));
                    let objname = obj.name
                    if (option.innerText === objname) {
                        localStorage.removeItem(key);
                    }
                }
            }
        }
    }
}

//Delete all contacts
btDelAll.onclick = function() {
    localStorage.clear();
}