

const Api_key ="b16b9ebcfc465e6a163f0529d8cab123";

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


function getData(lat,lon){

    let city =document.getElementById("city").value ;

    // by city
    // let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}`


    //by latitude and longitude

    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&lat=${lat}&lon=${lon}&appid=b16b9ebcfc465e6a163f0529d8cab123`

        // let url =`api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=7&appid=b16b9ebcfc465e6a163f0529d8cab123`

    // console.log(url)

    fetch(url)

    .then(function(res){
        return res.json()
    })
    .then(function(res){
       append(res)
    // console.log(res)
    })

    .catch(function(err){
        console.log(err)
    })

}


function append(data){
    let container =document.getElementById("container")
    container.innerHTML=null

    let name_div=document.getElementById("namediv")
    name_div.innerHTML=null

        let h3 =document.createElement("h3")
        h3.innerText=data.name;
        namediv.append(h3)

        let p1 =document.createElement("p")
        p1.innerText=`Current Temperature: 
        
            
                        ${(data.main.temp-273).toFixed(1)} \u2103`


        let p2 =document.createElement("p")
        p2.innerText= `Max. Temperature:

                
                    ${(data.main.temp_max-273).toFixed(1)} \u2103` 

        let p3 =document.createElement("p")
        p3.innerText= `Min. Temperature: 
        
        
                    ${(data.main.temp_min -273).toFixed(1)} \u2103`
        
        let p4 =document.createElement("p")
        p4.innerText= `Sunrise 🌤️
        
        
                    ${data.sys.sunrise}`

        let p5 =document.createElement("p")
        p5.innerText= `Sunset 🌙
        
        
                    ${data.sys.sunset}`

        let p6 =document.createElement("p")
        p6.innerText= `Wind 💨
        
        
                    ${data.wind.speed} `


        container.append(p1,p2,p3,p4,p5,p6)

    // map appending

        let mapdiv =document.getElementById("map")

        let iframe =document.getElementById("gmap_canvas")
        iframe.src=`https://maps.google.com/maps?q=${data.name}&t=k&z=17&ie=UTF8&iwloc=&output=embed`
        iframe.setAttribute("class","mapclass")

        mapdiv.append(iframe)
}

// https://tile.openweathermap.org/map/pressure_new/3/{x}/{y}.png?appid=b16b9ebcfc465e6a163f0529d8cab123


//  src="https://maps.google.com/maps?q=kdk%20college&t=k&z=17&ie=UTF8&iwloc=&output=embed"


// Based on current location


function getCurrentLocationWeather(){
    navigator.geolocation.getCurrentPosition(success);
    // console.log(success)
    function success(position){

        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        getData(latitude,longitude);

        console.log(position)
        // console.log(latitude);
        // console.log(longitude);
    }
}

getCurrentLocationWeather()