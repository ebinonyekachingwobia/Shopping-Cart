document.addEventListener("DOMContentLoaded", function() {
    const plusButtons = document.querySelectorAll(".fa-plus-circle");
    const minusButtons = document.querySelectorAll(".fa-minus-circle");
    const deleteButtons = document.querySelectorAll(".fa-trash-alt");
    const likeButtons = document.querySelectorAll(".fa-heart");

    // Add event listeners for plus buttons
    plusButtons.forEach(button => {
        button.addEventListener("click", function() {
            const quantityElement = button.parentElement.querySelector(".quantity");
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            updateTotalPrice();
        });
    });

    // Add event listeners for minus buttons
    minusButtons.forEach(button => {
        button.addEventListener("click", function() {
            const quantityElement = button.parentElement.querySelector(".quantity");
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 0) {
                quantity--;
                quantityElement.textContent = quantity;
                updateTotalPrice();
            }
        });
    });

    // Add event listeners for delete buttons
    deleteButtons.forEach(button => {
        button.addEventListener("click", function() {
            const cardBody = button.closest(".card-body");
            cardBody.parentElement.remove();
            updateTotalPrice();
        });
    });

    // Add event listeners for like buttons
    likeButtons.forEach(button => {
        button.addEventListener("click", function() {
            button.classList.toggle("liked");
        });
    });

    // Function to update total price
    function updateTotalPrice() {
        let totalPrice = 0;
        const unitPrices = document.querySelectorAll(".unit-price");
        const quantities = document.querySelectorAll(".quantity");
        unitPrices.forEach((unitPrice, index) => {
            const price = parseFloat(unitPrice.textContent.replace("$", ""));
            const quantity = parseInt(quantities[index].textContent);
            totalPrice += price * quantity;
        });
        document.querySelector(".total").textContent = totalPrice.toFixed(2) + " $";
    }
});
