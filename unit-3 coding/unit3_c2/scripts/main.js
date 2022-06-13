


document.getElementById("form").addEventListener("submit",clickedFun)


function clickedFun(){
    event.preventDefault();

    // console.log("hi")

    let data={
        name:form.name.value,
        email:form.email.value,
        address:form.address.value,
        wallet:form.amount.value,
    }

    localStorage.setItem("user",JSON.stringify(data))

  document.getElementById("name").value=""
  document.getElementById("email").value=""
  document.getElementById("address").value=""
  document.getElementById("amount").value=""
}