function hideElementById(elementId) {
 const element = document.getElementById(elementId);
 element.classList.add('hidden')
}
function showelementById(elementId) {
 const element = document.getElementById(elementId)
 element.classList.remove('hidden')
}

function setBackgroundColorById(elementId) {
 const element = document.getElementById(elementId);
 element.classList.add('bg-orange-400');
}
function removeBackgroundColorById(elementId) {
 const element = document.getElementById(elementId);
 element.classList.remove('bg-orange-400');
}
// update Life and point new function show me
function getTextElementValueById(elementId) {
 const element = document.getElementById(elementId);
 const elementValueText = element.innerText;
 const value = parseInt(elementValueText);
 return value;
}
function setTextElementValueById(elementId, value) {
 const element = document.getElementById(elementId);
 element.innerText = value;
}

function getARandomAlphabet() {
 // get or create an alphabet array
 const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
 const alphabets = alphabetString.split('');
 // console.log(alphabets);

 // get a random index between 0-25;
 const randomNumber = Math.random() * 25;
 const index = Math.round(randomNumber);
 // console.log(index);

 const alphabet = alphabets[index];
 // console.log(index, alphabet);
 return alphabet
}
// remove the hightlight play ground
function getElementTextById(elementId) {
 const element = document.getElementById(elementId);
 const text = element.innerText;
 return text;
}