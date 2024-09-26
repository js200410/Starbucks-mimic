const cartItem = [];
const cart = document.querySelector(".cart");
const addItems = (array) => {
  const addItemBtns = document.querySelectorAll(".add-item-btn");
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
// Function to display cart items from localStorage
const updateCartDisplay = () => {
  const myCart = JSON.parse(localStorage.getItem("key")) || [];
  // Clear the cart HTML before re-adding items
  const allPrice = []
  for(let key in myCart){
   allPrice.push(myCart[key].price)
  }

  myCart.forEach((item, index) => {
    const { name, imgUrl, price } = item;
    // Insert the cart item HTML
    cart.innerHTML += `
      <div class="cart-item-display">
        <div class="cart-name-img">
          <img src="${imgUrl}" width="70" />
          <p>${name}</p>
        </div>
        <div class="b-i-b">
        <button class="addBtn" id="${index}">+</button>
        <input id="count-${index}"  min="1" value="1"/>
        <button class="lessBtn" id="${index}">-</button>
        </div>
           <span>₹ <p class="price" id="price-${index}">${price}</p></span>
      </div>
    `;
  });
    const addBtn = document.querySelectorAll(".addBtn")
    addBtn.forEach((btn)=>{
      btn.addEventListener("click", (e)=>{
        const targetBtn = e.target.id ;
        const countInput = document.getElementById(`count-${targetBtn}`);
        if(countInput.value > 0 ){
        const price = document.getElementById(`price-${targetBtn}`);
        countInput.value = countInput.value > 0 ? Number.parseInt(countInput.value)+ 1 : ""
        price.textContent = Number.parseFloat(price.textContent) + allPrice[targetBtn]
        }
      })
  })
  const lessBtn = document.querySelectorAll(".lessBtn")
  lessBtn.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
      const targetBtn = e.target.id ;
      const countInput = document.getElementById(`count-${targetBtn}`);
      if(countInput.value > 1){
      const price = document.getElementById(`price-${targetBtn}`)
      countInput.value =  Number.parseInt(countInput.value) - 1 
      price.innerText =  Number.parseFloat(price.textContent) - allPrice[targetBtn]
      }
    })
  })
  const prices = document.querySelectorAll(".price")
  const totalPrice = document.querySelector(".total-price")
  let total = 0
  prices.forEach((price)=>{
    total += Number.parseFloat(price.textContent);
    totalPrice.innerHTML = `<div class="cart-item-display total"><div class="flex"><h3>Total Amount : </h3><p>${total}</p></div>
    <div class="flex"><h3>Total Items : </h3><p>${myCart.length}</p></div></div>
      `
  })

}
updateCartDisplay();
