"use strict";
const preLoader = function () {
  let preloaderWrapper = document.getElementById("preloader");
  window.onload = () => {
    preloaderWrapper.classList.add("loaded");
  };
};
 preLoader();
const scrollTop = document.getElementById("scroll__top");
scrollTop &&
  (scrollTop.addEventListener("click", function () {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }),
  window.addEventListener("scroll", function () {
    window.scrollY > 300
      ? scrollTop.classList.add("active")
      : scrollTop.classList.remove("active");
  }));

document.querySelectorAll('.quantity__box .quantity__value').forEach(function(btn){
btn.addEventListener('click',function(event){
if(event.target.classList.contains('decrease')){
  let input_number=$(this).parent().find('input')[0];
  let val=parseInt(input_number.value);
  if(val>1){
    input_number.value=val-1;
  }
}
if(event.target.classList.contains('increase')){
  let input_number=$(this).parent().find('input')[0];
  let val = parseInt(input_number.value);
  input_number.value=val+1;
}
});
})

const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});

let all_links = document.querySelectorAll(
  ".product__details--media .product__media--nav__items"
);
// console.log(all_links)
all_links.forEach(function (val, index) {
  val.addEventListener("hover", function (evt) {
    // let el = document.querySelector(".swiper__nav--btn");
    // el.style.opacity = 1;
    // el.style.visibility = "visible";
    alert('ok')
  });
});

var getSiblings = function (elem) {
  const siblings = [];
  let sibling = elem.parentNode.firstChild;
  for (; sibling; )
    1 === sibling.nodeType && sibling !== elem && siblings.push(sibling),
      (sibling = sibling.nextSibling);
  return siblings;
};

const tab = function (wrapper) {
  let tabContainer = document.querySelector(wrapper);
  tabContainer &&
    tabContainer.addEventListener("click", function (evt) {
      let listItem = evt.target;
      if (listItem.hasAttribute("data-toggle")) {
        let targetId = listItem.dataset.target,
          targetItem = document.querySelector(targetId);
        listItem.parentElement
          .querySelectorAll('[data-toggle="tab"]')
          .forEach(function (list) {
            list.classList.remove("active");
          }),
          listItem.classList.add("active"),
          targetItem.classList.add("active"),
          setTimeout(function () {
            targetItem.classList.add("show");
          }, 150),
          getSiblings(targetItem).forEach(function (pane) {
            pane.classList.remove("show"),
              setTimeout(function () {
                pane.classList.remove("active");
              }, 150);
          });
      }
    });
};
tab(".product__tab--one"),
  tab(".product__tab--two"),
  tab(".product__details--tab"),
  tab(".product__grid--column__buttons");

var swiper = new Swiper(".product__media--nav", {
    loop: !0,
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: !0,
    watchSlidesProgress: !0,
    breakpoints: {
      768: { slidesPerView: 5 },
      480: { slidesPerView: 4 },
      320: { slidesPerView: 3 },
      200: { slidesPerView: 2 },
      0: { slidesPerView: 1 },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }),
  swiper2 = new Swiper(".product__media--preview", {
    loop: !0,
    spaceBetween: 10,
    thumbs: { swiper: swiper },
  });

// this logic is wrong for sticky header //
// function TopOffset(el) {
//   let rect = el.getBoundingClientRect(),
//     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   return { top: rect.top + scrollTop };
// }
// const headerStickyWrapper = document.querySelector("header"),  // whole header div
//   headerStickyTarget = document.querySelector(".header__sticky");  // only navbar that has to be sticky
// if (headerStickyTarget) {
//   let headerHeight = headerStickyWrapper.clientHeight;
//   window.addEventListener("scroll", function () {
//     let StickyTargetElement,
//       TargetElementTopOffset = TopOffset(headerStickyWrapper).top;
//     window.scrollY > TargetElementTopOffset
//       ? headerStickyTarget.classList.add("sticky")
//       : headerStickyTarget.classList.remove("sticky");
//   });
// }
