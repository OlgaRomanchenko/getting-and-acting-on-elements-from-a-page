'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');


// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';

// for ( let i=0; i<hearts.length; i++){
//     hearts[i].style.backgroundColor = 'green';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});
const div = document.createElement('div');

// const text = document.createTextNode('Hello world');

div.classList.add('black');
document.body.append(div);

wrapper.append(div); // вставляет в конец элемент
//wrapper.appendChild(div); старый метод append

//wrapper.prepend(div); вставляет в начало родителя какой-то элемент.

//hearts[0].before(div); div before hearts
//wrapper.insertBefore(div,hearts[0]); (вставить перед) указываем что 
                                    // (div) поставить перед каким элементом(heart[0]) в начало псевдомассива


//hearts[0].after(div); div поставится после нулевого элемента hearts[0]

//circles[0].remove(); удаление
// wrapper.removeChild(hearts[1]); старый метод удаления

//hearts[0].replaceWith(circles[0]); поменяет местами
//wrapper.replaceChild(circles[0],hearts[0] );  первый элемент на что мы хотим поменять.Второй что меняется

//div.innerHTML = "Hello World"; // добавляем текст в внуть блока
div.innerHTML = "<h1>Hello World</h1>";

//div.textContent = "Hello";

//div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');  ставит перед элементом div

//div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>');  ставится после div

//div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>');  перед концон

div.insertAdjacentHTML("afterend", '<h2>Hello</h2>'); // вставляет после элемента