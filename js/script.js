window.addEventListener('load', () => {
    const btnCart = document.querySelector('#primary-menu-cart-btn');
    const elmCartMenu = document.querySelector('#primary-menu-cart');

    // toggle menu
    btnCart.addEventListener('click', () => {
        elmCartMenu.classList.toggle('active');
    });
});