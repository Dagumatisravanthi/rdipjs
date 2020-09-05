//this is task 1 javascript code
function addChar(input, char) {
	if(input.value == null || input.value == "0")
		return input.value = char
	else
		return input.value += char
}
	function abs(input) {
	return input.display.value =Math.abs(input.display.value);
}
function sqrt(form) {
	 return form.display.value =(Math.sqrt(form.display.value)).toFixed(3);
}
function deleteChar(input) {
 return	input.value = input.value.substring(0, input.value.length - 1)
}
function compute(form) {
	var st=form.display.value;
	var flag = 0;
	var p = 0;
	for (var i = 0; i < st.length; i++) {
		var ch = st.charAt(i);
		if (ch == "%") {
			flag = 1;
			p = i;
		}
		
		}
		if(flag == 1)
		{
			var n1=st.substring(0,p);
			var n2=st.substring(p+1,st.length);
			form.display.value = (parseInt(n1)*parseInt(n2))/100;
		
		}
		else
		{
    form.display.value = eval(form.display.value);
		}
  }

function checkNum(str) {
	for (var i = 0; i < str.length; i++) {
		var ch = str.charAt(i);
		if (ch < "0" || ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
				&& ch != "(" && ch!= ")" && ch !="%") {
				return false
				}
			}
		}
		return true
} 
//This is task 2 javascript code

function validation(){
//this is name validation code
 var uname=document.getElementById('uname').value;
  if(uname == ""){
   document.getElementById('msg').innerHTML="please fill the field"
    return false;
	}
  else if(uname[0]==0||uname[0]==1||uname[0]==2||uname[0]==3||uname[0]==4||uname[0]==5||uname[0]==6||uname[0]==7||uname[0]==8||uname[0]==9){
    document.getElementById('msg').innerHTML="Can't take a number as starting letter"
    return false;
	}
//this is number validation code
var letter=/^[A-Za-z]+$/;
	var number=document.getElementById('number').value;
  if(number == ""){
   document.getElementById('phnmsg').innerHTML="please fill the field"
    return false;
	}
  else if(number.match(letter)){
    document.getElementById("phnmsg").innerHTML="alphabets are not allowed";
     return false;
     }
  else if(number.length!=10){
   document.getElementById("phnmsg").innerHTML="number has be 10 digits";
     return false;
     }
//this is email  validation code
	var email=document.getElementById('email').value;
	 if(email == ""){
   document.getElementById('mailmsg').innerHTML="please fill the field"
    return false;
	}
	if(!email.includes('@')){
    document.getElementById('mailmsg').innerHTML="field must have @ symbol"
	return false;
	}
	else if(!email.includes('.')){
    document.getElementById('mailmsg').innerHTML="field must have . symbol"
	return false;
	}
    }
//This is task 3 javascript code
//This is palindrome javascript code
function palindrome(){
  var rs="";
  var str=document.getElementById("text").value;
  l=str.length;
  for(var i=l;i>=0;i--){
   rs=rs+str.charAt(i);
   }
   if(str===rs){
   alert(str+" is a palindrome");
   return true
   }
   else{
   alert(str+" is not a palindrome");
   return false
   }
   }
//This is anagram javascript code
 $(document).ready(function(){
   $('#checkanagram').click(function(){
   var 
   text1=$('#text1').val().toLowerCase().split('').sort().join();
   var text2=$('#text2').val().toLowerCase().split('').sort().join();
   if(text1===text2){
   $("#demomsg").append("this is an anagram.");
   return true
   }
   else
   {
    $("#demomsg").append("this is not an anagram.");
     return false
   }
   });
   });
   //this is task 4 js code
   function call(){
document.getElementById("num1").value =
Math.floor(Math.random() * 1000) + 1;

document.getElementById("num2").value =
Math.ceil(Math.random() * 1000) + 1;
}
function rand(){

//alert(document.getElementById("num1").value);
//alert(document.getElementById("num2").value);
var val=["Human","Cockroach","Nuclear Bomb"];
if(val[parseInt(document.getElementById("num1").value)%3]=="Human" && val[parseInt(document.getElementById("num2").value)%3]=="Cockroach"){
document.getElementById("result").innerHTML="Human Survives";
}else if(val[parseInt(document.getElementById("num1").value)%3]=="Cockroach" && val[parseInt(document.getElementById("num2").value)%3]=="Nuclear Bomb"){
document.getElementById("result").innerHTML="Cockroach Survives";
}else if(val[parseInt(document.getElementById("num1").value)%3]=="Human" && val[parseInt(document.getElementById("num2").value)%3]=="Nuclear Bomb"){
document.getElementById("result").innerHTML="Human Dies";
}else{
document.getElementById("result").innerHTML="Same values";
}
} 
   //this is task 5 javascript code(Bonus question)
    /*function convertedCurrency(){
	var ip=documentById('ip').value;
    var xmlhttp=new XMLHttpRequest();
	var url="https://free.currconv.com/api/v7/convert?q=" + ip + "&compact=ultra&apikey=ecd96f38ab9cbbe978b7.";
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
	xmlhttp.onreadystatechange=fuction(){
	 if(xmlhttp.readyStatus == 4 && xmlhttp.status == 200)
	 {
	   var result = xmlhttp.responseText;
	   var jsResult=JSON.parse(result);
	   var amount=document.getElemntById("ipcurrency").value;
      var final= document.getElementById("opcurrency").value=amount *jsResult;
       return amount *jsResult;
	 }
	   return final;
	 }
	}*/