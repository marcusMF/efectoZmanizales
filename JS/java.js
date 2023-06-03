function enviarFormulario(){
  var nombres = document.getElementById('nombres').value;
  var telefono = document.getElementById('telefono').value;
  var correo = document.getElementById('correo').value;
  if(nombres=="" && apellidos=="" && telefono=="" && Mensaje==""){
    alert("por favor completa todos los campos");
  }
  else if(nombres!="" && telefono=="" && correo==""){
    alert("por favor termina de completar todos los campos");
  }
  else if(nombres!="" && telefono!="" && correo==""){
    alert("correo requerido");
  }  
  else if(nombres!="" && telefono!="" && correo!=""){
    alert("Gracias por preferirnos! nos pondremos en contacto lo mas pronto posible.");
  }
  else if(nombres=="" && telefono!="" && correo==""){
    alert("por favor termina de completar todos los campos");
  }
  else if(nombres=="" && telefono=="" && correo!=""){
    alert("por favor termina de completar todos los campos");
  }
  else if(nombres=="" && telefono=="" && correo==""){
    alert("por favor termina de completar todos los campos");
  }
  else if(nombres=="" && telefono!="" && correo!=""){
    alert("por favor termina de completar todos los campos");
  }
  else if(nombres=="" && telefono=="" && correo!=""){
    alert("por favor termina de completar todos los campos");
  }
  else if(nombres=="" && telefono!="" && correo==""){
    alert("por favor termina de completar todos los campos");
  }
  else if(nombres!="" && telefono=="" && correo!=""){
    alert("por favor termina de completar todos los campos");
  }
  else if(nombres!="" && telefono=="" && correo==""){
    alert("por favor termina de completar todos los campos");
  }
  else if(nombres=="" && telefono!="" && correo!=""){
    alert("por favor completa el campo nombres");
  }  
  else if(nombres!="" && telefono=="" && correo!=""){
    alert("Completa el campo teléfono");
  }  
  else if(nombres!="" && telefono!="" && correo==""){
    alert("completa el campo correo");
  }  
}

var inputs = document.getElementsByClassName('formulario__input'); /*capturar-obtener y guardar todos los formularios inputs*/
for (var i = 0; i < inputs.length; i++) { /*recorrido por los elementos, el length contara cuantos elementos hay */
  inputs[i].addEventListener('keyup', function(){ /*se coloca i para que la seleccion de los inputs sea automatica, de acuerdo al recorrido*/
	if(this.value.length>=1) { /*evaluar el elemento*/
	  this.nextElementSibling.classList.add('fijar'); /*seleccionar el siguiente elemento*/
	} else {
	  this.nextElementSibling.classList.remove('fijar'); /*se le va a quitar la clase*/
	}
  });
}