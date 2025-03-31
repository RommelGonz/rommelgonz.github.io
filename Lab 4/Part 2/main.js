const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg'];

/* Declaring the alternative text for each image file */
const imgAlts =[ 
{altText: "Photo 1 - Big eye"},
{altText: "Photo 2 - Wavy photo"},
{altText: "Photo 3 - Flower"},
{altText: "Photo 4 - Egyptian wall"},
{altText: "Photo 5 - Big Moth"}
]; 

/* Looping through images */
for (let i = 0; i < images.length; i++) {
const newImage = document.createElement('img');
newImage.setAttribute('src',images[i]);
newImage.setAttribute('alt', imgAlts[i].altText);
thumbBar.appendChild(newImage)

newImage.addEventListener('click', () => {
displayedImage.setAttribute('src', images[i]);
displayedImage.setAttribute('alt', imgAlts[i].altText);
});

}



/* Wiring up the Darken/Lighten button */

btn.addEventListener("click", () => {
const btnClass = btn.getAttribute('class');
if (btnClass === "dark") {
btn.setAttribute("class", "light");
btn.textContent = "Lighten";
overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
} else {
btn.setAttribute("class","dark");
btn.textContent = "Darken";
overlay.style.backgroundColor = "rgb(0 0 0 /0%)";
}
});