const cartItem = [];
const addItemBtns = document.querySelectorAll(".add-item-btn");
const cart = document.querySelector(".cart");

const addItems = (array) => {
  addItemBtns.forEach((el) => {
    el.addEventListener("click", (e) => {
      const item = array.find((item) => item.name.replace(/[\s]/g, "-") === e.target.id);
      
      if (item) {
        // Display dialog
        document.querySelector(".dialog").style.display = "flex";
        document.querySelector(".dialog").innerHTML = `
          <div class="pop-msg">
            <p>"${e.target.id.replace(/[\-]/g, " ")}" added to your cart</p>
            <div class="selection-btn">
              <button id="cancel">Cancel</button>
              <button id="ok">OK</button>
            </div>
          </div>
        `;

        // OK button adds item to cart and closes dialog
        document.getElementById("ok").addEventListener("click", () => {
          cartItem.push(item);
          localStorage.setItem("key", JSON.stringify(cartItem));

          document.querySelector(".dialog").style.display = "none";
          updateCartDisplay(); // Update cart after adding item
        });

        // Cancel button closes dialog
        document.getElementById("cancel").addEventListener("click", () => {
          document.querySelector(".dialog").style.display = "none";
        });
      } else {
        // If item is not found
        document.querySelector(".dialog").style.display = "flex";
        document.querySelector(".dialog").innerHTML = `
          <div>
            <p>Item not Found !</p>
          </div>
        `;
      }
    });
  });
};

// Try to load items into the cart
try {
  addItems(allItem);
} catch (err) {
  console.log(err);
} finally {
  addItems(giftCards);
}

// Function to display cart items from localStorage
const updateCartDisplay = () => {
  const myCart = JSON.parse(localStorage.getItem("key")) || [];

  // Clear the cart HTML before re-adding items
  cart.innerHTML = '';

  myCart.forEach((item, index) => {
    const { name, imgUrl, price } = item;

    // Insert the cart item HTML
    cart.innerHTML += `
      <div class="cart-item-display">
        <div class="cart-name-img">
          <img src="${imgUrl}" width="70" />
          <p>${name}</p>
        </div>
        <input id="count-${index}" type="number" min="1" value="1" />
        <p class="price" id="price-${index}">${price}</p>
        <button class="button">Remove</button>
      </div>
    `;

    // Select the input and price elements for dynamic updates
    const quantityInput = document.getElementById(`count-${index}`);
    const priceDisplay = document.getElementById(`price-${index}`);

    // Add an event listener for quantity changes
    quantityInput.addEventListener('input', function () {
      // Ensure the input value is a number and greater than or equal to 1
      const quantity = Math.max(1, parseInt(quantityInput.value));

      // Calculate the new price based on the updated quantity
      const newPrice = (quantity * price).toFixed(2);

      // Update the price in the <p> element
      priceDisplay.textContent = newPrice;
    });
  });
};

// Initialize cart display on page load
updateCartDisplay();
