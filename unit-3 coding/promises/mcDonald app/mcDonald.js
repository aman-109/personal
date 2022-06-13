


let items = document.querySelectorAll("input[type=checkbox]");


let imgData=["https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Big-Mac-1:1-4-product-tile-desktop",
"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/McVeggie_in_India_1.jpg/353px-McVeggie_in_India_1.jpg",
"https://www.mcdonalds.com/is/image/content/dam/ca/nfl/web/nutrition/products/header/en/mcdonalds-mcchicken.jpg?$Product_Desktop$",
"https://5.imimg.com/data5/VD/KI/MY-33353830/mcdonald-spicy-paneer-wrap-500x500.png",
"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Coca-Cola-Classic-Small-1:product-header-desktop?wid=830&hei=458&dpr=off"
];


//added both img and value into array of object
let clickedArr=[]

for(let i=0;i<items.length;i++)
{
    let addedData={
        name:items[i].value,
        image:imgData[i]
    }

    // console.log(addedData)
    clickedArr.push(addedData)

    localStorage.setItem("All_Items",JSON.stringify(clickedArr))
}
// console.log(clickedArr)




//order button

let All_Items =JSON.parse(localStorage.getItem("All_Items"))


function orderFoodItems(){

    event.preventDefault()

    let orderedFood=document.querySelectorAll("input[type=checkbox]:checked")
    
    let time=Math.floor(2+Math.random()*10);
    // console.log(time)
    // console.log(orderedFood)
    // console.log('All_Items:', All_Items)
    document.getElementById("orderId").innerText=`#${time}`

    let checkedFood=[]
    let count=5;  

    let makePromise = new Promise(function(resolve,reject){


        let x =setInterval(function(){
            // countdown.innerText=null;
            count--;

            let countdown=document.getElementById("countdown");
            countdown.textContent=null;
            countdown.textContent=`Order Serves in ${count} Seconds`

            if(count===0)
            {
                clearInterval(x)
                // countdown.textContent=null;
                countdown.textContent="Order Is Ready! Enjoy Your Food!"

            }

        },1000)


        setTimeout(function(){
            // console.log(All_Items)
            document.getElementById("result").innerHTML=null
            All_Items.map(el=>{
                
                // console.log(el)
                for(let i=0;i<orderedFood.length;i++)
                {
                    
                    // console.log('orderedFood:', orderedFood[i].value)
                    if(el.name===orderedFood[i].value){
                        

                        let div=document.createElement("div")
                        div.setAttribute("id","child")

                        
                        let imgdiv=document.createElement("div")
                        imgdiv.setAttribute("class","orderimg")
                        let img=document.createElement("img")
                        img.src=el.image;
                        img.setAttribute("class","imgpic")

                        imgdiv.append(img)

                        let name =document.createElement("h2")
                        name.innerText=el.name;

                        div.append(imgdiv,name)

                        document.getElementById("result").append(div)

                        checkedFood.push(el)
                    }

                }
            })

            if(checkedFood.length===0)
            {
                reject("Place The Order First!")
            }
            else{
                resolve();
            }


        },5000)



    })

    makePromise.then((res)=>{
        // console.log('checkedFood:', checkedFood)
        console.log("Your Order is Ready!")
    })
    .catch((err)=>{
        console.log('err:', err)
    })

}



