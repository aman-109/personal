// On clicking remove button the item should be removed from DOM as well as localstorage.


let coffee_data = JSON.parse(localStorage.getItem("coffee"))|| []

let totalAmt =JSON.parse(localStorage.getItem("total_price")) || []

document.getElementById("total_amount").innerText=totalAmt

display(coffee_data)


//bucket display function
function display(data){

    // console.log(data)
    let bucketlist=document.getElementById("bucket")


    data.forEach(function(ele,indx){
        
        let divbox =document.createElement("div")
        divbox.setAttribute("class","divbox")

        let h3=document.createElement("h3")
        h3.innerText=ele.title

        let imgdiv=document.createElement("div")
        imgdiv.setAttribute("class","imgdiv")

        let img=document.createElement("img")
       img.src=ele.image
       img.setAttribute("class","coffeeImg")

       imgdiv.append(img)

        let p=document.createElement("p")
        p.innerText=ele.price

        let removeBtn=document.createElement("button")
        removeBtn.innerText="Remove"
        removeBtn.setAttribute("id","remove_coffee")
        removeBtn.addEventListener("click",function(){
            removeBtnFun(ele,indx,ele.price);
        })

        divbox.append(imgdiv,h3,p,removeBtn)

        bucketlist.append(divbox)
    })

// remove item functionality

    function removeBtnFun(ele,indx,p){

        coffee_data.splice(indx,1)

        let cut_price=totalAmt-p;

        localStorage.setItem("coffee",JSON.stringify(coffee_data))
        localStorage.setItem("total_price",JSON.stringify(cut_price))

        window.location.reload()
    }
}


// checkout functionality

function checkoutFunct(){
    window.location.href="./checkout.html"
}

