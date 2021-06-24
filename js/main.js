let btn = document.querySelector(".my_works");
let span = document.querySelector(".span");
let link = document.querySelector(".webpages");


btn.addEventListener("click", function(){
    span.classList.toggle("active");
    link.classList.toggle("a_active");
})


