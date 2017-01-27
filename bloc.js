listaContactos[0].addEventListener('click', onListaContactoClick);
    function onListaContactoClick(evt){
        //obteniendo datos img, nombre    
        var avatarImg = evt.target.parentElement.firstChild;
        var avatarNombre = evt.target.parentElement.firstChild.nextElementSibling;
        //Actualizando ventana chat
        var chat = document.getElementById('chat');
        chat.innerHTML="";
        //Actualizando header con nuevo contacto
        var wChatProfile = document.getElementsByClassName('w-chat-profile');
        wChatProfile[0].innerHTML="";
        wChatProfile[0].appendChild(avatarImg);
        listaContactos.appendChild(avatarImg);
        wChatProfile[0].appendChild(avatarNombre);
        //wChatProfile[0].append(datosAvatar);
    }