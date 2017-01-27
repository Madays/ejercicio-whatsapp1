var imgContact = document.getElementById("imgContact");
var contactName = document.getElementById("contactName");
var listContact = document.getElementById("listContact");
var chat = document.getElementById("chat");
var avatarChat = document.getElementsByClassName("avatarChat");
var arreglo = [];
var arregloContact = [];

arreglo.push(avatarChat);
arregloContact.push(listContact);
avatarChat[0].addEventListener("click",function(){
    imgContact.src = this.children[0].src;
    contactName.textContent = this.children[1].textContent; 
    listContact.innerHTML= '<li>'+'Ana María, '+'</li>'+
	  							'<li>'+'Aldo, '+'</li>'+
	  							'<li>'+'Gian, '+'</li>'+
	  							'<li>'+'Mariana, '+'</li>'+
	  							'<li>'+'Papu, '+'</li>'+
	  							'<li>'+'Tú'+'</li>';
                               });
for(var i=1; i<=avatarChat.length; i++){    
    avatarChat[i].addEventListener("click",changeHeader);
}

function changeHeader(evt){
    
    chat.innerHTML="";
    imgContact.src = this.children[0].src;
    contactName.textContent = this.children[1].textContent;
    //listContact.children = arregloContact.removeChild[0]; 
    listContact.innerHTML="";
}


/*
var imgContact = document.getElementById("imgContact");
var contactName = document.getElementById("contactName");
var listContact = document.getElementById("listContact");
var chat = document.getElementById("chat");
var avatarChat = document.getElementsByClassName("avatarChat");
var arreglo = [];
var arregloContact = [];

arreglo.push(avatarChat);
arregloContact.push(listContact);

for(var i=0; i<=avatarChat.length; i++){
    
    avatarChat[i].addEventListener("click",changeHeader);
 
}

function changeHeader(evt){
    
    chat.innerHTML="";
    imgContact.src = this.children[0].src;
    contactName.textContent = this.children[1].textContent;
    //listContact.children = arregloContact.removeChild[0];
    
}


*/
    
    






