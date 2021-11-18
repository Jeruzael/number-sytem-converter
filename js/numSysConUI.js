let con1 = document.querySelector('#con1');
let con1Table = con1.querySelector('table');
let con1Select = con1.querySelector('span');
let bin1 = document.querySelector('#bin1');
let dec1 = document.querySelector('#dec1');
let oc1 = document.querySelector('#oc1');
let hex1 = document.querySelector('#hexa1');

let con2 = document.querySelector('#con2');
let con2Table = con2.querySelector('table');
let con2Select = con2.querySelector('span');
let bin2 = document.querySelector('#bin2');
let dec2 = document.querySelector('#dec2');
let oc2 = document.querySelector('#oc2');
let hex2 = document.querySelector('#hexa2');


function showCon1Table(){
	if(con1Table.style.display == "flex"){
		con1Table.style.display = "none";
	}else{
		con1Table.style.display = "flex"
	}
	
}

function showCon2Table(){
	if(con2Table.style.display == "flex"){
		con2Table.style.display = "none";
	}else{
		con2Table.style.display = "flex"
	}
	
}

/*----------------------------*  Select Btn 1   *---------------------------------*/
function initBin1() {
	con1Select.innerHTML = "Binary";
}

function initDec1() {
	con1Select.innerHTML = "Decimal";
}

function initOc1() {
	con1Select.innerHTML = "Octal";
}

function initHex1() {
	con1Select.innerHTML = "Hexadecimal";
}
/*----------------------------* Select Btn 1    *---------------------------------*/

/*----------------------------*  Select Btn 2   *---------------------------------*/
function initBin2() {
	con2Select.innerHTML = "Binary";
}

function initDec2() {
	con2Select.innerHTML = "Decimal";
}

function initOc2() {
	con2Select.innerHTML = "Octal";
}

function initHex2() {
	con2Select.innerHTML = "Hexadecimal";
}
/*----------------------------* Select Btn 2    *---------------------------------*/


con1.addEventListener('click', showCon1Table);
bin1.addEventListener('click', initBin1);
dec1.addEventListener('click', initDec1);
oc1.addEventListener('click', initOc1);
hexa1.addEventListener('click', initHex1);

con2.addEventListener('click', showCon2Table);
bin2.addEventListener('click', initBin2);
dec2.addEventListener('click', initDec2);
oc2.addEventListener('click', initOc2);
hexa2.addEventListener('click', initHex2);