



let form = document.querySelector("#form")
form.addEventListener("submit",signupFun)

let arr=JSON.parse(localStorage.getItem("signupData")) || [];

function signupFun(){
    event.preventDefault();

    var data={
        name :form.name.value,
        contact:form.contact.value,
        email:form.email.value,
        password:form.password.value,
    }

    let x=checkDetails(data)

    function checkDetails(data){
        if(data.name==""||data.contact==""||data.email==""||data.password=="")
        {
            return false;
        }
        
    }


   if(x==false){
       alert("All Inputs Need To Be Filled !")
       window.location.reload();
   }
   else{
    arr.push(data)

        localStorage.setItem("signupData",JSON.stringify(arr))
    
       window.location.href="login.html"
   }

//     
}