function login(){
    var user, pass;

    user = document.getElementById("usuario").value;
    pass = document.getElementById("contraseña").value;

    if(user == "Carlos" && pass == "1234"){
        window.location = "./carga.html";
    }
    else {
        alert("Usuario o contraseña incorrecta.")
    }
}

