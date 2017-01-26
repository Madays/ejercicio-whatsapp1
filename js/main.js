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

