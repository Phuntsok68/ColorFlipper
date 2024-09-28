/*
PSEUDOCODE
1 when the user click the button event handler should display the background color to random (hover effect)
2 How to generate random color? solution 1: maybe we can create an array and store the colors(in the hex code) 
and then with the help of random numbers, can display the background colors. Solution 2: no idea!
3 The random color should also display in the text form in the div perhaps
*/

const backgroundColors = [
  "ff5733",
  "ffd433",
  "33ff58",
  "33ffd0",
  "33deff",
  "3376ff",
  "ff3387",
];
// Math.random()*6= 0-5.999999 math.floor()=0-5  +1 = 1-6
const clickMe = document.querySelector("h2");
const body = document.querySelector("body");
const hexCode = document.querySelector("span");
clickMe.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * backgroundColors.length); // 0-6.9999  0-6
  body.style.backgroundColor = `#${backgroundColors[randomNumber]}`;
  hexCode.innerHTML = backgroundColors[randomNumber];
});
