const defaultImg =
  "https://cdn2.iconfinder.com/data/icons/device-smart-phone/100/device-mobile-unknown-512.png";

const phones = [
  {
    name: "phone001",
    price: (Math.random() * 10000).toFixed(2),
    url: "https://static.thenounproject.com/png/56382-200.png"
  },
  {
    name: "phone2",
    price: (Math.random() * 10000).toFixed(2),
    url: "https://static.thenounproject.com/png/65780-200.png"
  },
  {
    name: "phone41",
    price: (Math.random() * 10000).toFixed(2)
  },
  {
    name: "phone511",
    price: (Math.random() * 10000).toFixed(2)
  },
  {
    name: "phone23",
    price: (Math.random() * 10000).toFixed(2),
    url: "https://static.thenounproject.com/png/4894-200.png"
  },
  {
    name: "phone12",
    price: (Math.random() * 10000).toFixed(2),
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLVLsLFzq9hS1yoINQPXazgRRuOvS3NRPDgMV2zGo1bjuLU36r"
  }
];

function randomID() {
  return new Date() * 1;
}

const list = document.querySelector(".phone-list");
let cards = "";
phones.forEach(e => {
  cards += `
  <div class="phone-card">
    <img src="${e.url ? e.url : defaultImg}" alt="icon">
    <h3>${e.name}</h3>
    <button>Buy: $${e.price}</button>
  </div>
  `;
});
list.innerHTML = cards;

// student 2
let arrayOfCheckedCarts = [];
let count = 0;
let arrayOfButtonsBuy = document.querySelectorAll(".phone-card button");
let arrayOfPhoneCard = document.querySelectorAll(".phone-card");
arrayOfPhoneCard.forEach((phone, index) => {
  phone.querySelector("button").onclick = function() {
    // arrayOfCheckedCarts[count] = phone;
    AddItemToCart(phone);
    buyCounter.innerText = ++count;
    this.setAttribute("disabled", "disabled");
    setTimeout(() => {
      this.removeAttribute("disabled");
    }, 3000);
  };
});

function AddItemToCart(phone) {
  arrayOfCheckedCarts[count] = phone;
  document.querySelector(
    ".modal-window-content .content"
  ).innerHTML += `<p>You bought ${
    arrayOfCheckedCarts[count].querySelector("h3").textContent
  } for ${arrayOfCheckedCarts[count]
    .querySelector("button")
    .textContent.slice(5)}</p>`;
}

/* developer_Olga */

let modal_window = document.querySelector(".modal-window");
function CheckerModalWindow() {
  if (modal_window.style.display == "none")
    return (modal_window.style.display = "flex");
  else return (modal_window.style.display = "none");
}

document.querySelector(".cart").onclick = function() {
  CheckerModalWindow();
};

document.querySelector(".modal-window").onclick = function() {
  CheckerModalWindow();
};
document.querySelector(".close").onclick = function() {
  CheckerModalWindow();
};
