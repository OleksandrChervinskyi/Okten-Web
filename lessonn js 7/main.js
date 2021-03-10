// До лекції від 27.02

let querySelectorIdX = document.querySelector('#x'); // node -> xml html text whitespaces svg .....
let querySelectorAllIdX = document.querySelectorAll('#x'); // nodelist
console.log(querySelectorIdX);
console.log(querySelectorAllIdX);
let x = document.getElementById('x'); // htmlElement -> only html elements
console.log(x);
let targets = document.getElementsByClassName('target');
console.log(targets);

targets[0].nextElementSibling;
targets[0].previousElementSibling;
targets[0].getAttribute('class');
targets[0].setAttribute('id', 'newId');
console.log(targets[0].attributes);
console.log(targets[0].hasAttributes());
console.log(targets[0].hasAttribute('class'));
console.log(targets[0].childElementCount);
console.log(targets[0].childNodes);
console.log(targets[0].children);
console.log(targets[0].parentElement); //element
console.log(targets[0].parentNode); // node

// FORMS API
//GET FORM by name
console.log(document.forms.mainForm);
//GET INPUT by name
console.log(document.forms.mainForm.text);


// EVENTS

let mbutton = document.getElementById('main-button');
mbutton.onclick = function() {
    console.log('hello');
};

// standart override of prev onclick func
// mbutton.onclick = function () {
// 	console.log('hello2');
//
// };


// fetch 2 event on one element with one event type
mbutton.addEventListener('click', function() {
    console.log('el click 1');
});
mbutton.addEventListener('click', function() {
    console.log('el click 2');
});

mbutton.addEventListener('click', function(e) {
    console.log(e); // event obj
    console.log(this); // your element
});

// arrow func and lost of context
mbutton.addEventListener('click', (e) => {
    console.log(e); // event obj
    console.log(this); // window!!!!!!! lost of context
});






let main_input = document.getElementById('main-input');
main_input.oninput = function() {
    console.log(this.value);
};

mbutton.onclick = function(e) {
    console.log(main_input.value);
};



let usersXXX = [
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
let resolverElement = document.getElementsByClassName('resolver')[0];

function allUsersRender(users) {
    users.forEach(value => {
        let div = document.createElement('div');
        div.innerText = JSON.stringify(value);
        resolverElement.appendChild(div);

    });
}

allUsersRender(usersXXX);

let cbox = document.getElementById('cbox');
cbox.onclick = function() {
    resolverElement.innerText = '';
    if (cbox.checked) {
        allUsersRender(usersXXX.filter(value => value.status));
    } else {
        allUsersRender(usersXXX);
    }

};



// onmousedown
document.getElementById('xxx').onmousedown = function(e) {
    this.style.background = 'silver';
};
// onmouseup
document.getElementById('xxx').onmouseup = function(e) {
    this.style.background = 'red';
};
// onmousemove
document.getElementById('xxx').onmousemove = function(e) {
    // не учитывает отступы и положение фигуры
    let r = e.clientX;
    let g = e.clientY;
    let b = Math.round((r + g) / 2);
    console.log(r, g);
    this.style.background = `rgb(${r},${g},${b})`;
};


// ||
// ||
// ||
// \/


// учитывает отступы и положение фигуры
document.getElementById('xxx').onmousemove = function(e) {
    let rect = e.target.getBoundingClientRect();
    console.log(rect);
    let r = e.clientX - rect.left;
    let g = e.clientY - rect.top;
    let b = Math.round((r + g) / 2);
    console.log(r, g);
    this.style.background = `rgb(${r},${g},${b})`;
};

// onmouseover - аналог :hover

// onmouseleave
// document.body.onmouseleave = function () {
// 	confirm('точно хочешь уйти со страницы?');
// };

document.onkeypress = function(e) {
    console.log('press');
    console.log(e.code);
    console.log(e.keyCode);


};

document.onwheel = function(e) {
    console.log(e.deltaMode);
    console.log(e.deltaX);
    console.log(e.deltaY);
    console.log(e.detail);
};

console.log(document.getSelection());

// read selected text range
document.body.onmouseup = function(e) {
    // console.log(window.getSelection().toString());
    // console.log(document.getSelection().toString());

};