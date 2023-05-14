const label = document.getElementById("label");
const shoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("shopping-cart")) || [];

const calculation = () => {
  const cartIcon = document.getElementById("cart-amount");
  cartIcon.innerHTML = basket.reduce((sum, cartItem) => {
    return sum + cartItem.amount;
  }, 0);
};

calculation();

const generateCartItems = () => {
  if (basket.length !== 0) {
  } else {
    label.innerHTML = `
      <h2>Cart is Empty</h2>
      <a href="index.html">
        <button class="home-btn">Back to home</button>
      </a>
    `;
    shoppingCart.innerHTML = ``;
  }
};

generateCartItems();
