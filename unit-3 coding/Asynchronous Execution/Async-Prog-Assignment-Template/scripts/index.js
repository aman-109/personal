

// slideshow functionality

let start=0;
let data=[
    "https://occ-0-2686-3647.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSz3AT71P574jeA2d9diBEzjZkHRi9dxhK_BUjycnoOmgAiKy6Qa3K8eNSKhKfd5A8elbpzfu1JgAFjbOaUZXiuAT9GKd-dAisM.jpg?r=b8a",
    "https://occ-0-2686-3647.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRF1ijm7P2-WW_EdZ31bZThluo2w0IVG5FihPETdPR2KV0u0N-dAUjvY3Dtxxe5474k0pqRqTc9_KPMqKsq0u9gfAJCMC-02ReQ.jpg?r=0ed",
    "https://occ-0-2686-3647.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZlAbvuRWAnrE77cVUXmh-md-11z_FthmOLneZdfpIuOmARYuioIv-CDPC74LLBGDmAQGm5b0SXb1Ns0TpNpSrPLc3b6S1x2460.jpg?r=393",
    "https://occ-0-2686-3647.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZfwZdJ7qV7pNQlayOi3Lwn3CDrVD-WhjI4DM4DxcgzKwNzCzJ83VKoYwe-lbNJQkwhipP56xhYVmJnlOBuuCRGJzf40z2H4WGg.jpg?r=7de",
    "https://occ-0-2686-3647.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa7afOATWMKsMzzDLKkFXoynGPB-yc83rrbnx-XIfJuz1xBV6Xx-t4QGHg4yHoi_qwoLto475F4NzFLxx-IUhur2xbmn-gXDH7s.jpg?r=dbf"
];

let parent =document.getElementById("slideshow")

let img =data [start]

let box =document.createElement("img")
box.src = img
box.setAttribute("class","box")

parent.append(box)

start++


let access= setInterval(function(){

if(start===data.length){
    start=0;
}
    
     parent.innerHTML=null;
     img =data [start]

     box =document.createElement("img")
     box.src = img
     box.setAttribute("class","box")

     parent.append(box)

     start++;


 },3000)


//sorting function

document.getElementById("sort-lh").addEventListener("click",sortLH)

function sortLH()
{
    
}


//  Movie DataBase


let movieData=JSON.parse(localStorage.getItem("movies"))


displayMovie(movieData)

function displayMovie(movieData){

    movieData.forEach(function(ele){
        let child=document.createElement("div")
    child.setAttribute("class","child")

    let imgdiv =document.createElement("div")
    imgdiv.setAttribute("class","imgdiv")

    let poster =document.createElement("img")
    poster.src=ele.poster_url;
    poster.setAttribute("class","poster")

    imgdiv.append(poster)

    let movieName=document.createElement("h2")
    movieName.innerText=ele.name

    let releaseDate =document.createElement("p")
    releaseDate.innerText=ele.release_date

    let imdb=document.createElement("p")
    imdb.innerText="IMDB"+"-"+ele.IMDB


    child.append(imgdiv,movieName,releaseDate,imdb)

    document.getElementById("movies").append(child)
    })
    
    
}






