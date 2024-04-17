// index.js
import { dataSection } from "./trend-data.js";

const carousel = document.querySelector('.grid-carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

function displayAllMovies(dataSection) {
    const displayItems = dataSection.map((item)=> {
        return `
            <article class="item">
                <img src=${item.image} alt="movie" class="movie-cover" />
                <div class="about-movie">
                    <p>$ ${item.price}</p>
                    <button>${item.btn}</button>
                </div>
            </article>
        `;
    }).join('');

    carousel.innerHTML = displayItems;
}

function scrollCarousel(direction) {
    const scrollAmount = 300; // Adjust this value to control scrolling speed
    if (direction === 'prev') {
        carousel.scrollBy(-scrollAmount, 0);
    } else {
        carousel.scrollBy(scrollAmount, 0);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayAllMovies(dataSection);
});

prevBtn.addEventListener('click', () => scrollCarousel('prev'));
nextBtn.addEventListener('click', () => scrollCarousel('next'));

