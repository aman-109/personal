

const Api_key ="b16b9ebcfc465e6a163f0529d8cab123";

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


function getData(lat,lon){

    let city =document.getElementById("city").value ;

    // by city
    // let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}`


    //by latitude and longitude

    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&lat=${lat}&lon=${lon}&appid=b16b9ebcfc465e6a163f0529d8cab123`


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

    // let res =await fetch(url);

    // let data =await res.json();


}


function append(data){
    let container =document.getElementById("container")
    container.innerHTML=null

        let h3 =document.createElement("h3")
        h3.innerText=data.name;

        let p1 =document.createElement("p")
        p1.innerText=`Current Temperature: ${data.main.temp}`


        let p2 =document.createElement("p")
        p2.innerText= `Max. Temperature: ${data.main.temp_max}` 

        let p3 =document.createElement("p")
        p3.innerText= `Min. Temperature: ${data.main.temp_min}` 


        container.append(h3,p1,p2,p3)


        let iframe =document.getElementById("gmap_canvas")
        iframe.src=`https://maps.google.com/maps?q=${data.name}&t=k&z=17&ie=UTF8&iwloc=&output=embed`


}


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