


class Vehicle{

    constructor(type,regNum,color)
    {
        this._type=type;
        this._regNumber=regNum;
        this._color=color;
    }

    get type(){
        return this._type;
    }

    set type(value){
        this._type =value;
    }
}

//Car

class Car extends Vehicle{
    constructor(regNum,color)
    {
        super("car",regNum,color);
    }
}

// let c1=new Car("Dl-1234","Red");
// console.log('c1:', c1);


//Bike

class Bike extends Vehicle{
    constructor(regNum,color)
    {
        super("bike",regNum,color);
    }
}

// let b1=new Car("Dl-8234","Black");
// console.log('b1:', b1);


//Truck

class Truck extends Vehicle{
    constructor(regNum,color)
    {
        super("truck",regNum,color);
    }
}

// let t1=new Car("Dl-89234","orange");
// console.log('t1:', t1);



//Parking Slots


class Slot{
    constructor(type,number)
    {
        this.type=type;
        this.number=number;
        this._isBooked =false;
    }

    get isBooked()
    {
        return this._isBooked;
    }

    set isBooked(value){
        this._isBooked=value;
    }
}



//Parking Floor

class ParkingFloor{
    constructor(floorNumber,maxSpots){
        this.floorNumber=floorNumber;
        this._parkingSpots =[];

        for(let i=0;i<maxSpots;i++)
        {
            if(i===0)
            {
                this._parkingSpots.push(new Slot("car",i))
            }
            else if(i===0)
            {
                this._parkingSpots.push(new Slot("bike",i))
            }
            else
            {
                this._parkingSpots.push(new Slot("truck",i))
            }
        }
    }

    get parkingSpots(){
        return this._parkingSpots;
    }

    set parkingSpots(value){
        this._parkingSpots=value
    }
}


// let p1 =new ParkingFloor(0,3);
// console.log('p1:', p1)


// Parking Lot / whole building


class ParkingLot{
    constructor(number){
        this._floors =[];
        this._numberOfFloors =number;

        for(let i=0;i<number;i++)
        {
            this._floors.push(new ParkingFloor(i,3));
        }
    }

    get numberOfFloors(){
        return this._numberOfFloors
    }

    get floors(){
        return this._floors;
    }

    parkVehicle(Vehicle){
        let slot =this.findSlot(vehicle.type);

        if(slot){
            this.bookSlot(slot);
            let ticket=new Ticket(slot.floorNumber,slot.slot.number);
            console.log("Ticket:",ticket);

        }
        else{
            console.log("No slots")
            return false
        }
    }


    findSlot(type){
        for(let i=0;i<this._numberOfFloors;i++){
            for(let slot of this._floors[i]._parkingSpots){
                if(slot.type === type && !slot.isBooked){
                    return {floorNumber: i , slot:slot};
                }
            }
        }
        return false;
    }


    bookSlot(slot){
        slot.slot.isBooked=true;

        console.log("Slot is Booked");
        return true
    }
}


// let pl1 = new ParkingLot(3);

// console.log(pl1)


//Ticket

class Ticket{
    constructor(floorNumber,slotNumber)
    {
        this.floorNumber=floorNumber;
        this.slotNumber=slotNumber;
        this.issuedAt= new Date();
    }
}

