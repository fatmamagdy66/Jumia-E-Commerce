const products = [
    { id: 0, name: "iPhone", price: 100, oldPrice: 1000, imageUrl: "https://fakeimg.pl/50x50/ff0000,128/000,255", },
    { id: 1, name: "3D Back Glue Wall Stickers", price: 10, oldPrice: 100, imageUrl: "https://fakeimg.pl/50x50/ff0000,128/000,255", },
    { id: 2, name: "Karimed Brilliant Touch Shower Gel", price: 20, oldPrice: 100, imageUrl: "https://fakeimg.pl/50x50/ff0000,128/000,255", },
    { id: 3, name: "Dettol Skin Care Antibacterial", price: 30, oldPrice: 100, imageUrl: "https://fakeimg.pl/50x50/ff0000,128/000,255", }
];

// Initialize cart
let cart = [];

// Function to display products
function displayProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("card", "border-light", "mb-3");
        productCard.innerHTML = `
        <div class="card border-light">
          <div class="row g-0">
            <div class="col-7">
                <div class="col-3">
                  <img src="${product.imageUrl}" class="img-fluid rounded-start" alt="img">
                </div>              
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                <button type="button" class="btn  _pd increase-quantity" ><i class="fas fa-solid fa-trash" onclick='deleteEle(${product.id})'> Remove</i></button>
            </div>
            <div class="col-5">
                <div class="card-body">
                    <div style="margin:20%;">
                     <p class="card-text">$${product.price.toFixed(2)}</p>
                     <p class="card-text old">$${product.oldPrice.toFixed(2)}</p>
                    </div>
                    <br /><br /><br/>
                    <div class="col-1 d-flex align-items-center">
                      <button type="button" class="btn _prim _pd decrease-quantity" onclick='updateCaseNumber("phone",${product.price}, true);'>
                        <i class="fas fa-plus"></i>
                      </button>
                      <input id="phone-number" type="number" min="0" class="form-control text-center" style="width:70px;" value="1">
                      <button type="button" class="btn _prim _pd increase-quantity" onclick='updateCaseNumber("phone",${product.price}, false);'><i class="fas fa-minus"></i></button>
                    </div> 
                </div>
            </div>
          </div>
        </div>`;
        productList.appendChild(productCard);
    });
}

function updateCaseNumber(product, price, isIncreasing) {
    const caseInput = document.getElementById(product + '-number');
    let caseNumber = caseInput.value;
    if (isIncreasing) {
        caseNumber = parseInt(caseNumber) + 1;
    } else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }

    caseInput.value = caseNumber;
    // update case total 
    let total = 0;
    cart.forEach(item => {
        total += item.price;
    });
    document.getElementById('Sub-total').textContent = `$${total.toFixed(2)}`;
    // const caseTotal = document.getElementById('Sub-total');
    // caseTotal.innerText = caseNumber * price;
    calculateTotal(price);
}

function deleteEle(id) {
    const index = products.findIndex(product => product.id === id);
    products.splice(index, 1);
    displayProducts();
}

function getInputvalue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal(price) {
    let total = 0;
    const phoneTotal = getInputvalue('phone') * price;
    // const caseTotal = getInputvalue('case') * 59;
    const subTotal = phoneTotal;
    // const tax = subTotal / 10;
    // const totalPrice = subTotal + tax;

    // update on the html 
    document.getElementById('Sub-total').innerText = `$${subTotal.toFixed(2)}`;
}

displayProducts();



// window.addEventListener('scroll', function() {
//     const cartSummary = document.querySelector('.cart-summary');
//     const topSellingSection = document.querySelector('.container.my-5');
    
//     const cartSummaryHeight = cartSummary.offsetHeight;
//     const topSellingSectionTop = topSellingSection.getBoundingClientRect().top;
    
//     if (topSellingSectionTop < cartSummaryHeight) {
//         cartSummary.style.position = 'absolute';
//         cartSummary.style.top = `${topSellingSectionTop - cartSummaryHeight}px`;
//     } else {
//         cartSummary.style.position = 'fixed';
//         cartSummary.style.top = 'auto';
//     }
// });




const topSellingItems = [
    { id: 1, name: "Top Selling Product 1", imageUrl: "https://fakeimg.pl/200x200/ff0000,128/000,255", price: 50 },
    { id: 2, name: "Top Selling Product 2", imageUrl: "https://fakeimg.pl/200x200/ff0000,128/000,255", price: 60 },
    { id: 3, name: "Top Selling Product 3", imageUrl: "https://fakeimg.pl/200x200/ff0000,128/000,255", price: 70 },
    { id: 4, name: "Top Selling Product 3", imageUrl: "https://fakeimg.pl/200x200/ff0000,128/000,255", price: 70 },
    { id: 5, name: "Top Selling Product 3", imageUrl: "https://fakeimg.pl/200x200/ff0000,128/000,255", price: 70 },
    { id: 6, name: "Top Selling Product 3", imageUrl: "https://fakeimg.pl/200x200/ff0000,128/000,255", price: 70 }
];

// Sample data for top selling items (replace with actual data)


// Function to display top selling items
function displayTopSellingItems() {
    const topSellingItemsContainer = document.getElementById("top-selling-items");
    topSellingItemsContainer.innerHTML = ""; // Clear previous items

    topSellingItems.forEach(item => {
        const col = document.createElement("div");
        col.classList.add("col-md-4", "mb-4");

        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = item.imageUrl;
        img.classList.add("card-img-top");
        img.alt = item.name;

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.textContent = item.name;

        const price = document.createElement("p");
        price.classList.add("card-text");
        price.textContent = `$${item.price.toFixed(2)}`;

        cardBody.appendChild(title);
        cardBody.appendChild(price);

        card.appendChild(img);
        card.appendChild(cardBody);

        col.appendChild(card);

        topSellingItemsContainer.appendChild(col);
    });
}

// Initial display of top selling items
displayTopSellingItems();