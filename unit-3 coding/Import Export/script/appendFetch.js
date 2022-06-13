

let getData =async(url)=>{

    let res =await fetch(url)

    let data =await res.json()

    return data
}



let append=(data,container)=>{


    data.forEach((ele)=>{
    // console.log(ele)
    let div=document.createElement("div")
    div.setAttribute("class","child")
    
    let imgdiv=document.createElement("div")
    imgdiv.setAttribute("class","imgdiv")
    let img =document.createElement("img")
    img.src=ele.image
    img.setAttribute("class","imgposter")
    
    let name =document.createElement("h3")
    name.innerText=ele.title;
    
    let price=document.createElement("p")
    price.innerText=ele.category
    
    imgdiv.append(img)
    div.append(imgdiv,name,price)
    
    container.append(div)
    
    
    })
    
    }


    export {getData,append};