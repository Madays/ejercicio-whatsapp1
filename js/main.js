/*------------Agregar Mensaje-------------*/
var mensajes = document.getElementById('mensajes');
var chat = document.getElementById('chat');
mensajes.addEventListener('keyup', onMensajesClick);

function onMensajesClick(evt){
    if(evt.keyCode==13){
        agregarMensaje();    
    }
    }

function agregarMensaje()
{
    //si el ultimo teclado es enter, agregar el mesaje tipeado en id=chat
    var longMensajes = mensajes.value.length;
    if(mensajes.value!==""){
        //si preciono enter o click //mensajes.value[longMensajes-1] ==         
            //creeun elementos para nombre, texto y hora
            var abuela = document.createElement("div");
            abuela.classList = "w-message w-message-out";
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
/*---------END---Agregar Mensaje-------------*/