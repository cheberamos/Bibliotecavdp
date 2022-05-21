function validar(){
    var nombre, apellido, mail, tel, comentario;
    nombre=document.getElementById("nombre").value;
    apellido=document.getElementById("apellido").value;
    mail=document.getElementById("mail").value;
    tel=document.getElementById("tel").value;
    comentario=document.getElementById("comentario").value;
    expresion = /\w+@\w+\.[a-z]/;
    if(nombre===""|| apellido ===""|| mail==="" || comentario==="" ){
        alert("Por favor, rellene todos los campos");
        return false;
    }
    else if(nombre.length>30){
        alert("El nombre es muy largo");
        return false;
    }
    else if(apellido.legth>30){
        alert("El apellido es muy largo");
        return false;
    }
    else if(!expresion.test(mail)){
        alert("el mail "+mail+" tiene formato invalido");
        return false;
    }
    else if(isNaN(tel)){
        alert("El teléfono ingresado no es un número")
        return false;
    }
}