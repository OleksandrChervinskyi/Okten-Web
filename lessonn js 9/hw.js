// // До лекції від 04.03
// Реалізувати друкарську машинку.
// У вас є текст "Hello World".
// Ваша функція має друкувати цей текст по 1 симоволу в браузері.
// КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
// Цим самим ви маєте симулювати написання даного тексту юзером.
// Приклад: "Hello"
// Затримки:
//     H(затримка 0.6)
// e(затримка 0.1)
// l(затримка 0.3)
// l(затримка 0.7)
// о(затримка 1)

function print() {
    // let word = prompt('enter word');
    let random = () => Math.random() * 1000;




}
print()

//==============================================
// *** за допомогою fetch(як в прикладі) отримати від jsonplaceholder всі users.
// За допомогою document.createElement вивести їх в браузер.
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        value.forEach(element => {
            let div = document.createElement('div');
            div.className = 'user';
            document.body.appendChild(div);
            // findAllObject(value);


        });
    });

function findAllObject(object) {
    for (const key in object) {
        if (typeof(object[key]) === 'object') {

        } else {


        }
    }
}

findAllObject({ name: 'aleks', age: 25, wife: { age: 2, ivan: 'brother' } });

// Помістити кожен окремий об 'єкт в блок, при цьому кожен внутрішній об'
// єкт в свій блок(блок в блоці). **
//     * за допомогою fetch(як в прикладі) отримати від jsonplaceholder всі posts.
// За допомогою document.createElement вивести їх в браузер.
// Помістити кожен окремий об 'єкт в блок, при цьому кожен внутрішній об'
// єкт(якщо він існує) в свій блок(блок в блоці). **
//     * за допомогою fetch(як в прикладі) отримати від jsonplaceholder всі comments.
// За допомогою document.createElement вивести їх в браузер.
// Помістити кожен окремий об 'єкт в блок, при цьому кожен внутрішній об'
// єкт(якщо він існує) в свій блок(блок в блоці). **

// =======================================================================
//     ** ** при помощи fetch(как в примере) получить от jsonplaceholder все posts.
// Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments.
// Объеденить соответсвующий post с соответсвующими comment и вывести в браузер.
// Подсказка: в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {
        value.forEach(post => {
            fetch('https://jsonplaceholder.typicode.com/comments?postId=' + post.id)
                .then(value => value.json())
                .then(value => {
                    post.comments = value;
                    // console.log(post);
                })
        });
    })