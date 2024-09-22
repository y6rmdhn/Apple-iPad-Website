
const swiper = new Swiper('#mySwiper1', {
    // Optional parameters
    slidesPerView: "auto",
        spaceBetween: 30,

    //Navigation custom
    navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-prev",
    }
  });

  const swiperNav = new Swiper('#mySwiperNav', {
    // Optional parameters
    slidesPerView: "auto",
        spaceBetween: 30,

    // Navigation custom
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    }
  });
  
  const swiperBook = new Swiper('#swiperBook', {
    // Optional parameters
    slidesPerView: "auto",
    spaceBetween: 20,

    navigation: {
        nextEl: ".next-btn-book",
        prevEl: ".prev-btn-book",
    }
  });

  const swiperr = new Swiper("#mySwiper2", {
    slidesPerView: "auto",
    grid: {
      rows: 1,
    },
  });


  function handleResize() {
    const imageElement = document.querySelector('#max-h');
    
    if (window.innerWidth < 1140) {
      if (imageElement && imageElement.classList.contains('max-h-[820px]')) {
        imageElement.classList.remove('max-h-[820px]');
      }
    } else {
      if (imageElement && !imageElement.classList.contains('max-h-[820px]')) {
        imageElement.classList.add('max-h-[820px]');
      }
    }
  }
  
  window.addEventListener('load', handleResize);
  
  window.addEventListener('resize', handleResize);
  


//function accordion
function toogleAcordion(event){
  const question = event.currentTarget;
  console.log(event)
  console.log(question);
  const content = question.nextElementSibling;
  const svgIcon = question.querySelector("svg");
  const image = document.getElementById("image-accordion");

  //close other accordion
  document.querySelectorAll(".accordion .content").forEach((item) =>{
      item.style.maxHeight = null;
      item.previousElementSibling.querySelector("svg").classList.remove("rotate-180");
  });

  //toogle current accordion
  if(content.style.maxHeight){
    content.style.maxHeight = null;
    svgIcon.classList.remove("rotate-180");
  }else{
    content.style.maxHeight = 767 + "px";
    svgIcon.classList.add("rotate-180");
  }

  switch (question.id) {
    case 'ipad-iphone':
      image.src = "./assets/accordion-image/ia_ipad_iphone__cycr5ovszwmu_medium_2x.jpg"
      break;
    case 'ipad-mac':
      image.src = "./assets/accordion-image/ia_ipad_mac__m9atjxkwpwyq_large_2x.jpg"
      break;
    case 'ipad-apple-watch':
      image.src = "./assets/accordion-image/ia_ipad_watch__esa6mmvthtme_large_2x.jpg"
      break;
  
    default:
      break;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const defaultAccordion = document.getElementById('ipad-iphone');
  const defaultContent = defaultAccordion.nextElementSibling;
  const defaultSvg = defaultAccordion.querySelector("svg");

  defaultContent.style.maxHeight = 767 + "px";
  defaultSvg.classList.add("rotate-180");

})



//function accordion footer
function toogleAcc(event){
  const question = event.currentTarget;
  const content = question.nextElementSibling;
  const svgIcon = question.querySelector("svg");

  console.log(question);
  
  if(content.style.maxHeight){
    content.style.maxHeight = null;
    svgIcon.classList.remove("rotate-180");
  }else{
    content.style.maxHeight = content.scrollHeight + "px";
    svgIcon.classList.add("rotate-180");
  }
}


const menuToggle = document.getElementById('menu-toggle');
const scrollTarget = document.getElementById('scroll-target');
const hiddenSvg = document.getElementById('hiddenSvg');
const hiddenSearchsvg = document.getElementById('searchSvgHidden');
const menuMobileList = document.getElementById('menu-mobile-list');
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        scrollTarget.classList.toggle('active');
        hiddenSvg.classList.toggle('hiddenSvgClass');
        hiddenSearchsvg.classList.toggle('hiddenSvgClass');
        menuMobileList.classList.toggle('opacity-100');

        if(menuMobileList.classList.contains('opacity-100')){
          document.body.classList.add('overflow-hidden');
          menuMobileList.classList.remove('delay-100');
          menuMobileList.classList.add('delay-300');
          scrollTarget.classList.remove('delay-300');
          hiddenSvg.classList.add('delay-300'); 
          hiddenSearchsvg.classList.add('delay-300');
        }else{
          document.body.classList.remove('overflow-hidden');
          menuMobileList.classList.remove('delay-300');
          menuMobileList.classList.add('delay-100');
          scrollTarget.classList.add('delay-300');
          hiddenSvg.classList.add('delay-300'); 
        hiddenSearchsvg.classList.add('delay-300');
        }
    });