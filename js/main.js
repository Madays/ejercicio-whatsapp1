/*------------Agregar Mensaje-------------*/
/*var mensajes = document.getElementById('mensajes');
var chat = document.getElementById('chat');
mensajes.addEventListener('click', onMensajesClick);

function onMensajesClick(evt){agregarMensaje();}

function agregarMensaje()
{
    //si el ultimo teclado es enter, agregar el mesaje tipeado en id=chat
    var longMensajes = mensajes.value.length;
    if(mensajes!==""){
        //si preciono enter o click 
        if(mensajes.value[longMensajes-1] == "a"){
            //creeun elementos para nombre, texto y hora
            var abuela = document.createElement("div");
            abuela.classList = "w-message w-message-in";
            var madre = document.createElement("div");
            madre.classList = "w-message-text";
            var h5NombreHijo = document.createElement("h5");
            
            var pMensajesHijo = document.createElement("p");
            pMensajesHijo.innerHTML=mensajes.value;
            var divHoraHijo = document.createElement("div");
            //cree un elementos para nombre texto hora***END
            
            //Creando paquete mensaje
            madre.appendChild(h5NombreHijo);
            madre.appendChild(pMensajesHijo);
            madre.appendChild(divHoraHijo);
            abuela.appendChild(madre); 
            chat.appendChild(abuela);
            mensajes.value="";
        }    
    }   
}*/
/*---------END---Agregar Mensaje-------------*/

/*------------Seleccionar contacto-------------*/
//Al seleccionar los li de ul class="w-recent-chats debo obtener los datos img, nombre y texto y los datos img y nombre ponerlo en header tmb actualizar el campo chat"

    //obteniendo datos img, nombre    
    var chat = document.getElementById('chat');
    var contacto = document.getElementsByClassName('avatar');
    contacto[0].addEventListener('click', onContactoClick);
    

    //Actualizando ventana chat
    function onContactoClick(evt){
        if(evt.target){
            chat.innerHTML="" ;
        }
    }
    
/*---------END---Seleccionar contacto-------------*/

