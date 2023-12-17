import {order,removeOrder } from '../data/order-products.js'
import{products} from'../script/products.js'

console.log(order)
let orderHTML=''

order.forEach((item)=> {
    let matchingItem;
    products.forEach((product)=>{
        if(product.id==item.productId){
            matchingItem=product;

        }

    })
    orderHTML+=`
    <div class="row row-car  car-${matchingItem.id} ">
    <div class="col-lg-6 col-md-12">
    <img  src=${matchingItem.image} class="mt-3 product-image" alt="">
    <div class="container">
        <div class="row">
            <div class="col-md-3 ">
                <img class="star-ratings" src="src/ratings/rating-${matchingItem.review.stars *10}.png " alt="">

            </div>
            <div class="col-md-3">
                <h2 class="review">(${matchingItem.review.rating})</h2>
            </div>
            <h3 class="quantity">quantity: <button class="btn btn-outline-primary" >${item.quantity}</button>
            

        </div>
    </div>
</div>
<div class="col-lg-6 col-md-12  ">
    <h2 class="name lg-mt-5">Name:<span class="text-primary">${matchingItem.name}</span></h2>
    <h2 class="price">price: <span class="price-span " ></span>rs ${matchingItem.price}</h2>
    <div class="date">
        <h2 class="date-heading">Date</h2>
        <input type="date" >
        <select name="place" id="1" class="form-select w-50">
        <option value="option">--select--</option>
        <option value="avadi">Avadi</option>
        <option value="Amabttur">Amabttur</option>
        <option value="Thirumullaivoyal">Thirumullaivoyal</option>
        <option value="kattupakkam">Kattupakkam</option>
      </select>

    </div>
    <div class="buttons my-4">
    <button class="btn btn-outline-primary w-25  ">Book</button>
    <button class="btn btn-outline-danger w-25 js-delete-button" data-product-id=${matchingItem.id} >Delete</button>
    </div>
</div>
</div>

`

})


document.querySelector(".product-row").innerHTML=orderHTML

document.querySelectorAll(".js-delete-button").forEach((button)=>{
    button.addEventListener('click',()=>{
        let buttonId =button.dataset.productId 
        removeOrder(buttonId)
        document.querySelectorAll(`.car-${buttonId}`).forEach((column)=>{
            column.remove()
        })
        
    })
})

