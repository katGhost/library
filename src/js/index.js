/*========================================================
   DOM 
=========================================================*/
const productsDOM = document.querySelector(".products-center");
const bannerBtn = document.querySelector(".banner-btn");
const plansCard = document.querySelectorAll(".plan-wrapper");
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
      allSlides[slideIndex - 1].style.animation = "slideAndFade 5s ease-out";
    }
  
    // Start the carousel
    slideImageId = setInterval(showSlides, 10000);
  });
  

// vanilla tilt on subscription cards
VanillaTilt.init(plansCard, {
  max: 15,
  speed: 250,
  glare: true,
  "max-glare": 1,
});
