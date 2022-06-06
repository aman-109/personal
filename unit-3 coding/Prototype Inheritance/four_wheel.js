
// by  Object.create()

 const automobile = {
      brand: "TATA",
      logo: "TATA",
      seller: "TATA AUTO. LTD.",
      // brake_system:"Anti Lock Brakes(ABS)",
      engine:"Diesel",
      door:"four",
      
    };
    
    let p1 = Object.create(automobile);
    automobile.type="MUV"
    automobile.brake_system="Hydraulic Brake"
    automobile.color="black"
    automobile.gear="4"
    automobile.seats="4"

    console.log(p1);



// by Constructor Function

function FourWheelAutomobile(type,color,brake){
  this.type=type;
  this.color=color;
  this.brake_system=brake;
  this.brand= "TATA";
  this.logo= "TATA";
  this.seller= "TATA AUTO. LTD.";
  this.engine="Diesel";
  this.door="four";

}
    
let newTest = new FourWheelAutomobile("SUV","Black","Antilock Brake (ABS)")

console.log(newTest)