//popup 관련 script

const bodyElem = document.body;
let popupBtns = document.querySelectorAll(".popup-btn");
let popupCloseBtns = document.querySelectorAll(".popup-close");
let popupContent = document.querySelector(".popup-wrap");

document.addEventListener("DOMContentLoaded", function () {
  let popupContent = document.querySelector(".popup-wrap");
  popupContent.innerText = "";
});

//popupOpen
popupBtns.forEach((e, i) => {
  e.addEventListener("click", function () {
    let popContId = this.dataset.id;
    fetch(`./popup/${popContId}.html`).then(function (response) {
      response.text().then(function (html) {
        var html_dom = new DOMParser().parseFromString(html, "text/html");
        html_dom = html_dom.body.firstChild;
        let popupWrap = document.querySelector(".popup-wrap");
        popupWrap.insertAdjacentElement("beforeend", html_dom);

        const popCloseBtn = html_dom.querySelector(".popup-close");
        popCloseBtn.addEventListener("click", function () {
          if (popupContent.classList.contains("active")) {
            popupContent.classList.remove("active");
            bodyElem.classList.remove("noScroll");
          }
          popupContent.innerText = "";
        });
      });
    });

    if (!popupContent.classList.contains("active")) {
      bodyElem.classList.add("noScroll");
      popupContent.classList.add("active");
    }
  });
});

//accodion

let accodionBtns = document.querySelectorAll(".accodion-label");
let accodionWraps = document.querySelectorAll(".accodion-wrap");
accodionBtns.forEach((accodionBtn) => {
  accodionBtn.addEventListener("click", function () {
    if (!this.parentElement.classList.contains("show")) {
      accodionWraps.forEach((e) => {
        e.classList.remove("show");
      });
      this.parentElement.classList.add("show");
    } else {
      this.parentElement.classList.remove("show");
    }
  });
});
