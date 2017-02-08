//Parte Lógica
var hora = new Date(); 
function Chat(_nombre,_imagen){
    this.nombre = _nombre;
    this.imagenURL = _imagen;
    this.ultimoMensaje = '';
    this.horaUltimoMensaje = '';
}
var dataListaChats = [
    new Chat('chat 1','image/logocodeacademy.png'),
    new Chat('chat 2','image/logocodeacademy.png'),
    new Chat('chat 3','image/logocodeacademy.png'),
    new Chat('chat 4','image/logocodeacademy.png'),
];
var arrAlmacenarChat = [];
function pushMensajes(_mensaje){
    arrAlmacenarChat.push({mensaje:_mensaje,hora:hora.getHours(),minutos:hora.getMinutes()});
}

/*-------------buscador------*/

var search = document.getElementById("search");
var contacto = document.getElementsByTagName("h4");
var forEach = Array.prototype.forEach;

search.addEventListener("keyup", function(e){
  var choice = this.value;

  forEach.call(contacto, function(f){
      if (f.innerHTML.toLowerCase().search(choice.toLowerCase()) == -1)
          f.parentNode.parentNode.style.display = "none";   
      else
         f.parentNode.parentNode.style.display = "block";        
  });
}, 
false);
/*-------------end buscador------*/
//Parte visual
var liListItem = null;
function init(){    
    initChatList();   
}

function initChatList(){
    var elListaChats = document.getElementById('lista-chat');
    for (var i in dataListaChats){
        var htmlChatItem = '<li><div class="avatar">'+
	  							'<img src="'+dataListaChats[i].imagenURL+'" alt="" class="wh-44">'+
	  							'<h4 class="w-contact-name">'+dataListaChats[i].nombre+'</h4>'+
	  							'<p class="w-last-message" id="mensaje">'+dataListaChats[i].ultimoMensaje+'</p>'+
	  						'</div>'+
	  						'<div class="time" id="hora">'+dataListaChats[i].horaUltimoMensaje+'</div></li>'; 
        elListaChats.innerHTML += htmlChatItem;
    }
    setEventChatList();
}
function setEventChatList(){
    var listaChats = document.getElementById('lista-chat');
    var arrListItems=listaChats.getElementsByTagName('li');
    for (var i=0; i<=arrListItems.length-1;i++){
        /*arrListItems[i].onclick=function(){
            alert("click");
        };*/
        arrListItems[i].addEventListener('click',onChatItemClick);
    }
}

function onChatItemClick(evt){
    var contactName = evt.currentTarget.getElementsByClassName('w-contact-name')[0].textContent;
    var imageURL=evt.currentTarget.getElementsByClassName('wh-44')[0].src;
    actualizarCabecera(contactName,imageURL,'conectado');
}

function onMensajeKey(evt){
    if(evt.keyCode==13){
        var inputMensajes = document.getElementById('mensajes');
        crearMensaje(inputMensajes.value);
        crearChat(inputMensajes.value);         
        pushMensajes(inputMensajes.value);
        inputMensajes.value="";  
    }
}

function crearMensaje(_mensaje){
    
    var htmlMensajeIn = '<div class="w-message w-message-in">'+
	  							'<div class="w-message-text">'+
	  								'<h5 class="blue-1">Andrea Lamas</h5>'+
	  								'<p>Chicos han visto el nuevo corte de Aldo?</p>'+
	  								'<div class="time">11:12</div>'+
	  							'</div>'+
	  						'</div>';
    
    var htmlMensajeOut = '<div class="w-message w-message-out">'+
	  							'<div class="w-message-text">'+
	  								'<p>'+_mensaje+'</p>'+
	  								'<div class="time">'+hora.getHours()+':'+hora.getMinutes()+'</div>'+
	  							'</div>'+
	  						'</div>';
    /*var mensaje = liListItem.getElementsByClassName('w-last-message')[0];
    mensaje.innerHTML = _mensaje;*/
    
    var elChat = document.getElementById('chat');
    elChat.innerHTML+=htmlMensajeOut;
    elChat.scrollTop=elChat.scrollHeight;
}

function crearChat(_mensaje){
    
    var elListaChats = document.getElementById('lista-chat');      
    if(liListItem==null){
        liListItem = document.createElement('LI');          
    } 
    var htmlChatItem = '<div class="avatar">'+
		  				    '<img src="image/logocodeacademy.png" alt="" class="wh-44">'+
		  				    '<h4 class="w-contact-name">Laboratoria Perú</h4>'+
		  				    '<p class="w-last-message" id="mensaje">'+_mensaje+'</p>'+
		  				'</div>'+
							'<div class="time" id="hora">'+hora.getHours()+':'+hora.getMinutes()+'</div>';
        liListItem.innerHTML = htmlChatItem;
        //var elListaChats = document.getElementById('lista-chat');
    //elListaChats.innerHTML+= htmlChatItem;                         
        elListaChats.insertBefore(liListItem, elListaChats.childNodes[0]);
    
    setEventChatList();
    
}

function actualizarCabecera(_contactName,_imageURL,_estado){
    var chatHeader=document.getElementById('chat-header');
    chatHeader.getElementsByClassName('w-contact-name')[0].innerHTML=_contactName;
    chatHeader.getElementsByClassName('w-users-messages')[0].innerHTML=_estado;
    chatHeader.getElementsByTagName('img')[0].src=_imageURL;
}

function cargarChat(){
    var htmlMensajeOut = '<div class="w-message w-message-out">'+
	  							'<div class="w-message-text">'+
	  								'<p>'+almacenarChat.mensaje+'</p>'+
	  								'<div class="time">'+almacenarChat.hora+':'+almacenarChat.minutos+'</div>'+
	  							'</div>'+
	  						'</div>';   
}
