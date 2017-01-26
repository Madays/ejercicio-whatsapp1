/*------------Agregar Mensaje-------------*/
var mensajes = document.getElementById('mensajes');
var chat = document.getElementById('chat');
mensajes.addEventListener('keyup', onMensajesClick);

function onMensajesClick(evt){
    //si preciono enter     
    if(evt.keyCode==13){
        agregarMensaje();    
    }
    }

function agregarMensaje()
{
    //Agregar hora
            var fecha = new Date();
            var hora = fecha.getHours()+":"+fecha.getMinutes();
            window.status=hora;
    //agregar el mesaje tipeado en id=chat
    if(mensajes.value!==""){       
            //creeun elementos para nombre, texto y hora
            var abuela = document.createElement("div");
            abuela.classList = "w-message w-message-out";
            var madre = document.createElement("div");
            madre.classList = "w-message-text";
            var h5NombreHijo = document.createElement("h5");
            var pMensajesHijo = document.createElement("p");
            pMensajesHijo.innerHTML=mensajes.value;
            var divHoraHijo = document.createElement("div");
            divHoraHijo.innerHTML=hora;
            divHoraHijo.style.float="right";
            //cree un elementos para nombre texto hora***END
            
            //Creando paquete mensaje
            madre.appendChild(h5NombreHijo);
            madre.appendChild(pMensajesHijo);
            madre.appendChild(divHoraHijo);
            abuela.appendChild(madre); 
            chat.appendChild(abuela);        
            mensajes.value="";      
            //Scroll 
            chat.scrollTop = chat.scrollHeight;            
    }   
}
/*---------END---Agregar Mensaje-------------*/

/*------------Seleccionar contacto-------------*/
//Al seleccionar los li de ul class="w-recent-chats debo obtener los datos img, nombre y texto y los datos img y nombre ponerlo en header tmb actualizar el campo chat"
    var contactos = document.getElementsByClassName('w-recent-chats');
    contactos[0].addEventListener('click', onContactoClick);
    function onContactoClick(evt){
        //obteniendo datos img, nombre    
        var datosAvatar = evt.target.parentElement.firstChild.nextElementSibling;
        console.log(datosAvatar);
        var  datoImg=datosAvatar;
        var cImg = document.getElementsByClassName('wh-44');
        var cNombre = document.getElementsByClassName('w-contact-name');
        //Actualizando ventana chat
        var chat = document.getElementById('chat');
        chat.innerHTML="";
        //Actualizando header con nuevo contacto
        var wChatProfile = document.getElementsByClassName('w-chat-profile');
        wChatProfile[0].appendChild(datoImg);
        //wChatProfile[0].append(datosAvatar);
    }
    
/*---------END---Seleccionar contacto-------------*/

