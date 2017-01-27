/*------------Lista de contactos-------------*/
//uando cargue el archivo javascript se agreguen los contactos
//Instanciando la lista 
var listaContactos = document.getElementsByClassName('w-recent-chats');
//Los contactos
var contact1 = '<li>'+
		  			'<div class="avatar">'+
		  				'<img src="image/logocodeacademy.png" alt="" class="wh-44">'+
		  				'<h4 class="w-contact-name">Laboratoria Perú</h4>'+
		  				'<p class="w-last-message" id="mensaje">No se pique!!</p>'+
		            '</div>'+
					'<div class="time" id="hora">14:27</div>'+
	  			'</li>';

var contact2 =  '<li>'+
	  						'<div class="avatar">'+
	  							'<img src="image/raymi.jpg" alt="" class="wh-44">'+
	  							'<h4 class="w-contact-name">Raymi Saldomando</h4>'+
	  							'<p class="w-last-message">La clase va bien!</p>'+
	  						'</div>'+
	  						'<div class="time">11:25</div>'+
	  					'</li>';
var contact3 =  '<li>'+
	  						'<div class="avatar">'+
	  							'<img src="image/mariana.jpg" alt="" class="wh-44">'+
	  							'<h4 class="w-contact-name">Mariana Costa</h4>'+
	  							'<p class="w-last-message">El panel de speakers esta buanazo</p>'+
	  						'</div>'+
							'<div class="time">09:25</div>'+
	  					'</li>';
var contact4 =  '<li>'+
	  						'<div class="avatar">'+
	  							'<img src="image/anamaria.jpg" alt="" class="wh-44">'+
	  							'<h4 class="w-contact-name">Ana María Martinez Franklin</h4>'+
	  							'<p class="w-last-message">Pues dale chamo!</p>'+
	  						'</div>'+
	  						'<div class="time">Ayer</div>'+
	  					'</li>';
var contact5 =  '<li>'+
	  						'<div class="avatar">'+
	  							'<img src="image/rodulfo.jpg" alt="" class="wh-44">'+
	  							'<h4 class="w-contact-name">Rodulfo Prieto</h4>'+
	  							'<p class="w-last-message">¿Cómo van las chicas?</p>'+
	  						'</div>'+
	  						'<div class="time">Martes</div>'+
	  					'</li>';
var contact6 =  '<li>'+
	  						'<div class="avatar">'+
	  							'<img src="image/andrea.jpg" alt="" class="wh-44">'+
	  							'<h4 class="w-contact-name">Andrea Lamas</h4>'+
	  							'<p class="w-last-message">Hoy me toca clases de canto, yee!</p>'+
	  						'</div>'+
	  						'<div class="time">Lunes</div>'+
	  					'</li>';
var contact7 =  '<li>'+
	  						'<div class="avatar">'+
	  							'<img src="image/mariapaula.jpg" alt="" class="wh-44">'+
	  							'<h4 class="w-contact-name">Maria Paula Rivarola</h4>'+
	  							'<p class="w-last-message">Wuju! esto me encanta!! en verdad!</p>'+
	  						'</div>'+
	  						'<div class="time">13/01/2016</div>'+
	  					'</li>';
var contact8 =  '<li>'+
	  						'<div class="avatar">'+
	  							'<img src="image/katy.jpg" alt="" class="wh-44">'+
	  							'<h4 class="w-contact-name">Katy Sanchez</h4>'+
	  							'<p class="w-last-message">No te preocupes, tengo el salón bajo control</p>'+
	  						'</div>'+
	  						'<div class="time">11/01/2016</div>'+
	  					'</li>';
var contact9 =  '<li>'+
	  						'<div class="avatar">'+
	  							'<img src="image/aldo.jpg" alt="" class="wh-44">'+
	  							'<h4 class="w-contact-name">Aldo Alfaro</h4>'+
	  							'<p class="w-last-message">Vao a comer?</p>'+
	  						'</div>'+
	  						'<div class="time">03/01/2016</div>'+
	  					'</li>';
var contact10 = '<li>'+
	  						'<div class="avatar">'+
	  							'<img src="image/curricula.jpg" alt="" class="wh-44">'+
	  							'<h4 class="w-contact-name">Laboratoria Curricula</h4>'+
	  							'<p class="w-last-message">Gian: Ya está lista la unidad 2</p>'+
	  						'</div>'+
	  						'<div class="time">03/01/2016</div>'+
	  					'</li>';
var contact11 = '<li>'+
	  						'<div class="avatar">'+
	  							'<img src="image/jose.jpg" alt="" class="wh-44">'+
	  							'<h4 class="w-contact-name">Jose L. Lee Rázuri</h4>'+
	  							'<p class="w-last-message">Estoy bajando con Aldo, vao a comer?</p>'+
	  						'</div>'+
	  						'<div class="time">03/01/2016</div>'+
	  					'</li>';
listaContactos[0].innerHTML=contact1+contact2+contact3+contact4+contact5+contact6+contact7+contact8+contact9+contact10+contact11;
/*---------END---Lista de contactos-------------*/
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
    listaContactos[0].addEventListener('click', onListaContactoClick);
    function onListaContactoClick(evt){
        //obteniendo datos img, nombre    
        var contactoImg = document.getElementsByClassName('wh-44');
        var contactoNombre = document.getElementsByClassName('w-contact-name');
        //Actualizando ventana chat
        var chat = document.getElementById('chat');
        chat.innerHTML="";
        //Actualizando header con nuevo contacto
        var wChatProfile = document.getElementsByClassName('w-chat-profile');
        wChatProfile[0].innerHTML="";
        wChatProfile[0].innerHTML=evt.target.parentNode.firstChild;   
        //wChatProfile[0].append(datosAvatar);
    }
    
/*---------END---Seleccionar contacto-------------*/

