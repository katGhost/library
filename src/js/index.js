/*========================================================
   DOM 
=========================================================*/
const cartBtn = document.querySelector('.cart-btn');
const closeCartBtn = document.querySelector('.close-cart');
const clearCartBtn = document.querySelector('.clear-btn');
const cartDOM = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const productsDOM = document.querySelector('.products-center');
const bannerBtn = document.querySelector('.banner-btn');
const plansCard = document.querySelectorAll('.plan-wrapper');
/*========================================================
   DOM END
=========================================================*/


// vanilla tilt on subscription cards
VanillaTilt.init(plansCard, {
   max: 15,
   speed: 250,
   glare: true,
   "max-glare": 1,
});



