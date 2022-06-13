

let purchasedData=JSON.parse(localStorage.getItem("purchase"))

let container = document.getElementById("purchased_vouchers")

let remainingAmt=localStorage.getItem("remaining_balance")

document.getElementById("balance").innerText=remainingAmt

dispalyPurchaseData(purchasedData)


function dispalyPurchaseData(data){
    

    let imgdiv=document.createElement("div")
    imgdiv.setAttribute("class","imgdiv")
    let img =document.createElement("img")
    img.src=data.image

    let name =document.createElement("h3")
    name.innerText=data.name;

    let price=document.createElement("p")
    price.innerText=data.price

    imgdiv.append(img,name,price)
    container.append(imgdiv)

}

