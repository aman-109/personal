// Add the coffee to local storage with key "coffee"


let url= "https://masai-mock-api.herokuapp.com/coffee/menu";
let count=0;
let counter=document.getElementById("coffee_count")||0
let coffeeArr=JSON.parse(localStorage.getItem("coffee"))||[]
let totalAmt=JSON.parse(localStorage.getItem("total_price")) || []

fetch(url)
 .then(function(res){
     return res.json()
 })

 .then(function(res){
    //  console.log(res.menu.data)
    showCoffee(res.menu.data)
 })

 .catch(function(err){
     console.log(err)
 })

function showCoffee(data){

    let coffee_menu=document.getElementById("menu")

    data.forEach(function(ele){
        // console.log(ele)

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

        let bucketBtn=document.createElement("button")
        bucketBtn.innerText="Add to Bucket"
        bucketBtn.setAttribute("id","add_to_bucket")
        bucketBtn.addEventListener("click",function(){
            addBucketFun(ele);
        })

        divbox.append(imgdiv,h3,p,bucketBtn)

        coffee_menu.append(divbox)

    })

  

    function addBucketFun(x){
            // console.log(x)

        coffeeArr.push(x)    
        
        let total = coffeeArr.reduce(function(acc,ele){
            return acc+Number(ele.price)
        },0)

        count++;
        
        counter.innerHTML=count

       localStorage.setItem("total_price",JSON.stringify(total))
        localStorage.setItem("coffee",JSON.stringify(coffeeArr))

    }

    



}


