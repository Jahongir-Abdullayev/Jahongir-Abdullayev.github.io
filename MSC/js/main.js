function draw_box(){
    let s = '';
      s+= `
               <div class="box_content">
                  <div class="box_header">Фудхолл:</div>
                  <div class="box_text">Новое гастропространство уже открыто! Для вас огромное множество плюшек в первый день открытия</div>
                  <div class="box_date">11.08.2020</div>
               </div>
               <div class="box_image">
                    <img src="images/box_image.png" alt="">
               </div>
            `
        document.querySelector('.box').innerHTML = s; 
        document.querySelector('.box.second').innerHTML = s; 
        document.querySelector('.box.third').innerHTML = s; 
        document.querySelector('.box.fourth').innerHTML = s; 
}
draw_box();


service_box = [
   {
      img: 'icons/service_imgs/search.png',
      text: 'потерянные вещи в ТРЦ'
   },
   {
      img: 'icons/service_imgs/accident.png',
      text: 'ДТП на парковке'
   },
   {
      img: 'icons/service_imgs/bycicle.png',
      text: 'Велопарковка'
   },
   {
      img: 'icons/service_imgs/group.png',
      text: 'Банкомат'
   },
   {
      img: 'icons/service_imgs/veshilka.png',
      text: 'Гардероб'
   }
]

service_box2 = [
   {
      img: 'icons/service_imgs/working-mother 1.png',
      text: 'Комната матери и ребенка'
   },
   {
      img: 'icons/service_imgs/wifi 1.png',
      text: 'Бесплатный Wi-Fi'
   },
   {
      img: 'icons/service_imgs/power-plug 1.png',
      text: 'Зарядка телефонов'
   },
   {
      img: 'icons/service_imgs/wc-sign 1.png',
      text: 'Туалет для маломобильных групп граждан'
   },
   {
      img: 'icons/service_imgs/sofa 1.png',
      text: 'мягкие зоны'
   }
]

service_box3 = [
   {
      img: 'icons/service_imgs/elevator 1.png',
      text: 'Лифты'
   },
   {
      img: 'icons/service_imgs/parking 1.png',
      text: 'парковка'
   },
   {
      img: 'icons/service_imgs/customer-reviews 1.png',
      text: 'Оставьте отзыв'
   }
]

function draw_block1(){
   let j = '';
  
   for(const i of service_box){
      j+= `<div class="service_box">
      <div class="service_icons">
          <img src="${i.img}" alt="error">
      </div>
      <div class="service_box_text">${i.text}</div>
     
  </div>`
   }
  
   document.querySelector('.block').innerHTML = j;
   
   
};

function draw_block2(){
   let k ='';
   for(const m of service_box2){
      k+= `<div class="service_box">
      <div class="service_icons">
          <img src="${m.img}" alt="error">
      </div>
      <div class="service_box_text">${m.text}</div>
     
   </div>`
     }
     document.querySelector('.block1').innerHTML = k;

}

function draw_block3(){
   let k ='';
   for(const m of service_box3){
      k+= `<div class="service_box">
      <div class="service_icons">
          <img src="${m.img}" alt="error">
      </div>
      <div class="service_box_text">${m.text}</div>
     
   </div>`
     }
     document.querySelector('.block2').innerHTML = k;

}


draw_block1();
draw_block2();
draw_block3();

let topElement = document.documentElement;
let toTop = document.querySelector(".top_btn");
toTop.addEventListener('click', function(){
   topElement.scrollTo({
      top: 0,
      behavior: "smooth"
   })
});



