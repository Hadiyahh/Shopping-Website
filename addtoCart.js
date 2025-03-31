//Add to cart (Handle by JavaScript)

const cart = [];

function updateProduct(selectedValue, imgElementId, descElementId) {
    const [imagePath, description] = selectedValue.split('|');
    document.getElementById(imgElementId).src = imagePath;
    document.getElementById(descElementId).textContent = description;
}

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    document.getElementById('cart-count').textContent = cart.length;
    alert(`${productName} has been added to your cart.`);
    console.log(cart);
}


function showCart() {
    const cartModal = document.getElementById('cartModal');
    const cartContent = document.getElementById('cart-content');

    if (cart.length === 0) {
        cartContent.innerHTML = "<p>No items in cart yet.</p>";
    } else {
        let contentHTML = "<ul>";
        let total = 0;

        cart.forEach((item, index) => {
        contentHTML += `<li>${item.name} - $${item.price.toFixed(2)}</li>`;
        total += item.price;
        });

        contentHTML += `</ul><p><strong>Total: $${total.toFixed(2)}</strong></p>`;
        cartContent.innerHTML = contentHTML;
    }

    cartModal.style.display = 'block';
    }

    // Close
    function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
    }

    // Close modal when clicking outside of modal content
    window.onclick = function(event) {
    const cartModal = document.getElementById('cartModal');
    if (event.target === cartModal) {
        cartModal.style.display = 'none';
    }
    };
    function updateProduct(value, imgId, descId) {
        const [imgSrc, desc] = value.split('|');
        document.getElementById(imgId).src = imgSrc;
        document.getElementById(descId).innerText = desc;
    }
