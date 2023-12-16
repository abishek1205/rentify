
export let order=JSON.parse(localStorage.getItem('ordersList'))
if(!order){
    console.log('hi')
    order=[{
        productId:"car1",
        quantity:1
    }]
}

function saveToStorage(){
    localStorage.setItem('ordersList',JSON.stringify(order));
}
export function addToOrder(productId){
        
    let matchinItem = undefined
    order.forEach((item)=>{

    if (productId===item.productId){
    matchinItem=item;

    }
});
if(matchinItem){
    matchinItem.quantity+=1;
}
else{
    order.push({
        productId:productId,
        quantity:1,

    });
}
saveToStorage()
}
export function removeOrder(buttonId){
    order.forEach((item,i)=>{
        console.log(item.productId)
        if (buttonId===item.productId){
            order.splice(i,1)
            console.log(order)
            saveToStorage() 
        }
    })
         
}
    