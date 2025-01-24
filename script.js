const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  document.querySelector("header ul").classList.toggle("show");
});

const toTop = document.querySelector(".back-top");

window.addEventListener("scroll", () => {
  if (pageYOffset > 75) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

const typed = new Typed('.multiple-text',{
  strings:['Java developer','Software developer'],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop:true
});