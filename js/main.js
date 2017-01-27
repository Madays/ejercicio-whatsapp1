var imgContact = document.getElementById("imgContact");
var contactName = document.getElementById("contactName");
var listContact = document.getElementById("listContact");

var avatarChat = document.getElementsByClassName("avatarChat");
var arreglo = [];
var arregloContact = [];

arreglo.push(avatarChat);
arregloContact.push(listContact);

for(var i=0; i<=avatarChat.length; i++){
    
    avatarChat[i].addEventListener("click",changeHeader);
  
}

function changeHeader(){
    imgContact.src = this.children[0].src;
    contactName.textContent = this.children[1].textContent;
    listContact.children = arregloContact.removeChild[0];
}
    
    






