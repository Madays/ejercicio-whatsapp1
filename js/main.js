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

