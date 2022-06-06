


// const url ="https://reqres.in/api/users";//destination

// fetch(url) //fetch needs destination

// .then(function(res){
   
//   return res.json()
// })
// .then(function(res){
//       console.log(res.data)
//   })

// .catch(function(err){

// console.log(err)

// })



// async function checkData(){

//     try{
//         let res = await fetch(url)

//         let check= await res.json()
    
//         // console.log(check)
//         append(check.data)
//     }
//     catch(err){
//     console.log('err:', err)
//     }
   
// }

// checkData()



// function append(data){
//     let container=document.getElementById("container")
//     data.forEach(function(ele){
//         let img =document.createElement("img")
//         img.src=ele.avatar

//         let h2 =document.createElement("h2")
//         h2.innerText=ele.first_name;

//         let p=document.createElement("p")
//         p.innerText=ele.mail;

//         let div=document.createElement("div")
//         div.append(img,h2,p)

//        container.append(div)

//     })
// }


const url="https://fakestoreapi.com/products"


async function checkData(){

        try{
            let res = await fetch(url)
    
            let products= await res.json()
        
            // console.log(products)

            append(products)
        }
        catch(err){
        console.log('err:', err)
        }
       
    }

    checkData()


    function append(data){

        let container=document.getElementById("container")
        data.forEach(function(ele){

            let img =document.createElement("img")
            img.src=ele.image

            let name =document.createElement("h2")
            name.innerText=ele.category

            let desc =document.createElement("p")
            desc.innerText=ele.description

            let div=document.createElement("div")
                    div.append(img,name,desc)
            
                   container.append(div)
        })
    }