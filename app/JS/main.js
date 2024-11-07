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
};

DOMSelectors.over21btn.addEventListener("click", function (event) {
  event.preventDefault();

  //use filter of for each to find the values of the fake ids and see if it matches the requirements, aftewards, take the entire thing and insert it into html

  let name = DOMSelectors.name.value;
  let hobbies = DOMSelectors.hobbies.value;
  let age = DOMSelectors.age.value;

  console.log(document.querySelector("input").value);

  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="container">
          <div class="card">
                <h2 class="card-header">${name}</h2>
                <img src="https://th.bing.com/th/id/R.91a812ea28dbf352fe4ff268a61ae742?rik=AESw7XnMvAGyTA&riu=http%3a%2f%2fgreystoneglobal.com%2fwp-content%2fuploads%2f2015%2f05%2ffailure.jpg&ehk=ZcYNluoILrmLjgw1gTRiahng1%2bqFXc9g%2fqJOcsWDBUs%3d&risl=&pid=ImgRaw&r=0" alt="haha" class="card-img">
                <h3 class="card-desc">Hobbies: ${hobbies}, Age: ${age}</h3>
                <div> <button class="remove" type="remove">remove</button </div>
          </div>
      </div>`
  );
});
