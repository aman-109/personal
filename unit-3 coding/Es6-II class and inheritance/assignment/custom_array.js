



class Array{

    constructor(){
        Object.defineProperty(this,"length",{
        value:0,
        writable:true,
        enumerable:false,
    })
        this.length = arguments.length;

        for(let i=0;i<arguments.length;i++)
        {
            this[i]=arguments[i];
        }
       
    }

    push(el){
        this[this.length]=el;
        this.length++;
    }
    pop(){
        delete this[this.length-1]
        this.length--;
    }

    top(){
        return this[this.length-1];
    }

    print(){
        return Object.values(this)
    }

    reverse(){
        let bag=""
        for(let i=this.length-1;i>=0;i--)
        {
            bag +=this[i]+" ";
        }
        console.log("reverse():",bag)
    }

    size(){
        return this.length
    }

}

let a1 =new Array(1,2,3);

console.log(Object.values(a1))

//push
a1.push(4)
console.log(a1)

//pop
a1.pop()
console.log(a1)

//top
console.log('a1.top():', a1.top())

//print

console.log('a1.print():', a1.print())


//reverse

a1.reverse()

//size

console.log('a1.size():', a1.size())