//Parte Lógica
//Parte visual
function init(){
    setEventChatList();
}
function setEventChatList(){
    var listaChat = document.getElementById('lista-chat');
    var arrListItems=listaChat.getElementsByTagName('li');
    for (var i=0; i<=arrListItems.length-1;i++){
        /*arrListItems[i].onclick=function(){
            alert("click");
        };*/
        arrListItems[i].addEventListener('click',onChatItemClick);
    }
}

function onChatItemClick(evt){
    console.log(evt);
    console.log(evt.currentTarget);
    var contactName = evt.currentTarget.getElementsByClassName('w-contact-name')[0].textContent;
    var imageURL=evt.currentTarget.getElementsByClassName('wh-44')[0].src;
    actualizarCabecera(contactName,imageURL,'conectado');
}
var liListItem = null;
function onMensajeKey(evt){
    if(evt.keyCode==13){
        var inputMensajes = document.getElementById('mensajes');
        crearMensaje(inputMensajes.value);
        crearChat(inputMensajes.value);
        inputMensajes.value="";        
    }
}
/*var listaChat = document.getElementById('lista-chat');

var arrayListaChat=listaChat.getElementsByTagName('li');
for(var i; i<=arrayListaChat.length;i++){
    arrayListaChat[i].addEventListener('click',actualizarCabeceraYChatEvt) ;
 }*/
function actualizarCabeceraYChatEvt(){
    var inputMensajes = document.getElementById('mensajes');
    actualizarCabeceraYChat(inputMensajes.value);
}
function crearMensaje(_mensaje){
    
    var htmlMensajeIn = '<div class="w-message w-message-in">'+
	  							'<div class="w-message-text">'+
	  								'<h5 class="blue-1">Andrea Lamas</h5>'+
	  								'<p>Chicos han visto el nuevo corte de Aldo?</p>'+
	  								'<div class="time">11:12</div>'+
	  							'</div>'+
	  						'</div>';
    var hora = new Date();
    
    var htmlMensajeOut = '<div class="w-message w-message-out">'+
	  							'<div class="w-message-text">'+
	  								'<p>'+_mensaje+'</p>'+
	  								'<div class="time">'+hora.getHours()+':'+hora.getMinutes()+'</div>'+
	  							'</div>'+
	  						'</div>';
    var elChat = document.getElementById('chat');
    elChat .innerHTML+=htmlMensajeOut;
    elChat.scrollTop=elChat.scrollHeight;
}

function crearLisaChats(){
    
}

function crearChat(_mensaje){
    
    var hora = new Date();
    
    var htmlChatItem = '<div class="avatar">'+
		  				    '<img src="image/logocodeacademy.png" alt="" class="wh-44">'+
		  				    '<h4 class="w-contact-name">Laboratoria Perú</h4>'+
		  				    '<p class="w-last-message" id="mensaje">'+_mensaje+'</p>'+
		  				'</div>'+
							'<div class="time" id="hora">'+hora.getHours()+':'+hora.getMinutes()+'</div>';
    if(liListItem==null){
        liListItem = document.createElement('LI');
        liListItem.innerHTML = htmlChatItem;
        var elListaChats = document.getElementById('lista-chat');
    //elListaChats.innerHTML+= htmlChatItem;                         
        elListaChats.insertBefore(liListItem, elListaChats.childNodes[0]);    
        
    }
    
}
/*function actualizarCabeceraYChat(_mensaje){
    var htmlCabecera = '<div class="avatar">'+
		  				    '<img src="image/logocodeacademy.png" alt="" class="wh-44">'+
		  				    '<h4 class="w-contact-name">Laboratoria Perú</h4>'+
		  				    '<p class="w-last-message" id="mensaje">'+_mensaje+'</p>'+
		  				'</div>';
    var cabeceraChat = document.getElementById('cabecera-chat');
    cabeceraChat.innerHTML=htmlCabecera; 
    
    var hora = new Date();
    var chat = document.getElementById('chat');
    var htmlChat = '<p class="w-last-message" id="mensaje">'+_mensaje+'</p>'+
		  				'</div>'+
							'<div class="time" id="hora">'+hora.getHours()+':'+hora.getMinutes()+'</div>';
    chat.innerHTML=htmlChat;     
}*/
function actualizarCabecera(_contactName,_imageURL,_estado){
    var chatHeader=document.getElementById('chat-header');
    chatHeader.getElementsByClassName('w-contact-name')[0].innerHTML=_contactName;
    chatHeader.getElementsByClassName('w-users-messages')[0].innerHTML=_estado;
    chatHeader.getElementsByTagName('img')[0].src=_imageURL;
}
