let basket = JSON.parse(localStorage.getItem("shopping-cart")) || [];

const calculation = () => {
  const cartIcon = document.getElementById("cart-amount");
  cartIcon.innerHTML = basket.reduce((sum, item) => {
    return sum + item.amount;
  }, 0);
};

calculation();
