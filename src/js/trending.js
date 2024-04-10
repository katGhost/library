import { dataSection } from "./trend-data.js";


const gridView = document.querySelector('.grid')

function displayAllMovies(dataSection) {
    let displayItems = dataSection.map((item)=> {
 
       return `
       <article class="item">
          <img src=${item.image} alt="movie" class="movie-cover" />
            <div class="about-movie">
                <p>$ ${item.price}</p>
                <button>${item.title}</button>
            </div>
       </article>
       `;
    });
 
    displayItems = displayItems.join('');
    gridView.innerHTML = displayItems;
 };
 
 addEventListener('DOMContentLoaded', () => {
    displayAllMovies(dataSection)
 });