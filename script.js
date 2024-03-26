let container = document.getElementById("product_list_1");


//  product list array 1 

let products1 = [
    { name: "Sports Back Cap", price: 39.00, imageUrl: "images/prod1.png" },
    { name: "Fully Jersy Set", price: 69.00, imageUrl: "images/prod2.png" },
    { name: "Sports Cates", price: 159.00, imageUrl: "images/prod3.png" }
];


// product view function 

function renderProductCards() {
    container.innerHTML = "";
    products1.forEach(function (product) {
        let productCardHTML = ` <div onclick="addToCart('${product.name}', ${product.price})" class="cursor-pointer card w-80 h-96 bg-base-100 shadow-2xl shadow--200">
            <figure class="bg-gray-200 m-6 w-auto h-56 rounded-lg ">
            <img src="${product.imageUrl}" alt="${product.name}" /></figure>
            <div class="card-body text-center mb-4">
                <div class="text-center text-xl mb-2">
                    <i class="fa-solid fa-star text-orange-400"></i>
                    <i class="fa-solid fa-star text-orange-400"></i>
                    <i class="fa-solid fa-star text-orange-400"></i>
                    <i class="fa-solid fa-star text-orange-400"></i>
                    <i class="fa-regular fa-star text-orange-400"></i>

                </div>
                <p class="text-2xl font-semibold">${product.name}</p>
                <h4 class="text-gray-500">${product.price} TK</h4>

            </div>
        </div> 
    </div>
            `;
        container.innerHTML += productCardHTML;
    });
}

renderProductCards();

let cart = [];

// Function to add product to cart
function addToCart(name, price) {
    cart.push({ name: name, price: price });
    updateCartSummary();
}


function updateCartSummary() {
    let totalPrice = 0;
    cart.forEach(function (product) {
        totalPrice += product.price;
    });

    //  discount of 10%
    let discount = totalPrice * 0.1;
    let total = totalPrice - discount;

    // Update subtotal
    document.getElementById("totalPrice").textContent = totalPrice.toFixed(2) + " TK";
    document.getElementById("discount").textContent = discount.toFixed(2) + " TK";
    document.getElementById("total").textContent = total.toFixed(2) + " TK";

    renderProductCards();

}


