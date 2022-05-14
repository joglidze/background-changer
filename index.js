let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let num1 = Math.floor(Math.random() * 250);
  let num2 = Math.floor(Math.random() * 250);
  let num3 = Math.floor(Math.random() * 250);

   (document.querySelector(
    ".b_color"
  ).style.backgroundColor = `rgb(${num1} ${num2} ${num3}
  )`);
  
});
