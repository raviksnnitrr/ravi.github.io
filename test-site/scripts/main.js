var myHeading=document.querySelector('h1');
//myHeading.textContent='Hello World!';
/*document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}*/
var myImage=document.querySelector('img');
myImage.onclick = function () {
	var mySrc=myImage.getAttribute('src');
	if(mySrc==='images/download.jpg') {
		myImage.setAttribute('src', 'images/firefoxlogo.jpg');
	}
	else {
	myImage.setAttribute('src', 'images/download.jpg');
	}
}
var myButton=document.querySelector('button');
function setUserName() {
	var myName=prompt('Please enter your name.');
	localStorage.setItem('Name',myName);
	myHeading.textContent='Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
setUserName();
}	