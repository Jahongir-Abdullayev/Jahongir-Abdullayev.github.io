const menu = document.querySelector('.menu');
const icon_menu = document.querySelector(".menu_icon");
var link = document.getElementsByClassName("menu_a");
for(var i = 0; i < link.length; i++){
  link[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active"; 
    if(icon_menu.classList.contains('active1')){
      document.body.classList.remove('lock')
      icon_menu.classList.remove('active1');
      menu.classList.remove('active1');
    }
  });
  
}

// ================================ showslide ================================= //
var slideIndex = 1;
showSlides(slideIndex);

function prev_next(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active_dot", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active_dot";
}
setInterval(prev_next, 6000, 1);

//=============================  animated counter  ==================================== //

$(window).scroll(testScroll);
var viewed = false; 

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function testScroll() {
  if (isScrolledIntoView($(".numbers_inner")) && !viewed) {
      viewed = true;
      $('.real_num').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 3000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
    });
  }
}






//========================== comments =============================//

  function taxlash() {
    for (const i of document.querySelectorAll('.comment_inner .com')) {
      i.style.left = (+(i.getAttribute('data-pos')) * 100) + '%';
    }
  }
  taxlash();

  function next() {
      for (const i of document.querySelectorAll('.comment_inner .com')) {
        i.setAttribute('data-pos',i.getAttribute('data-pos') - 1);
      }
      taxlash();
      document.querySelector('.comment_inner').append(document.querySelector('.comment_inner .com:first-of-type'));
      document.querySelector('.comment_inner .com:last-of-type').style.left = '400%';
      document.querySelector('.comment_inner .com:last-of-type').setAttribute('data-pos','4');
    } 

    function prev() {
      for (const i of document.querySelectorAll('.comment_inner .com')) {
        i.setAttribute('data-pos', +(i.getAttribute('data-pos')) + 1);
      }
      taxlash();
      document.querySelector('.comment_inner').prepend(document.querySelector('.comment_inner .com:last-of-type'));
      document.querySelector('.comment_inner .com:first-of-type').style.left = '-100%';
      document.querySelector('.comment_inner .com:first-of-type').setAttribute('data-pos','-1');
    }
  
    setInterval(next, 7000,1);

  //=========================== fixed menu ===========================//

 
    const fixed = document.querySelector(".container");
    let navTop = fixed.offsetTop;

    function fixednav(){
      if(window.scrollY > navTop){
        fixed.classList.add('add');
      }else{
        fixed.classList.remove("add");
      }
    }
    
    window.addEventListener('scroll', fixednav);

    

    //========================   modal  ==========================
    
    
    function modal(){
      var modal = document.getElementById("modal");
      modal.style.display = "block";
    }

    function modal_x(){
      var modal = document.getElementById("modal");
      modal.style.display = "none";
    }

    window.onclick = function(e){
      var modal = document.getElementById("modal");
      var modal1 =document.getElementById("modal1");
      if(e.target == modal){
        modal.style.display = "none";
      } else if(e.target == modal1){
        modal1.style.display = "none";
      }
    }

    function modal1(){
      var modal = document.getElementById("modal1");
      modal.style.display = "block";
    }

    function modal_x1(){
      var modal = document.getElementById("modal1");
      modal.style.display = "none";
    }

    
  $('.images .first_block').mouseenter(function (e) {
      console.log(e.target, e.relatedTarget);
  
          $('.doblock').css({
              'bottom': Math.abs(804 - ($(this).offset().top - $(this).parent('.images').offset().top))+ 'px',
              'left': $(this).offset().left - $(this).parent('.images').offset().left,
              'height': '248px'
          });
  
  });
  
  $('.images').mouseleave(function () {
      $('.doblock').css({
          'height': '0px'
      });
  
  });
  



  //================== bar menu ====================//

 
 if(icon_menu){
   icon_menu.addEventListener("click", function(e){
     document.body.classList.toggle('lock');
     icon_menu.classList.toggle('active1');
     menu.classList.toggle('active1');
   });
  
 }