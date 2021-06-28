let btn = document.querySelector(".my_works");
let span = document.querySelector(".span");
let link = document.querySelector(".webpages");
let link1 = document.querySelector(".webpages1");


btn.addEventListener("click", function(){
    span.classList.toggle("active");
    link.classList.toggle("a_active");
    link1.classList.toggle("a_active");
})


