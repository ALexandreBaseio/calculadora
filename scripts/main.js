var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === '../imagens/Zhao_Yun_Render_(KSN2).png') {
      myImage.setAttribute ('src','../imagens/firefox2.png');
    } else {
      myImage.setAttribute ('src','../imagens/Zhao_Yun_Render_(KSN2).png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Você é incrivel, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Você é incrivel, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}