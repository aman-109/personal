



const api_key="AIzaSyBgEDeZrpkopPSam9bUbBxGsb_B0OF69YI"

let clickedVideo=JSON.parse(localStorage.getItem("video")) || [];
// console.log(clickedVideo)

//mostpopular videos on home

let popularUrl =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=AIzaSyBgEDeZrpkopPSam9bUbBxGsb_B0OF69YI`
fetch(popularUrl)
.then(function(res){
    res.json().then(function(x){
        // console.log(x.items)
        displayData(x.items)

    })

})
.catch(function(err){
    console.log(err)
})



//searched videos on home

let search = async () =>{

    let query =document.getElementById("query").value
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`


    let res = await fetch(url)

    let data =await res.json()
    // console.log(data.items)
    displayData(data.items)

}


//result display function

let displayData=(data)=>{
    

    let container =document.getElementById("results")

    container.innerHTML=null
    data.forEach(({id,id:{videoId},snippet:{title,thumbnails}}) =>{

        // console.log(videoId,title)
        let parentdiv=document.createElement("div")
        parentdiv.setAttribute("class","parentdiv")

        let childdiv=document.createElement("div")
        childdiv.setAttribute("class","childdiv")

        let div =document.createElement("div")
            div.setAttribute("id","divbox")

        let img=document.createElement("img")
        img.src =thumbnails.default.url
        img.setAttribute("class","imgthumb")

    //    let iframe =document.createElement("iframe")

    //    iframe.src=`https://www.youtube.com/embed/${id}`
    //     iframe.allow="fullscreen"

       let h4 =document.createElement("h4");
       h4.innerText=title;
       h4.setAttribute("id","titlename")


       div.append(img)

       let video ={
        title,
        videoId,
        id,
    }

       div.onclick =()=>{
        
           playVideo(video)
       }

       childdiv.append(div,h4)
       
       container.append(childdiv)

    })


};

function playVideo(video){
    clickedVideo.push(video)
    localStorage.setItem("video",JSON.stringify(clickedVideo))

    window.location.href="videoShow.html";
}


//<iframe width="560" 
// height="315"
//  src="https://www.youtube.com/embed/hHNhRB8HPus"
//   title="YouTube video player" 
//   frameborder="0" 
//   allow="accelerometer; autoplay; 
// clipboard-write;
//  encrypted-media; gyroscope; 
// picture-in-picture" allowfullscreen></iframe>