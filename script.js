// Function to adjust the quantity of each item through "+" and "-" buttons
function updateQuantity(button, operation) {
    const input = button.parentNode.querySelector('input[type=number]');
    let quantity = parseInt(input.value);
    if (operation === '+') {
        input.stepUp(); 
    } else if (operation === '-' && quantity > 1) {
        input.stepDown(); 
    }

    updateCartSummary()
}


// Function to delete items from the cart
function deleteCartItem(i) {
  
    
        const cartItem = document.getElementById (i)
        cartItem.remove();
        updateCartSummary();
    
}

// Function to like items through a clickable heart-shaped button that will change color accordingly
function likeItem(i) {
    const heartButton = document.getElementById(i).querySelector('.fa-heart');
    heartButton.classList.toggle('text-danger');
}


// Function to update the cart summary
function updateCartSummary() {
    var amd = document.getElementById("amd-price")
    var nvd = document.getElementById("nvd-price")
    console.log( parseFloat(nvd.innerHTML));
    var quantity_amd = document.getElementById("form").value
    var quantity_nvd = document.getElementById("form1").value

   var totalPrice = parseFloat(nvd.innerHTML)*quantity_nvd+parseFloat(amd.innerHTML)*quantity_amd
    // document.getElementById('total-quantity').innerHTML = totalQuantity;
    document.getElementById('total-price').innerHTML = totalPrice.toFixed(2); 
}

document.addEventListener('click', function(event) {
    if (event.target.matches('.minus-btn')) {
        updateQuantity(event.target, '-');
    } else if (event.target.matches('.plus-btn')) {
        updateQuantity(event.target, '+');
    } else if (event.target.matches('.delete-btn')) {
        deleteCartItem(event.target);
    } else if (event.target.matches('.like-btn')) {
        likeItem(event.target);
    }
});

