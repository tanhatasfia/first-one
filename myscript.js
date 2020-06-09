let numberofbooks = document.getElementById("number");

let buybutton = document.getElementById("mybutton");
let sllbutton = document.getElementById("my2ndbutton");
buybutton.addEventListener("click", myFunction);
sllbutton.addEventListener("click", my2ndFunction);
let bookcount = 0;

numberofbooks.innerHTML = bookcount;

function myFunction() {
  bookcount++;
  numberofbooks.innerText = bookcount;
}
function my2ndFunction() {
  bookcount--;
  numberofbooks.innerText = bookcount;
}
