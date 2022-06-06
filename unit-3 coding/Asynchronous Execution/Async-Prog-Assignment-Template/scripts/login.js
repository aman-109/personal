

let signupData= JSON.parse(localStorage.getItem("signupData"))

let form = document.querySelector("#form")
form.addEventListener("submit",loginFun)

let loginArr=JSON.parse(localStorage.getItem("loginData")) || []

function loginFun(){
    event.preventDefault()

    let loginInput={
        email:form.email.value,
        password:form.password.value,
    }



    let x=checkLogin(loginInput)

        function checkLogin(loginInput){
            
           signupData.forEach(function(ele){
              if(ele.email !== loginInput.email || ele.password !== loginInput.password){
                 alert("Invalid Credential !")
                 window.location.reload();
              }
              else{
                  alert("Login Successful ")
                  window.location.href="index.html"
              }
           })
        }



}