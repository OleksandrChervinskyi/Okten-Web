//До лекції від 02.03
//=======BOM
//localstorage -> storage of your browser
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

let filterTrue = users.filter(value => value.status);
console.log(filterTrue);
localStorage.setItem('favUsers', JSON.stringify(filterTrue));
console.log(localStorage);

let filterFalse = users.filter(value => !value.status);
localStorage.setItem('notFavUsers', JSON.stringify(filterFalse));
console.log(localStorage);

let favUsersJSON = localStorage.getItem('favUsers');
console.log(favUsersJSON);
let favUsersParsed = JSON.parse(favUsersJSON);
console.log(favUsersParsed);




console.log(window.innerHeight);
console.log(window.innerWidth);
window.open('https://owu.com.ua');
// window.close();
// window.moveTo(100,100);
// window.resizeTo();
//SCREEN
console.log(screen.width);
console.log(screen.height);
console.log(screen.availWidth);
console.log(screen.availHeight);


// NAVIGATOR
// ВНИМАНИЕ!!!
//     Информация из объекта navigator может вводить в заблуждение. Ее не следует использовать для определения версии браузера, так как:
//
//     разные браузеры могут использовать одно и то же имя
// данные объекта navigator могут изменяться владельцем браузера
// некоторые браузеры дают неверные идентификаторы о себе, чтобы обходить проверку сайтов
// браузеры не могут сообщать о новых операционных системах, вышедших после самих браузеров

console.log(navigator.platform);
console.log(navigator.language);
console.log(navigator.languages);
console.log(navigator.onLine);
console.log(navigator.maxTouchPoints);
console.log(navigator.hardwareConcurrency);

// navigator.getBattery().then(value => {
// 	console.log(value);
// });
// navigator.geolocation.getCurrentPosition(position => {
// 	console.log(position.coords);
// });
// // navigator.geolocation.watchPosition()
// console.log(window.navigator.mediaDevices);
// navigator.mediaDevices.getUserMedia({video: true}).then(function (stream) {
// 	let video = document.getElementById('video');
// 	video.srcObject = stream;
// 	video.play();
// }).catch(function (e) {
// 	alert('а камера то есть?');
// 	console.log('Проблемка: ' + e.message);
// });


// navigator.mediaDevices.getUserMedia({audio: true}).then(function (stream) {
//     var audio = new Audio();
//     audio.srcObject = stream;
//     let audioBlock = document.getElementById('audio');
//     audio.play();
// });


// LOCATION
console.log(location.host);
console.log(location.href); // url path file
console.log(location.pathname); // os path of file
console.log(location.protocol); // http or https or ftp
// history.forward();
// history.back();

//========
// setTimeout(function () {
// 	console.log('hello');
//
// }, 2000);
//
// setInterval(function () {
//
// 	console.log('hello interval');
// }, 200);