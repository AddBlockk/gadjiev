console.log("abaoba");

document.querySelector(".burger-menu").addEventListener("click", function () {
  console.log("вывод");

  let modal = document.querySelector(".modal");
  let body = document.querySelector("body");

  console.log(modal.style.transform);

  modal.style.transform =
    modal.style.transform === "translate(0px, -100%)"
      ? "translate(0, 10%)"
      : "translate(0px, -100%)";

  body.style.overflowY = body.style.overflowY === "hidden" ? "auto" : "hidden";
});

window.addEventListener(
  "resize",
  function (event) {
    if (event.target.innerWidth > 1100) {
      let modal = document.querySelector(".modal");
      let body = document.querySelector("body");

      body.style.overflowY = "auto";

      modal.style.transform = "translate(0px, -100%)";
    }
  },
  true
);
