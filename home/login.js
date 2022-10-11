var form = document.querySelector("#loginform")
var welcome = document.querySelector("#welcome")

    function checkUser(){
        var userName = localStorage.getItem("usuario")
        if(userName){ //SE ESTIVER COM ALGUMA COSA
            var secao = document.getElementById('secao')
            secao.style.display = "none"
            form.style.display = "none";
            welcome.style.display = "block";

            var usuarioElement = document.querySelector("#username")
            usuarioElement.innerHTML = userName
        }else{
            form.style.display = "block";
            
            welcome.style.display = "none";
        }
     }


    form.addEventListener("submit", (e) =>{

    e.preventDefault();

    var emailL = document.querySelector("#email");
    var senhaLC = document.querySelector("#senha");
    var usuarioL = document.querySelector("#nameusuario")
 


    localStorage.setItem("email", emailL.value);
    localStorage.setItem("senha", senhaLC.value);
    localStorage.setItem("usuario", usuarioL.value);

    emailL.value = "";
    senhaLC.value = "";
    usuarioL.value = "";

   
    
   checkUser();

})

localStorage.Clear()
checkUser();



