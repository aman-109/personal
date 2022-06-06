

function newArr() {

    Object.defineProperty(this,"length",{
        value:0,
        writable:true,
        enumerable:false,
    })
  this.length = arguments.length;

  for (let i = 0; i < arguments.length; i++) {
    this[i] = arguments[i];
  }

}


let arr= new newArr(1, 2, 3, 4, 5);

console.log(Object.values(arr))


// push method

newArr.prototype.push = function(value){
    this[this.length]=value;
    this.length++;
}

arr.push(3)
console.log(Object.values(arr))

//pop method

newArr.prototype.pop =function(){
   delete this[this.length-1]
    this.length--;
}

arr.pop()
console.log(Object.values(arr))


// top method

newArr.prototype.top = function(){
  return this[this.length-1]
}


console.log(arr.top())


// print method

newArr.prototype.print = function(){
  console.log(Object.values(this))
}

arr.print()


// reversePrint method

newArr.prototype.reversePrint = function(){
  let bag=""
  for(let i=this.length-1;i>=0;i--)
  {
    bag =bag+ this[i]
  }
  console.log(bag)
}

arr.reversePrint()


//length method

newArr.prototype.lengthStack = function(){
   console.log(this.length)
}

arr.lengthStack()