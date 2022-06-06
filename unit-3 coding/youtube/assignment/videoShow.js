


let clickedVideo=JSON.parse(localStorage.getItem("video")) 

// console.log(clickedVideo)

displayFun(clickedVideo)

 function displayFun(data){

    

    let container=document.getElementById("videoShow")
   

    // console.log(data[data.length-1])
    data.forEach(({id,videoId,title}) =>{

        container.innerHTML=null
        // console.log(videoId,title)
        // console.log(id,title)
        let childdiv=document.createElement("div")
        childdiv.setAttribute("class","childdiv")

        let div =document.createElement("div")
            div.setAttribute("id","divbox")

    
       let iframe =document.createElement("iframe")

       if(id){
        iframe.src=`https://www.youtube.com/embed/${id}`

       }
      if(videoId){
        iframe.src=`https://www.youtube.com/embed/${videoId}`

       }
        iframe.allow="fullscreen"
        iframe.setAttribute("class","iframeclass")

       let h4 =document.createElement("h4");
       h4.innerText=title;
       h4.setAttribute("id","titlename")


       div.append(iframe)


       childdiv.append(div,h4)
       
       container.append(childdiv)


    })
    // data.forEach((ele,indx) =>{

    //     console.log(ele)
    // })

}



