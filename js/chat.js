import { collection, addDoc } from "firebase/firestore"; 


let messages = [];
let messCont = document.querySelector('#messageCont');
let container = document.getElementById("container");
let message = document.querySelector('#chatBox');
let sendBtn = document.querySelector('#sendBtn');



function createMess(){
	let newMess = document.createElement('span');
	newMess.className = "newMessage";
	newMess.innerHTML = message.value;
	messCont.appendChild(newMess);
	//console.log("test: ", messCont);
}


sendBtn.addEventListener('click', createMess);