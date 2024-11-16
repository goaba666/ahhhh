let cart = [];
let cartTotal = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    cartTotal += price;
    document.getElementById("cart-count").innerText = cart.length;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
        const itemElement = document.createElement("li");
        itemElement.innerText = `${item.name} - R$ ${item.price.toFixed(2)}`;
        
        const removeButton = document.createElement("button");
        removeButton.innerText = "Remover";
        removeButton.onclick = () => removeFromCart(index);
        
        itemElement.appendChild(removeButton);
        cartItems.appendChild(itemElement);
    });

    document.getElementById("cart-total").innerText = cartTotal.toFixed(2);
}

function removeFromCart(index) {
    cartTotal -= cart[index].price;
    cart.splice(index, 1);
    document.getElementById("cart-count").innerText = cart.length;
    updateCart();
}

function toggleCart() {
    document.getElementById("cart").classList.toggle("hidden");
}

function checkout() {
    alert("Compra finalizada! Total: R$ " + cartTotal.toFixed(2));
    cart = [];
    cartTotal = 0;
    document.getElementById("cart-count").innerText = 0;
    updateCart();
    toggleCart();
}
