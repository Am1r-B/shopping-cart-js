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

const basket = [];

const generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((item) => {
      const { id, name, price, desc, img } = item;
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
              <div id="quantity-${id}" class="quantity">0</div>
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
  const item = basket.find((product) => product.id === id);

  if (item) {
    item.amount++;
  } else {
    basket.push({
      id,
      amount: 1,
    });
  }
  console.log(basket);
};
const decrement = (id) => {
  const item = basket.find((product) => product.id === id);

  if (item?.amount > 0) {
    item.amount--;
    console.log(basket);
  }
};
