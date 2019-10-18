let info_zapros = ["", ""];
let ORIGIN_CODE = ["", ""];
const DB_LINK = [
  "https://gist.githubusercontent.com/Goles/3196253/raw/9ca4e7e62ea5ad935bb3580dc0a07d9df033b451/CountryCodes.json",
  "./json/city.list.json"
];
function json_open() {
  const xhr = new XMLHttpRequest();
  let posts;
  xhr.open(
    "GET",
    "https://api.openweathermap.org/data/2.5/weather?q=Zaporizhzhya,ua&appid=720951ffe2f52cf6042ba285ed6c5b0e"
  );
  xhr.onload = function() {
    let text = "";
    posts = JSON.parse(xhr.responseText);
    console.log(posts);
  };
  xhr.send(null);
}
function generate_country_list(link, tag) {
  //Список городов
  const xhr = new XMLHttpRequest();
  xhr.open("GET", link);
  xhr.onload = function() {
    ORIGIN_CODE[0] = JSON.parse(xhr.responseText);
    let text = "";
    console.log(ORIGIN_CODE[0]);
    ORIGIN_CODE[0].forEach(element => {
      text += `<li>${element.name}</li>`;
    });
    document.querySelector(tag).innerHTML += text;
  };
  xhr.send(null);
}
function generate_town_list() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", DB_LINK[1]);
  xhr.onload = function() {
    ORIGIN_CODE[1] = JSON.parse(xhr.responseText);
    let text = "";
    console.log(ORIGIN_CODE[1]);
    let index = ORIGIN_CODE[1].filter(x => x.country === info_zapros[1]);
    console.log(index);
    index.forEach(element => {
      text += `<li>${element.name}</li>`;
    });
    document.querySelector(".town-list").innerHTML = text;
  };
  xhr.send(null);
}
function inputCountryElementFounder(witchInput, witchList) {
  document.querySelector(witchInput).addEventListener("input", e => {
    document.querySelector(witchList).style.display = "";
    let list = document.querySelectorAll(witchList + " li");
    let i = 0;
    let el = "";
    list.forEach(function(element) {
      let title = element.textContent;
      if (title.indexOf(e.target.value) == -1) {
        element.style.display = "none";
      } else {
        element.style.display = "block";
        i++;
      }
    });
  });
}

// json_open();
generate_country_list(DB_LINK[0], ".selection-country ul");
inputCountryElementFounder(".country-input", ".country-list");
inputCountryElementFounder(".town-input", ".town-list");

document
  .querySelector(".country-list")
  .addEventListener("click", function(event) {
    event.stopPropagation();
    if (event.target.tagName == "LI") {
      let elem = event.target.textContent;
      let index = ORIGIN_CODE[0].findIndex(x => x.name === elem);
      info_zapros[1] = ORIGIN_CODE[0][index].code;
    }
    console.log(info_zapros[1]);
    document.querySelector(".town-list").style.display = "";
    document.querySelector(".town-input").removeAttribute("disabled");
    generate_town_list();
  });
document.querySelector(".town-list").addEventListener("click", function(event) {
  event.stopPropagation();
  if (event.target.tagName == "LI") {
    info_zapros[0] = event.target.textContent;
  }
  console.log(info_zapros[0]);
  document.querySelector(".wrapper-link").style.display = "";
  document.querySelector(
    ".code"
  ).textContent = ` <script src="widget.js" country="${info_zapros[1]}" town="${
    info_zapros[0]
  }" defer></script>`;
});
