import "../CSS/style.css";
import { fakeids } from "./list.js";

console.log(fakeids);

/* const over21Btn = DOMSelectors.over21Btn;
over21Btn.addEventListener("click", functon (event)) {
  document.getElementById
} */

const DOMSelectors = {
  over21btn: document.querySelector("#over21"),
  malebtn: document.querySelector("#male"),
  femalebtn: document.querySelector("#female"),
  pricierbtn: document.querySelector("#pricier"),
  cheaperbtn: document.querySelector("#cheaper"),
  allbtn: document.querySelector("#all"),
  container: document.querySelector(".container"),
};

function createCards(fakeids) {
  DOMSelectors.container.innerHTML = "";
  fakeids.forEach((fakeids) =>
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class="container">
            <div class="card">
                  <img src=${fakeids.imageUrl} alt=${fakeids.altText} class="card-img">
                  <h2 class="card-header">${fakeids.name}</h2>
                  <h4 class="card-desc">spawnyear: ${fakeids.spawnyear}, expiration: ${fakeids.expiration}, sex: ${fakeids.sex}, description: ${fakeids.description}, price: ${fakeids.price}</h3>
            </div>
        </div>`
    )
  );
}
console.log(fakeids);
createCards(fakeids);

DOMSelectors.over21btn.addEventListener("click", function (event) {
  event.preventDefault();

  //use filter of for each to find the values of the fake ids and see if it matches the requirements, aftewards, take the entire thing and insert it into html
  /* fakeids.filter((fakeids) => fakeids.spawnyear(num_str[-4] <= 2003));
  fakeids.filter(
    (fakeids) => parseInt(fakeids.spawnyear.slice(-4), 10) <= 2003 */
  //);
});
//const highlyratedProducts = products.filter((product) => product.rating >= 4.5);

//const highlyratedProducts = products.filter((product) => product.rating >= 4.5);
//console.log("Highly rate products", highlyratedProducts);

/* highlyratedProducts.forEach((highlyratedProducts) =>
  console.log("highly rated product:", highlyratedProducts.name)
);
 */
