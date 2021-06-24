content = [
    {
        img : 'images/content-img1.png',
        header: 'Eurosport writers make their champions league picks',
        date: '20th April, 2021'
    },
    {
        img : 'images/content-img2.png',
        header: 'Chelsea reachthe the fa cup final again to end manchester city quadruple dream',
        date: '20th April, 2021'
    },
    {
        img : 'images/content-img3.png',
        header: 'We have to keep fighting to get back in champions league - Klopp',
        date: '20th April, 2021'
    },
    {
        img : 'images/ballon-dor.jpg',
        header: 'New list of Ballon-Dor 2021. Haaland, Foden, Mbappe...',
        date: '28th April, 2021'
    },
    {
        img : 'images/hazard.jpg',
        header: 'Eden Hazard is ready for Champions league against Chelsea',
        date: '20th April, 2021'
    },
    {
        img : 'images/varane.jpg',
        header: 'Man-utd and Chelsea linked Varane addresses contract',
        date: '20th April, 2021'
    },
    {
        img : 'images/mbappe.jpg',
        header: 'Mbappe was injured in training. He may not play against Man City',
        date: '24th April, 2021'
    },
    {
        img : 'images/arteta.jpg',
        header: "I've had enough of VAR - Arteta",
        date: '27th April, 2021'
    }
]

function draw(){
    let s = '';
    for(const i of content){
        s += `<div class="content"> 
           <div class="content_img">
               <img src="${i.img}">
           </div>
           <div class="content_text">
              <div class="content_header">${i.header}</div>
              <div class="date">${i.date}</div>
           </div>
        </div>`
    }
    document.querySelector(".trending_now_contents").innerHTML = s;
}
draw();




var span = document.getElementsByTagName('span');
var slide_item = document.getElementsByClassName("content");



var j = 0;

span[1].onclick = () => {
    j++;
    for(var i of slide_item){
        if(j==0) {i.style.left = '0px';}
        if(j==1) {i.style.left = '-380px';}
        if(j==2) {i.style.left = '-760px';}
        if(j==3) {i.style.left = '-1140px';}
        if(j==4) {i.style.left = '-1520px';}
        if(j==5) {i.style.left = '-1900px';}
        if(j>5){ j=5;}    
    }  
}

span[0].onclick = () => {
    j--;
    for(var i of slide_item){
        if(j==0) {i.style.left = '0px';}
        if(j==1) {i.style.left = '-380px';}
        if(j==2) {i.style.left = '-760px';}
        if(j==3) {i.style.left = '-1140px';}  
        if(j==4) {i.style.left = '-1520px';}   
        if(j==5) {i.style.left = '-1900px';}       
        if(j<0) {j=0;}
    }
}





const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});




// const slide = document.querySelector(".trending_now_contents");
// const nextBtn = document.querySelector(".next-btn");
// const prevBtn = document.querySelector(".prev-btn");

// let slides = document.querySelectorAll(".content");
// let index = 1;
// let slideId;

// const firstClone = slides[0].cloneNode(true);
// const lastClone = slides[slides.length - 1].cloneNode(true);

// firstClone.id = "first-clone";
// lastClone.id = "last-clone";

// slide.append(firstClone);
// slide.prepend(lastClone);

// const slideWidth = slides[index].clientWidth;

// slide.style.transform = `translateX(${-slideWidth * index}px)`;

// const getSlides = () => document.querySelectorAll(".content");

// slide.addEventListener("transitionend", () => {
// 	slides = getSlides();
// 	if (slides[index].id === firstClone.id) {
// 		slide.style.transition = "none";
// 		index = 1;
// 		slide.style.transform = `translateX(${-slideWidth * index}px)`;
// 	}

// 	if (slides[index].id === lastClone.id) {
// 		slide.style.transition = "none";
// 		index = slides.length - 2;
// 		slide.style.transform = `translateX(${-slideWidth * index}px)`;
// 	}
// });

// const moveToNextSlide = () => {
// 	slides = getSlides();
// 	if (index >= slides.length - 1) return;
// 	index++;
// 	slide.style.transition = ".7s ease-out";
// 	slide.style.transform = `translateX(${-slideWidth * index}px)`;
// };

// const moveToPreviousSlide = () => {
// 	if (index <= 0) return;
// 	index--;
// 	slide.style.transition = ".7s ease-out";
// 	slide.style.transform = `translateX(${-slideWidth * index}px)`;
// };

// nextBtn.addEventListener("click", moveToNextSlide);
// prevBtn.addEventListener("click", moveToPreviousSlide);


const menu = document.querySelector('.nav_menu');
const icon_menu = document.querySelector(".menu_icon");

if(icon_menu){
  icon_menu.addEventListener("click", function(e){
    document.body.classList.toggle('lock');
    icon_menu.classList.toggle('active');
    menu.classList.toggle('active');
  });
 
}