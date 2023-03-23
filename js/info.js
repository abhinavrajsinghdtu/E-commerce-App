let cart=[]
const page = window.open('../index.html')
function addToCart(){
    var uuid=1;
     
let obj={}
console.log(Number(document.getElementById('Price').innerHTML.split(" ")[2]))
let pric=Number(document.getElementById('Price').innerHTML.split(" ")[2])
console.log(pric)
// console.log(document.getElementById('name_of_shoe').textContent)
let size_of_shoes=document.getElementById('size').value  
let name_of_shoe=document.getElementById('name_of_shoe').textContent
console.log("name of shoe",name_of_shoe)

if(!size_of_shoes){
     alert("Please select size of shoes");
}else{

    if(localStorage.getItem('cart')){  
        let data=JSON.parse(localStorage.getItem('cart') || [])
        console.log(`fetching data from the localstorage${data}`);
        let count=0;
        for(let i=0;i<data.length;i++){
            console.log(`data:${data[i]} success`)
            console.log(data[i]);
            if(data[i]['name_of_shoe']===name_of_shoe){   //present in localstorage
                count=1;
                data[i].qty+=1;
                // console.log("data",data[i])
               
                break;
            }else{
                continue
            }
        }
        if(count !=1){
            obj["name_of_shoe"]=name_of_shoe
            obj["size_of_shoes"]=size_of_shoes
            console.log(`pric${pric}`)
            obj["price"]=pric
            obj["qty"]=1
            data.push(obj)
            console.log("added to localstorage")
        }
        localStorage.setItem("cart",JSON.stringify(data));
    }else{
        obj["name_of_shoe"]=name_of_shoe
        obj["size_of_shoes"]=size_of_shoes
        obj["price"]=pric
        obj["qty"]=1
        obj["id"]=uuid
        // cart.push(obj)
        cart.push(obj)
        localStorage.setItem("cart",JSON.stringify(cart));
        uuid++;
    }
    // localStorage.removeItem('cart')
    console.log(window)  


}


}



