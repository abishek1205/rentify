const products=[
    {
        id:"car1",
        name:"Audi A8 L 2022",
        image:"src/images/Audi.png",
        price:5000,

    },
    {
        id:"car2",
        name:"Porsche Cayenne GTS 2022",
        image:"src/images/car.png",
        price:5000,

    },
    {
        id:"car3",
        name:"MW X7 M50i 2022",
        image:"src/images/car.png",
        price:5000,

    },
    {
        id:"car4",
        name:"BMW M8 Coupe 2022",
        image:"src/images/BMW.png",
        price:5000,

    },
    {
        id:"car5",
        name:"Porsche Cayenne GTS 2022",
        image:"src/images/Porsche-Cayenne.png",
        price:5000,

    },
    {
        id:"car6",
        name:"Nissan Maxima Platinum 2022",
        image:"src/images/Nissan.png",
        price:5000,

    }
]

let productsHTML=''
products.forEach((product)=>{
productsHTML+=` <div class=" col-lg-4 col-md-6 col-sm-12 column "> 
<img class="product-image" src="${product.image}">
<p class="product-name">${product.name}</p>
<p class="product-cost">
  <span class="span-cost">${product.price}</span>
  /day
</p>
<button class="btn btn-outline-danger rent-button">rent</button>

 
</div>`
})
document.querySelector(".car-row").innerHTML=productsHTML