// Лекція від 12.02.21

// ----CLASS----

// є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.



let table = document.createElement('ul');
table.id = 'content';
let allH2Tags = document.getElementsByTagName('h2');
for (const i of allH2Tags) {
    console.log(i);
    console.log(typeof(i));
    let li = document.createElement('li');
    li.textContent = i;

    table.appendChild(li);
}


document.body.appendChild(table)