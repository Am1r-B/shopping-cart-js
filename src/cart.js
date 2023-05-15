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
          <img width="110" height="110" src="${img}" alt="" />
          <div class="details">

            <div class="title-price-x">
              <h4 class="title-price">
                <span>${name}</span>
                <span class="cart-item-price">$ ${price}</span>
              </h4>
              <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
            </div>

            <div class="buttons">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div id="quantity-${id}" class="quantity">${amount}</div>
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>

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

const increment = (id) => {
  const cartItem = basket.find((cartItem) => cartItem.id === id);

  cartItem.amount++;

  calculation();
  generateCartItems();
  localStorage.setItem("shopping-cart", JSON.stringify(basket));
};
const decrement = (id) => {
  const cartItem = basket.find((cartItem) => cartItem.id === id);

  cartItem.amount--;

  basket = basket.filter((cartItem) => cartItem.amount !== 0);
  calculation();
  generateCartItems();
  localStorage.setItem("shopping-cart", JSON.stringify(basket));
};

const removeItem = (id) => {
  basket = basket.filter((cartItem) => cartItem.id !== id);
  calculation();
  generateCartItems();
  localStorage.setItem("shopping-cart", JSON.stringify(basket));
};

const totalAmount = () => {
  if (basket.length !== 0) {
    let total = basket.reduce((sum, { id, amount }) => {
      const { price } = shopItemsData.find((item) => item.id === id);
      return sum + amount * price;
    }, 0);
    label.innerHTML = `
      <h2>Total Bill: $ ${total}</h2>
    `;
  }
};

totalAmount();
