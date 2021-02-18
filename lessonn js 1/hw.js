// // До лекції від 02.02
// // 1,2
// let a = 'hello';
// let b = 'owu';
// let c = 'com';
// let d = 'ua';
// let s = 1;
// let f = 10;
// let g = -999;
// let h = 3.14;
// let j = true;
// let k = false;

// console.log(a, b, c, d, s, f, g, h, j, k);
// document.write(a, b, c, d, s, f, g, h, j, k);

// // 3
// const A = 'constanta';
// const B = 22;
// const C = true;

// console.log(A, B, C);
// document.write(A, B, C);

// // 4, 5
// let userName = prompt('Ur name here');
// let userLast = prompt('Ur lastname here');
// let userFathername = prompt('Ur fathername here');

// console.log(userName, userLast, userFathername);
// document.write(userName, userLast, userFathername);

// let fullName = userName + userLast + userFathername;
// console.log(fullName);

// // 7
// let q = +prompt('number ~1');
// console.log(q);

// 8
// let w = parseInt(prompt('numer 1'));
// let e = +prompt('numer 2');
// let r = +prompt('numer 3');

// console.log(w, e, r);

// let result = w + e + r;
// console.log(result);

// 9
// let w = parseInt(prompt('numer 1'));
// let e = +prompt('numer 2');
// let r = +prompt('numer 3');

// console.log(w, e, r);

// let result = parseFloat(w) + parseFloat(e) + parseFloat(r);
// console.log(result);

// // 10
// let w = parseInt(prompt('numer 1'));
// let e = +prompt('numer 2');
// let r = +prompt('numer 3');

// console.log(w, e, r);

// let result = parseFloat(w) + parseFloat(e) + parseFloat(r);
// console.log(Math.round(result));

// 11
// let w = parseInt(prompt('numer 1'));
// let e = prompt('numer 2');

// console.log(w, e);

// let result = parseFloat(w) + parseFloat(e);
// console.log(Math.round(result));

// console.log(typeof(result))

// 15
// let q = 5 < 6;
// let w = 5 > 6;
// let e = 5 === 6;
// let r = 5 >= 6;
// let t = 10 == 10;
// let y = 10 === 10;
// let u = 10 != 10;
// let i = 10 !== 10;
// let o = 10 > 10;
// let p = 123 === '123';
// let ak = 123 == '123';

// console.log(q, w, e, r, t, y, u, i, o, p, ak);

// // 28
// console.log(132 > 100 && 45 < 12);
// console.log(132 > 100 || 45 < 12);
// console.log(!!(3 / 'owu'));
// console.log((111 > 11 || 45 < 111) || !!'0');
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12));

// 51
// let str = 'hay';
// let num = 2;
// let flug = true;
// let txt = 'true';

// console.log(typeof(str));
// console.log(typeof(num));
// console.log(typeof(flug));
// console.log(typeof(txt));

// console.log(4 % 5);

// Class 4
// let height = 14;
// let widht = 20;
// s = height * widht;

// console.log(s)

// // Class 6
// let n = 3;
// let m = 4;
// let k = ((n ** 2) + (m ** 2));

// console.log(Math.sqrt(k));

// Class10
// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");

// console.log(parseInt("3.14"));
// console.log(parseInt("-7.875"));
// console.log(parseInt("435"));
// console.log(parseInt("Вася"));

// Extra 1
// let a = prompt('first');
// let b = prompt('sec');
// let c = prompt('the');

// let myarr = [a, b, c, ]

// console.log(myarr.sort())

// Extra 2
// let color = prompt('enter color');

// if (color == 'green') {
//     console.log('go');
// } else if (color == 'red') {
//     console.log('stop');
// } else if (color == 'yellow') {
//     console.log('wait');
// } else {
//     console.log('sms happend')
// }

// Extra 3
let color = prompt('enter color');
let isRoadClean = confirm('Are cars here?')

if (color == 'green') {
    if (isRoadClean) {
        console.log('почекай хай проїдуть');
    } else {
        console.log('goo')
    }
} else if (color == 'yellow') {
    if (isRoadClean) {
        console.log('чекай');
    } else {
        console.log('всеодно чекай')
    }
} else if (color == 'red') {
    if (isRoadClean) {
        console.log('стій точно');
    } else {
        console.log('всеодно стій')
    }
} else {
    console.log('sms happend')
}