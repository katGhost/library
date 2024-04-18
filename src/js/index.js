/*========================================================
   DOM 
=========================================================*/
const bannerBtn = document.querySelector(".banner-btn");
const plansCardWrapper = document.querySelectorAll(".plan-wrapper");
/*========================================================
   DOM END
=========================================================*/

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const scrollPosition = window.scrollY;

  // if (scrollPosition > 100) {
  //   header.style.backgroundColor = "";
  //   header.style.transform = "translateY(0%)";
  // }
  // else {
  //   // Reset to default
  //   header.style.backgroundColor = "transparent";
  //   header.style.transform = "translateY(0%)";
  // }
});

// vanilla tilt on subscription cards
VanillaTilt.init(plansCardWrapper, {
  max: 10,
  speed: 250,
  glare: true,
  "max-glare": 0.6,
});

// ON plan card hover, mouse follow
plansCardWrapper.forEach((planCard) => {
  planCard.addEventListener("mousemove", (e) => {
    move(e);
  });
});

var mouse;
var cursor = document.getElementById("cursor");

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
    console.warn("Error!");
  }
  //setting the left and top of div based on mouse position
  cursor.style.left = x - 55 + "px";
  cursor.style.top = y - 55 + "px";
};

/*======================================================================
  CLASSES
======================================================================*/

//Getting from the custom JSON data
class MovieItems {
  async getMovies() {
    try {
      let result = await fetch("movies.json");
      let data = await result.json();
      let movies = data.movies;
      return movies;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}

class UI {
  displayMovies(movies) {
    const carouselMoviesDOM = document.querySelector('.the-section');
    const movieContainer = document.querySelector(".banner-slide");
    movies.forEach((movie) => {  
      //clear the container
      carouselMoviesDOM.innerHTML = '';

      movieContainer.innerHTML = `
        <div class="banner-carousel">
          <div class="movie-thumb-img">
            <img src=${movie.image} alt="" class="movie-thumb" />
          </div>
          <div class="movie-info-container">
            <h4 class="info-title">${movie.title}</h4>
            <div class="availability">
              <p>${movie.avail}</p>
              <div class="quality">
                <p>${movie.quality}</p>
              </div>
              <div class="age-restrictions">
                <p>${movie.age}</p>
              </div>
              <div class="age-restrictions">
                <p>${movie.rating}</p>
              </div>
            </div>
            <p class="info-description">${movie.description}</p>
            <div class="info-actions">
              <button class="info-watch-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#fef3ff"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z"
                  />
                </svg>
              </button>
              <button class="info-rent-btn">${movie.btn-desc}</button>
            </div>
          </div>
        </div>
      `;

      carouselMoviesDOM.appendChild(movieContainer);
    });    
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
  const movies = new MovieItems();

  movies.getMovies().then(movies => {
    ui.displayMovies(movies);
    Storage.saveMovies(movies);
  });

  let slideIndex = 0; // Initialize slideIndex to 0
  let slideImageId;

  showSlides(); // Initial call to showSlides function

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

    allSlides[slideIndex - 1].style.display = "block";
    allSlides[slideIndex - 1].style.animation = "slideAndFade 7s ease-out";
  }

  // Start the carousel
  slideImageId = setInterval(showSlides, 10000);
});

class Storage {
  static saveMovies(movies){
    localStorage.setItem('movies', JSON.stringify(movies));
  }
  
  static getMovies(id){
    let movies = JSON.parse(localStorage.getItem('movies'));
    return movies.find(movie => movie.id === id);
  }
}

