/*
Amar is a singer, lives in Goa.

Akbar is a chef, lives in Mumbai.

Anthony is a Magician, lives in Kashmir.
*/



var obj1={
    name:"Amar",
    place:"Goa",
    skill:"singing",
    skillOperate: function(){
        console.log("Amar has"+" "+this.skill+" "+"skill")
    },
}

var obj2={
    name:"Akbar",
    place:"Mumbai",
    skill:"chef",
    skillOperate: function(){
        console.log("Akbar has"+" "+this.skill+" "+"skill")
    },
}

var obj3={
    name:"Anthony",
    place:"Kashmir",
    skill:"magician",
    skillOperate: function(){
        console.log("Anthony has"+" "+this.skill+" "+"skill")
    },
}

obj1.skillOperate.call(obj2)
obj1.skillOperate.call(obj3)


obj2.skillOperate.call(obj1)
obj2.skillOperate.call(obj3)


obj3.skillOperate.call(obj2)
obj3.skillOperate.call(obj1)




// function skillOne(){
//     this.skill="singing"
// }

// function skillTwo(){
//     this.skill="chef"
// }

// function skillThree(){
//     this.skill="magician"
// }

// skillOne.call(obj2)
// console.log(obj2)

// skillTwo.call(obj1)
// console.log(obj1)

// skillThree.call(obj1)
// console.log(obj1)

// skillOne.call(obj3)
// console.log(obj3)

// skillTwo.call(obj3)
// console.log(obj3)

// skillThree.call(obj2)
// console.log(obj2)