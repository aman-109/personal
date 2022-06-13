//object




// class Car {
//   constructor(n, b) {
//     this.name = n;
//     this.brand = b;
//   }
// }


//Inheritance

// class SUV extends Car{

//     constructor(x,y)
//   {
//    super(x,y)
//      this.buyer="SUV"

//   }
//  }

// //  let s1 =new SUV("Duster","Renault")
// //  console.log('s1:', s1)
//  class miniSUV extends SUV{

//     constructor(x,y)
//     {
//         super(x,y)
//         this.type="miniSUV"
//     }
//  }

//  let m1= new miniSUV("Duster","Renault")
//  console.log('m1:', m1)

//Data Encapsulation

//  class AccountDetails{

//     #AccNum
//     constructor(name,AccType,Acc)
//     {
//         this.Bank=name;
//         this.Type=AccType;
//         this.#AccNum=Acc
//     }
//  }

//  let a= new AccountDetails("ICICI","Saving","12354")
//  console.log('a:', a.#AccNUm)

//Abstraction

// class Employee {
//   constructor() {
//     if (this.constructor == Employee) {
//       throw new Error(" Object of Abstract Class cannot be created");
//     }
//   }
//   display() {
//     throw new Error("Abstract Method has no implementation");
//   }
// }

// class Manager extends Employee {
//   display() {
//     //super.display();
//     console.log("I am a Manager");
//   }
// }
// // var emp = new Employee;
// var mang = new Manager();
// mang.display();

//polymorphism

class TV{
    show(){
        console.log("TV is On")
    }
}

class Pogo extends TV{
    show(){
        console.log("Pogo is On")
    }
}

class News extends TV{

    show(){
        console.log("News is On")
    }
}

let t1=new TV()

let t2=new Pogo()

let t3 = new News()

t2.show()
