/*----------Eligiendo contacto---------*/
var contacto = document.getElementsByClassName('avatar');
var chat = document.getElementById('chat');
contacto[0].addEventListener('click', onContactoClick);
function onContactoClick(evt){
    //Cuando haya click en avatar limpiar chat "
    alert(contacto.value);
}
