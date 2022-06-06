//store the products array in localstorage as "products"


// constructor function to create object
function CheckProd(a,b,c,d)
{
    this.type=a;
    this.desc=b;
    this.price=c;
    this.image=d;

}



function addProd(event){

    event.preventDefault()

    let form=document.getElementById("products")

    // form data collection
    
        let type=products.type.value;
        let desc=products.desc.value;
        let price=products.price.value;
        let image=products.image.value;
    //    console.log(type)
   
    let val = new CheckProd(type,desc,price,image)
  
    // console.log(val)
    let productArr =JSON.parse(localStorage.getItem("products")) || [];

    productArr.push(val)

    localStorage.setItem("products",JSON.stringify(productArr))

    // emptying the input after submitting
    document.getElementById("products").innerText=""
    window.location.reload();

}

// show products button catching
document.getElementById("show_products").addEventListener("click",showFunct)

// function that works after click 
function showFunct(){
        window.location.href="inventory.html"
}