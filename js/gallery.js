var image = document.querySelector('#myImg');
var image1 = document.querySelector('#myImg1');
var image2 = document.querySelector('#myImg2');
var image3 = document.querySelector('#myImg3');
var image4 = document.querySelector('#myImg4');
var image5 = document.querySelector('#myImg5');


function myFunction1() {

image.setAttribute('src', 'images/flowers-yellow-large.jpg');
}

function myFunction2() {


  image.setAttribute('src', 'images/flowers-white-large.jpg');
}

function myFunction3() {

image.setAttribute('src', 'images/flowers-red-large.jpg');

}

function myFunction4() {

image.setAttribute('src', 'images/flowers-purple-large.jpg');
}

function myFunction5() {

image.setAttribute('src', 'images/flowers-pink-large.jpg');
}

image1.addEventListener('click',myFunction1);
image2.addEventListener('click',myFunction2);
image3.addEventListener('click',myFunction3);
image4.addEventListener('click',myFunction4);
image5.addEventListener('click',myFunction5);
