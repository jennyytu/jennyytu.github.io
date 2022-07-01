/* .js files add interaction to your website */

var factList = [
  "English is the first lingua franca.",/*0*/
  "English literacy encourages the growth of analytical and creative thinking, proficiency in communicating, listening, reading, and writing as well as in social, collaboration, and personal skills.",/*1*/
  "Only 14% of the world population can read and write.",/*2*/
  "Studies have shown that learning English can increase the earning power of individuals by about 25%."];/*3*/


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
