const accordion = document.querySelectorAll(".accordion");

// const img = document.querySelectorAll(".plus-icon");

accordion.forEach((accordion) => {
  accordion.addEventListener("click", (e) => {
    // let myButton = accordion.querySelector("button");
    accordion.classList.toggle("active");

    let img = accordion.querySelector(".plus-icon");

    if (img.src.includes("assets/images/icon-plus.svg")) {
      img.src = "assets/images/icon-minus.svg";
    } else {
      img.src = "assets/images/icon-plus.svg";
    }
  });
});
