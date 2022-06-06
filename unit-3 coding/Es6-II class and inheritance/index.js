



// function Person(n){
//     this.name=n;
   
// }


// Person.prototype.print=function(){
//     console.log(this.name)
// }

// let details =new Person("aman");
// console.log('details:', details)


// class person{
//     constructor(n){
//         this.name=n
        
//     }

//     print(){
//         console.log(this.name)
//     }
// }

// let p1 =new person("aman")
// console.log('p1:', p1)




//  1. Functional programming
// let str ="pizze";

// function pizza(){
//     return "pizza";
// }

// let str= pizza()



//  2. Object Oriented Programming


// let recepie={
//     items:["butter","panner"],
//     cook: function(){
//         console.log(`cooking ${this.items[0]} ${this.items[1]}`);
//     },
// }

// recepie.cook()




//Stack :
//length,push,pop,peak


// class Stack{

//     constructor(){
//         this.length=0;
//         this.stack=[];
//     }

//     push(el){
//         this.stack[this.length]=el;
//         this.length++;
//     }
//     pop(){
//          this.stack.pop()
//         this.length--;
//     }

//     peak(){
//         return this.stack[this.length-1];
//     }

// }

// let s1 =new Stack();
// s1.push(1)
// s1.push(3)

// console.log('s1.peak():', s1.peak())
// console.log('s1:', s1)
// s1.pop()
// console.log('s1:', s1)



//Inheritance


//object.create(), protoype inheritance


class Mobile{      //Blueprint
    constructor(b,bt){
        this.brand =b;
        this.calling=true;
        this.battery=bt;
    }
}

let m1 =new Mobile("mi","5000mAh")
console.log('m1:', m1)


class SmartPhone extends Mobile{
    constructor(b,bt,c,s){
        super(b,bt);
        this.camera=c;
        this.screeSize=s;
    }
}

let m2=new SmartPhone("mi","5000mAh","20px","5.5inch")
console.log('m2:', m2)