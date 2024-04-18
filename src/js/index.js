/*========================================================
   DOM 
=========================================================*/
const productsDOM = document.querySelector(".products-center");
const bannerBtn = document.querySelector(".banner-btn");
const plansCardWrapper = document.querySelectorAll(".plan-wrapper");
/*========================================================
   DOM END
=========================================================*/

// Home movies display carousel
window.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 0; // Initialize slideIndex to 0
    let slideImageId;
  
    showSlides(); // Initial call to showSlides function
  
    // Function to control the prev and next buttons
    function plusSlides(n) {
      showSlides((slideIndex += n));
    }
  
    // Function to set the current slide
    function currentSlide(n) {
      showSlides((slideIndex = n));
    }
  
    // Function to display slides
    function showSlides() {
      let i;
      let allSlides = document.getElementsByClassName("banner-slide");
  
      // Hide all slides
      for (i = 0; i < allSlides.length; i++) {
        allSlides[i].style.display = "none";
      }
  
      // Increment slideIndex
      slideIndex++;
  
      // Reset slideIndex if it exceeds the number of slides
      if (slideIndex > allSlides.length) {
        slideIndex = 1;
      }
  
      // Display the current slide
      allSlides[slideIndex - 1].style.display = "block";
  
      // Apply animation to slide from left while fading
      allSlides[slideIndex - 1].style.animation = "slideAndFade 7s ease-out";
    }
  
    // Start the carousel
    slideImageId = setInterval(showSlides, 10000);
  });
  

// vanilla tilt on subscription cards
VanillaTilt.init(plansCardWrapper, {
  max: 10,
  speed: 250,
  glare: true,
  "max-glare": 0.6,
});

// ON plan card hover, mouse follow
plansCardWrapper.forEach(planCard => {
  planCard.addEventListener('mousemove', (e) => {
    move(e);
  })  
});

var mouse;
var cursor = document.getElementById('cursor');


//Detect touch device ======== Will work only on Android & IOS devices
function isTouchDevice() {
  try {
    //Will fail for desktops and throw error
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}

const move = (e) => {
  try {
    var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
    var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
  } catch (e) {
    console.warn('Error!');
  }
  //setting the left and top of div based on mouse position
  cursor.style.left = x - 55 + "px";
  cursor.style.top = y - 55 + "px";
};

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    header.style.backgroundColor = "#000111";
  } else {
    header.style.backgroundColor = "transparent"; // Reset to default
  }
});
