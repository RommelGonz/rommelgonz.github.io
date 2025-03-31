const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const imgAlts =[ 
{altText: "Photo 1 - Big eye"}, {altText: "Photo 2 - Wavy photo"}, {altText: "Photo 3 - Flower"}, {altText: "Photo 4 - Egyptian wall"}, {altText: "Photo 5 - Big Moth"}
]; 

/* Looping through images */
for (let i = 0; i < imgArr.length; i++) {
const newImage = document.createElement('img');
newImage.setAttribute('src', 'images/${imgArr[i]}');
newImage.setAttribute('alt', imgAlts[i].altText);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
