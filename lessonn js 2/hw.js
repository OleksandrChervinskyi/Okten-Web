// // // До лекції від 04.02F


// 1-7
// let arr = [2, 4, 5, 88, 1, 'Alan', 'Alex', 'Tanya', 'Maks', 'Ira', true, false];

// console.log(arr);

// let emptyArr = [];
// emptyArr[4] = 'red';
// emptyArr[22] = 22;
// emptyArr[2] = true;
// console.log(emptyArr);


// 9-12
// for (let i = 0; i <= 10; i++) {
//     document.write(`<div> Hello world ${i} - your index </div>`);
// }

// let i = 0;
// while (i <= 20) {
//     document.write(`<h1>Title ${i} - index</h1>`);
//     i++;
// }

// 14-19
// const arr = [2, 3, , true, 'hy', , false, 4, 5, 6, 7, 811, 02, 44, 3];

// for (const i of arr) {
//     if (typeof(i) == 'boolean') {
//         console.log(i);
//     }
// }

// for (const i of arr) {
//     if (typeof(i) == 'number') {
//         console.log(i);
//     }
// }

// for (const i of arr) {
//     if (typeof(i) == 'string') {
//         console.log(i);
//     }
// }

// 21-27
// const arr = [];
// arr[0] = 'son';
// arr[1] = 'day';
// arr[2] = 6;
// arr[3] = 133;
// arr[4] = true;
// arr[22] = -20;

// for (let i = 0; i <= 100; i = i + 2) {
//     console.log(i);
//     document.write(i);
// }

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 1) {
//         console.log(i);
//         document.write(i);
//     }
// }

// -----------------------
// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// for (let m = 0; m < 3; m++) {
//     for (let s = 0; s < 60; s++) {
//         console.log(m, s);
//         if (m == 2 && s == 0) {
//             break
//         }
//     }
// }


// -------------------------
// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// for (let h = 0; h <= 2; h++) {
//     if (h == 2) {
//         for (let m = 0; m <= 20; m++) {
//             for (let s = 0; s < 60; s++) {
//                 document.write(h, 'h', m, 'min', s, 'sec', '</br>');
//                 if (h == 2 && m == 20 && s == 0) {
//                     break
//                 }
//             }
//         }
//     } else {
//         for (let m = 0; m < 60; m++) {
//             for (let s = 0; s < 60; s++) {
//                 document.write(h, 'h', m, 'min', s, 'sec', '</br>');
//             }
//         }
//     }
// }



// --------------------------
// Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let arr = ['a', 'b', 'c'];

// for (let i = 1; i <= 3; i++) {
//     arr.push(i)
// }
// console.log(arr);

// --------------------
// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let aarr = [1, 2, 3];
// aarr[0] = 3;
// aarr[1] = 2;
// aarr[2] = 1;

// aarr.push(4);
// aarr.push(5);
// aarr.push(6);

// aarr.unshift(4);
// aarr.unshift(5);
// aarr.unshift(6);
// console.log(aarr);

// ---------------------------
// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let arr = ['js', 'css', 'jq'];
// let delFirstElement = arr.shift();
// let delLastElement = arr.pop()

// console.log(delFirstElement, delLastElement);

// ----------------------------------
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(3, 5));
// console.log(arr.slice(0, 2));

// let rem = arr.splice(1, 2)
// console.log(arr);

// let add = arr.splice(3, 0, 'a', 'b', 'c')
// console.log(arr);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// arr.splice(1, 0, 'a', 'b');
// arr.splice(-1, 0, 'c');
// arr.splice(8, 0, 'e');
// console.log(arr);

// --------------------------------------
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let arrr = [1, 3, 4, 6, 7, 98, 2, 5, 7, 9, 2, 7];
// let arrrNew = [];

// for (let i of arrr) {
//     if (i % 2 == 0) {
//         console.log(i);
//         document.write(i);
//     }
// }

// for (const i of arrr) {
//     arrrNew.push(i);
// }
// console.log(arrrNew);

// -----------------------
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while
// 2. перебрати його циклом for
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1
// i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++
// }

// 2
// for (const i of arr) {
//     console.log(i);
// }

// 3, 5
// i = 0;
// while (i < arr.length) {
//     if (arr[i] % 2 == 1) {
//         console.log(arr[i]);
//     }
//     i++
// }

// 4, 6
// for (const i of arr) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// 7
// for (let i of arr) {
//     if (i % 3 == 0) {
//         i = 'okten';
//     }
//     console.log(i);
// }

// 8
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }

// 10
// let arr = [];
// for (let i = 0; i <= 50; i++) {
//     if (i % 2 == 0) {
//         arr.push(i);
//     }
// }

// for (let i = 50; i <= 100; i++) {
//     if (i % 2 == 1) {
//         arr.push(i);
//     }
// }
// console.log(arr);

// ------------------------------------------
// 1. Створити пустий масив та :
//        a. заповнити його 50 парними числами за допомоги циклу.
//        b. заповнити його 50 непарними числами за допомоги циклу.
//        c. используя Math.random заполнить массив из ???(сколько хотите) элементов.
//  диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
// let arr = [];
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         arr.push(i);
//     }
// }

// for (let i = 50; i <= 100; i++) {
//     if (i % 2 == 1) {
//         arr.push(i);
//     }
// }

// for (let i = 0; i <= 3; i++) {
//     arr.push(Math.random(8, 732))
// }

// 2 Вивести за допомогою console.log кожен третій елемен
// for (let i = 2; i <= arr.length; i = i + 3) {
//     console.log(arr[i]);
// }
// console.log(arr);

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// newArr = [];
// for (let i = 0; i <= arr.length; i = i + 3) {
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i]);
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr);

// 5 Вивести кожен елемент масиву, сусід зпарва якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// newArr = [1, 2, 3, 5, 7, 9, 56, 8, 67]

// for (let i = 0; i <= arr.length; i++) {
//     if (newArr[i] % 2 == 0) {
//         console.log(newArr[i - 1]);
//     }
// }

//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let oldArr = [100, 250, 50, 168, 120, 345, 188];
// let sum = 0
// for (const i of oldArr) {
//     sum = sum + i
// }

// console.log(sum / oldArr.length);

//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let randArr = []
// let newArr = []
// for (let i = 0; i <= 10; i++) {
//     randArr.push(Math.random());
//     randArr[i] = randArr[i] * 5;
//     newArr.push(randArr[i]);
// }
// console.log(newArr);

//  8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// let arr = [2, 4, 5, 88, 1, 'Alan', 'Alex', 'Tanya', 'Maks', 'Ira', true, false, 1];
// let newArr = [];

// for (let i of arr) {
//     if (typeof(i) == 'number') {
//         newArr.push(i)
//     }
// }
// console.log(newArr);

// -------------------------------
// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let arr = ['a', 'b', 'c'];
// let word = '';

// for (let i = 0; i < arr.length; i++) {
//     word = word + arr[i];
// }
// console.log(word);

// let i = 0
// while (i < arr.length) {
//     word = word + arr[i];
//     i++;
// }
// console.log(word);

// for (const i of arr) {
//     word = word + i
// }
// console.log(word);

// for (const i in arr) {
//     word = word + arr[i];
// }
// console.log(word);