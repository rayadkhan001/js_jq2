// text change
function textChange(){
	document.getElementById('h2').innerHTML = "Hello There!";
}
function textChange2(){
	document.getElementById('h2nd').innerHTML = "oncontextmenu";
}
function textChange3(){
	document.getElementById('h2rd').innerHTML = "ondblclick";
}
// show date
function showDate(){
	document.getElementById('dh2').innerHTML = Date();
}
function showDate2(){
	document.getElementById('dh2nd').innerHTML = Date();
}
function showDate3(){
	document.getElementById('dh2rd').innerHTML = Date();
}
// variable repeat massage
function dataRepeat(){
	var massage = "Welcome to SS. ";
	document.getElementById('dr').innerHTML = massage.repeat(3);
}
function dataRepeat2(){
	var massage = "Welcome to SS. ";
	document.getElementById('dr2').innerHTML = massage.repeat(3);
}
function dataRepeat3(){
	var massage = "Welcome to SS. ";
	document.getElementById('dr2rd').innerHTML = massage.repeat(3);
}
// on/of
function bulbOn(){
	document.getElementById('bulb').src = 'img/on.gif';
}
// bulb on/off
function bulbOff(){
	document.getElementById('bulb').src = 'img/off.gif';
}
// font-size
function fontSize(){
	document.getElementById('fs').style.fontSize = "50px";
}
function fontSize2(){
	document.getElementById('fs2').style.fontSize = "50px";
}
// show/hide
function textShow(){
	document.getElementById('tsh').style.display = "block"
}
function textHide(){
	document.getElementById('tsh').style.display = "none"
}
// addition function
function outPut(){
	var number1 = 10;
	var number2 = 5;
	var result = number1 + number2;
	document.getElementById('op').innerHTML = result; 
}
// subtraction function
function subTract(){
	var num1 = 15;
	var num2 = 8;
	var result = num1 - num2;
	document.getElementById('sf').innerHTML = result;
}
// multiply function
function multiFun(){
	var numb1 = 7;
	var numb2 = 7;
	var result = numb1 * numb2;
	document.getElementById('multi').innerHTML = result;
}
// division function
function divideFun(){
	let numb1, numb2, resilt;
	numb1 = 7;
	numb2 = 7;
	result = numb1 / numb2;
	document.getElementById('df').innerHTML = result;
}
// "get-element-by-class-name" example
function test(){
	document.getElementsByTagName('p')[1].innerHTML = "Welcome";
}
// "getElementsByName" example
function totalElements() {
    var allgenders = document.getElementsByName("gender");
    alert("Total Genders: " + allgenders.length);
}
// getElementsByTagName example
function countPara() {  
    var totalpara = document.getElementsByTagName("p");  
    alert("Total p tags are: " + totalpara.length);  
}
// getElementsByTagName count paragraphs
function counth2() {
    var totalh2 = document.getElementsByTagName("h2");
    alert("Total h2 tags are: " + totalh2.length);
}
function counth3() {
    var totalh3 = document.getElementsByTagName("h3");
    alert("Total h3 tags are: " + totalh3.length);
}
function myfunction(txt) { 
  document.getElementById("demo").innerHTML = txt
} 
// getElementById example
function myfunction(txt) { 
  document.getElementById("demo").innerHTML = txt
} 
function fun() {
    alert("Welcome to the javaTpoint.com");
}
function fun1() {
   document.getElementById("para").innerHTML =  "This is second function";
}
function fun2() {
   document.getElementById("para1").innerHTML =  "This is third function";
}
var mybtn = document.getElementById("btn");
mybtn.addEventListener("click", fun);
mybtn.addEventListener("click", fun1);
mybtn.addEventListener("click", fun2);





