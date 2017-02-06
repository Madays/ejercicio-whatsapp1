var recentChats = [];

function Contact(_name,_avatar,_message){
    this.name=_name;
    this.avatar=_avatar;
    this.message=_message;
}
var newContact = new Contact('Mad',':)','Hi');
console.log(newContact);
function pushChats(){
    recentChats.push([newContact.name,newContact.avatar,newContact.message]);
}

