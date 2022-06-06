

let productArr = JSON.parse(localStorage.getItem("products"))

// console.log(productArr)

display(productArr)

function display(productArr)
{
   productArr.forEach(function(ele,indx){
      let child=document.createElement("div")
    child.setAttribute("class","child")

    let imgdiv=document.createElement("div")
    imgdiv.setAttribute("class","imgdiv")


    let poster=document.createElement("img")
    poster.src=ele.image
    poster.setAttribute("class","posterimg")

    imgdiv.append(poster)


    let category=document.createElement("h2")
    category.innerText=ele.type


    let descrpt=document.createElement("p")
    descrpt.innerText=ele.desc
    descrpt.style.color="gray"

    let amount=document.createElement("p")
    amount.innerText="₹"+" "+ ele.price

    // remove button 
    let btn =document.createElement("button")
    btn.innerText="Remove"
    btn.addEventListener("click",function(){
        removeFun(ele,indx)
    })
    btn.style.color="red"

// append part
    child.append(imgdiv,category,descrpt,amount,btn)

    document.getElementById("all_products").append(child)
    

   })
 

  
}

//    remove button functionality
function removeFun(ele,indx){
    productArr.splice(indx,1)
     localStorage.setItem("products",JSON.stringify(productArr))
     window.location.reload();
}


// add more product button 

document.getElementById("add_more_product").addEventListener("click",addProductFun)

function addProductFun(){
    window.location.href="index.html"
}

