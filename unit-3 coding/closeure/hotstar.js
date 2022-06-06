


function clickSearch(){
    let movieName= document.getElementById("title").value
    const url=`http://www.omdbapi.com/?t=${movieName}&apikey=2c6bffa9&`

    fetch(url)
        .then(function(res){
            return res.json()
        })
        .then(function(res){
            showMovie(res)
            // console.log(res)

        })
        .catch(function(err){
            console.log(err)
           
        })
       


}


function showMovie(ele){

    let container=document.getElementById("container")

    if(ele.Response==="True"){

        container.innerHTML=null

        let divbox=document.createElement("div")
        divbox.setAttribute("class","divbox")

        let imgdiv =document.createElement("div")
        imgdiv.setAttribute("class","imgdiv")

        let img =document.createElement("img")
        img.src=ele.Poster
        img.setAttribute("class","imagecss")

        imgdiv.append(img)

        let name =document.createElement("h2")
        name.innerText=ele.Title

        let released =document.createElement("p")
        released.innerText=ele.Released

        let imdb =document.createElement("p")
        imdb.innerText=ele.imdbRating

        // console.log(imdb.innerText)
        if(imdb.innerText >8.5){
            imdb.innerText=`IMDB-${ele.imdbRating}⭐ Recommended`

        }
        else{
            imdb.innerText=`IMDB-${ele.imdbRating}`

        }

        let runtime =document.createElement("p")
        runtime.innerText=ele.Runtime

        
        divbox.append(imgdiv,name,released,imdb,runtime)
        
               container.append(divbox)
    }

    else
    // if(ele.Response==="False")
    {
        

         let errorimg=document.getElementById("errorimg")

         errorimg.src="https://c.tenor.com/csb2e86unZcAAAAM/ardcollegeno000%21-god%21-no-god.gif"


    }
   


}



