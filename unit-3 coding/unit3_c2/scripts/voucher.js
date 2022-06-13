


let url ="https://masai-vouchers-api.herokuapp.com/api/vouchers"

let userData=JSON.parse(localStorage.getItem("user"))
let voucherList=document.getElementById("voucher_list")

let walletBalance=document.getElementById("wallet_balance")

let remainingAmt=localStorage.getItem("remaining_balance")




displayUserData(userData)


function displayUserData(details){
    if(remainingAmt==undefined){
        walletBalance.innerText=details.wallet
    }
    else{
        walletBalance.innerText=remainingAmt
    }
   
}


fetch(url)
.then(function(res){
    res.json().then(function(x){
        // console.log(x)
        displayVoucher(x)
    })
})
.catch(function(err){
    console.log(err)
})



function displayVoucher(data){


    voucherList.innerHTML=null;

    data[0].vouchers.forEach((ele)=>{
        // console.log(ele)
        let div=document.createElement("div")
        div.setAttribute("class","voucher")

        let imgdiv=document.createElement("div")
        imgdiv.setAttribute("class","imgdiv")
        let img =document.createElement("img")
        img.src=ele.image

        let name =document.createElement("h3")
        name.innerText=ele.name;

        let price=document.createElement("p")
        price.innerText=ele.price

        let btn=document.createElement("button")
        btn.innerText="Buy"
        btn.style.cursor="pointer"
        btn.setAttribute("class","buy_voucher")

        btn.addEventListener("click",function(){
            addToPurchased(ele)
        })


        imgdiv.append(img)
        div.append(imgdiv,name,price,btn)

        voucherList.append(div)


    })

}


function addToPurchased(bag){

    // console.log(userData)
    // console.log(bag)

    if(bag.price < userData.wallet)
    {
        alert("Hurray! purchase successful")
         walletBalance = userData.wallet - bag.price
        
         localStorage.setItem("purchase",JSON.stringify(bag))
         document.getElementById("wallet_balance").innerText=walletBalance
        localStorage.setItem("remaining_balance",JSON.stringify(walletBalance))
    }

    else{
        alert("Sorry! insufficient balance")
    }

}