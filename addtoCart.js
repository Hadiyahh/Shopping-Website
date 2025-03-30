//Add to cart (Handle by JavaScript)

// Array to store cart items
const cart = [];

// Function to add items to cart
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    alert(`${productName} has been added to your cart!`);
    console.log("Cart:", cart);
}

// Function to update image and description dynamically based on color selection
function updateProduct(selectedValue, imgElementId, descElementId) {
    const [imagePath, description] = selectedValue.split('|');
    document.getElementById(imgElementId).src = imagePath;
    document.getElementById(descElementId).textContent = description;
}
