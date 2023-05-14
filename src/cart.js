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
    return (shoppingCart.innerHTML = basket
      .map(({ id, amount }) => {
        const { name, price, img } =
          shopItemsData.find((item) => item.id === id) || [];
        return `
        <div class="cart-item">
          <img width="100" height="100" src="${img}" alt="" />
          <div class="details">

            <div class="title-price-x">
              <h4>
                <span>${name}</span>
                <span>$ ${price}</span>
              </h4>
              <i class="bi bi-x-lg"></i>
            </div>

            <div class="cart-buttons"></div>

            <h3>$ ${amount * price}</h3>
          </div>
        </div>
      `;
      })
      .join(""));
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
