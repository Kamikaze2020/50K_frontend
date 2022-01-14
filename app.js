const cart_title = document.getElementsByClassName('product__item-title');
const cart_img = document.getElementsByClassName('product__img');
const cart_price = document.getElementsByClassName('product__price');

console.log('Ссылка на картинку:', cart_img[0].children[1].src)
console.log('Текст карточки:', cart_title[0].innerText)
console.log('Текст карточки:', cart_price[0].innerText)