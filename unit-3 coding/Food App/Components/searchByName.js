
 async function display(name){
    // let name =document.getElementById("foodSearch").value

    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;

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

                let vt=document.createElement('h3')
                vt.innerText=ele.strTags;


                let vid=document.createElement('h2')
                vid.innerText=ele.strMeal;

                let id=document.createElement('p')
                id.innerText=ele.idMeal

                let area=document.createElement('p')
                area.innerText=ele.strArea;

                let cat=document.createElement('p')
                cat.innerText=ele.strCategory;

                div.append(imgdiv,vt,vid,id,area,cat);
                container.append(div);
        });
        
};

export  {display,append}