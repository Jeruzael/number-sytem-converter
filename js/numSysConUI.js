let con1 = document.querySelector('#con1');
let con1Table = con1.querySelector('table');
let con2 = document.querySelector('#con2');
let con2Table = con2.querySelector('table');

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

con1.addEventListener('click', showCon1Table);
con2.addEventListener('click', showCon2Table);