const products = [
    { name: "Smartphone", price: 14999, img: "https://via.placeholder.com/200", desc: "Latest phone" },
    { name: "Laptop", price: 54999, img: "https://via.placeholder.com/200", desc: "High performance laptop" },
    { name: "Headphones", price: 1999, img: "https://via.placeholder.com/200", desc: "Noise cancelling" },
    { name: "Smart Watch", price: 3499, img: "https://via.placeholder.com/200", desc: "Fitness tracking" }
];

let cart = [];

const productList = document.getElementById("productList");

function displayProducts(items) {
    productList.innerHTML = "";
    items.forEach((p, i) => {
        productList.innerHTML += `
        <div class="card">
            <img src="${p.img}" onclick="showDetails(${i})">
            <h3>${p.name}</h3>
            <p>₹${p.price}</p>
            <button onclick="addToCart(${i})">Add to Cart</button>
        </div>`;
    });
}
displayProducts(products);

function addToCart(i) {
    cart.push(products[i]);
    updateCart();
}

function updateCart() {
    document.getElementById("cartCount").innerText = cart.length;
    let total = 0;
    let items = document.getElementById("cartItems");
    items.innerHTML = "";
    cart.forEach((c, i) => {
        total += c.price;
        items.innerHTML += `<li>${c.name} - ₹${c.price} <button onclick="removeItem(${i})">❌</button></li>`;
    });
    document.getElementById("total").innerText = total;
}

function removeItem(i) {
    cart.splice(i,1);
    updateCart();
}

function toggleCart() {
    toggle("cartModal");
}

function toggleAuth() {
    toggle("authModal");
}

function checkout() {
    toggle("checkoutModal");
    cart = [];
    updateCart();
}

function closeCheckout() {
    toggle("checkoutModal");
}

function toggle(id) {
    let el = document.getElementById(id);
    el.style.display = el.style.display === "block" ? "none" : "block";
}

function toggleDark() {
    document.body.classList.toggle("dark");
}

function searchProduct() {
    let v = searchInput.value.toLowerCase();
    displayProducts(products.filter(p => p.name.toLowerCase().includes(v)));
}

function showDetails(i) {
    let p = products[i];
    let modal = document.getElementById("productModal");
    modal.innerHTML = `
        <h2>${p.name}</h2>
        <p>${p.desc}</p>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${i})">Add to Cart</button>
        <button onclick="toggle('productModal')">Close</button>`;
    modal.style.display = "block";
}


