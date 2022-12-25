

var elBtn = document.querySelector(".js-modal");
var elCloseBtn = document.querySelector(".modal-close");
var elModal = document.querySelector(".modal");


elBtn.addEventListener("click", function() {
  elModal.classList.add("modal-open");
  // elModal.style.display = "flex";
});

elCloseBtn.addEventListener("click", function() {
  elModal.classList.remove("modal-open");
});

window.onclick = function(e) {
  // console.log(e.target)
  if(e.target == elModal){
    elModal.classList.remove("modal-open");
  }
};


// PASSWORD INPUT
var elPassImg = document.querySelector(".eye-img");
var elPassInput = document.querySelector(".input-password");

elPassImg.addEventListener("click", function() {
  if(elPassInput.type === "password"){
    elPassInput.type = "text";
    elPassImg.src = "../images/Eye-closed.svg";
  } else {
    elPassInput.type = "password";
    elPassImg.src = "../images/eye-open.svg";
  }
});




var elMenuBtn = document.querySelector(".burger");
var elCloseBtn = document.querySelector(".close-button-burger");
var elMenuBurger = document.querySelector(".menu-burger");

elMenuBtn.addEventListener("click", function(){
  elMenuBurger.classList.add("menu-burger-active");
})

elCloseBtn.addEventListener("click", function(){
  elMenuBurger.classList.remove("menu-burger-active");
})






