

 async function displayData(name){
    // let name =document.getElementById("foodSearch").value

    const url=`https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`;

    let res = await fetch(url)
    let data =await res.json();

    return data

 }



 let append =(data,container)=>{
    container.innerHTML=null
    console.log(data)
   data.meals.forEach(ele => {
       // console.log(ele)
           let div =document.createElement('div');
           div.setAttribute("class","child")

           let imgdiv=document.createElement("div")
           imgdiv.setAttribute("class","imgdiv")
           
           let img=document.createElement('img')
           img.src=ele.strMealThumb;
           img.setAttribute("class","imgpoter")

           imgdiv.append(img)

           let name=document.createElement('h2')
           name.innerText=ele.strMeal;

           let id=document.createElement('p')
           id.innerText=ele.idMeal


           div.append(imgdiv,name,id);
           container.append(div);
   });

   // document.getElementById("selectFood").value=""
   
};


 export  {displayData,append}