const shop = document.getElementById("shop");

const shopItemsData = [
  {
    id: 1,
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-1.jpg",
  },
  {
    id: 2,
    name: "Office Shirt",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-2.jpg",
  },
  {
    id: 3,
    name: "T Shirt",
    price: 25,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-3.jpg",
  },
  {
    id: 4,
    name: "Mens Suit",
    price: 300,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-4.jpg",
  },
];

let basket = JSON.parse(localStorage.getItem("shopping-cart")) || [];

const generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((item) => {
      const { id, name, price, desc, img } = item;
      const amount = basket.find((cartItem) => cartItem.id === id)?.amount || 0;
      return `
      <div id="product-${id}" class="item">
        <img width="220" height="220" src=${img} alt="" />
        <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
          <div class="price-quantity">
            <h2>$ ${price}</h2>
            <div class="buttons">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div id="quantity-${id}" class="quantity">${amount}</div>
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
      </div>`;
    })
    .join(""));
};

generateShop();

const increment = (id) => {
  const cartItem = basket.find((item) => item.id === id);

  if (cartItem) {
    cartItem.amount++;
  } else {
    basket.push({
      id,
      amount: 1,
    });
  }
  update(id);
  localStorage.setItem("shopping-cart", JSON.stringify(basket));
};
const decrement = (id) => {
  const cartItem = basket.find((item) => item.id === id);

  if (cartItem?.amount > 0) {
    cartItem.amount--;
    update(id);
    basket = basket.filter((item) => item.amount !== 0);
    localStorage.setItem("shopping-cart", JSON.stringify(basket));
  }
};

const update = (id) => {
  const cartItem = basket.find((item) => item.id === id);
  document.getElementById(`quantity-${id}`).innerHTML = cartItem.amount;
  calculation();
};

const calculation = () => {
  const cartIcon = document.getElementById("cart-amount");
  cartIcon.innerHTML = basket.reduce((sum, item) => {
    return sum + item.amount;
  }, 0);
};
