


let arr=[];

let m1= {name:"The Shawshank Redemption",release_date:"1994",poster_url:"https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",IMDB:"9.3"};
let m2=  {name:"Inception",release_date:"2010",poster_url:"https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",IMDB:"8.7"};
let m3= {name:"Jurassic Park",release_date:"1993",poster_url:"https://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg",IMDB:"8.1"};
let m4 ={name:"3 Idiots",release_date:"2009",poster_url:"https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg",IMDB:"8.3"};
let m5={name:"Raatchasan",release_date:"2018",poster_url:"https://upload.wikimedia.org/wikipedia/en/7/77/Ratsasan_poster.jpg",IMDB:"8.1"};
let m6={name:"Gangs of Wasseypur",release_date:"2012",poster_url:"https://upload.wikimedia.org/wikipedia/en/6/6a/Gangs_of_Wasseypur_poster.jpg",IMDB:"8.1"};
let m7={name:"Rockstar",release_date:"2011",poster_url:"https://upload.wikimedia.org/wikipedia/en/6/68/Rockstar-Movie-Poster.jpg",IMDB:"7.6"};
let m8={name:"300",release_date:"2006",poster_url:"https://upload.wikimedia.org/wikipedia/en/5/5c/300poster.jpg",IMDB:"7.6"};
let m9={name:"Master",release_date:"2021",poster_url:"https://upload.wikimedia.org/wikipedia/en/5/53/Master_2021_poster.jpg",IMDB:"7.3"};

arr.push(m1,m2,m3,m4,m5,m6,m7,m8,m9)

localStorage.setItem("movies",JSON.stringify(arr))


