var recentChats = [];

function Contact(_name,_avatar){
    this.name=_name;
    this.avatar=_avatar;
    this.message=document.getElementById('mensajes').value;
}
var newContact = new Contact('Mad',':)');
console.log(newContact);
function pushChats(){
    recentChats.push([newContact.name,newContact.avatar,newContact.message]);
}

