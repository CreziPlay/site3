function openFormAvt() {
	if (document.getElementsByClassName("user_login")[0].textContent == "Авторизация") 
	{
	document.getElementById('Reg').style.display = "none";
	document.getElementById('Avt').style.display = "block";
	document.getElementById('Hedr').style.filter = "brightness(50%)";	
}else{
	document.getElementById('Avt').style.display = "none";
	document.getElementById('prof').style.display = "block";
	document.getElementById('Hedr').style.filter = "brightness(50%)";

}

}
function closeprof(){
	document.getElementById('prof').style.display = "none";
	document.getElementById('Hedr').style.filter = "brightness(100%)";	
}
function openFormAvtOn(){
	document.getElementById('Reg').style.display = "none";
	document.getElementById('Avt').style.display = "block";
	document.getElementById('Hedr').style.filter = "brightness(50%)";	

}


function openFormReg(){
	document.getElementById('Avt').style.display = "none";
	document.getElementById('Reg').style.display = "block";
}
function closeFormAvt(){
	document.getElementById('Avt').style.display = "none";
	document.getElementById('Hedr').style.filter = "brightness(100%)";
}

function closeFormReg(){
	document.getElementById('Reg').style.display = "none";
	document.getElementById('Hedr').style.filter = "brightness(100%)";
}

if (document.getElementsByClassName("user_login")[0].textContent == "") {
    document.getElementsByClassName("user_login")[0].textContent = "Авторизация";
 }

function openzakaz(){
document.getElementById('zks').style.display = "block";
document.getElementById('Hedr').style.filter = "brightness(50%)";
document.getElementById('prof').style.display = "none";
}	

function closezakaz(){

document.getElementById('zks').style.display = "none";
document.getElementById('Hedr').style.filter = "brightness(100%)";

}