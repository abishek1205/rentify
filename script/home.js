import {addToOrder, order} from'../data/order-products.js'
import{products} from'./products.js'


let productsHTML=''
products.forEach((product)=>{
productsHTML+=` <div class=" col-lg-4 col-md-6 col-sm-12 column "> 
<img class="product-image " src="${product.image}">
<p class="product-name">${product.name}</p>
<p class="product-cost">
  <span class="span-cost">₹${product.price}</span>
  /day
</p>
<button class="btn btn-outline-primary rent-button" data-product-id=${product.id}>rent</button>

 
</div>`
})
document.querySelector(".car-row").innerHTML=productsHTML


document.querySelectorAll(".rent-button").forEach((button)=>{
    button.addEventListener('click',()=>{
        let productId = button.dataset.productId
        addToOrder(productId)
        console.log(order)
    }
    )
})


