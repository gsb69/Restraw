export function createNavigation(renderPage) {
    const nav = document.createElement('nav');
    nav.className = 'navbar';
    
    const restaurantName = document.createElement('div');
    restaurantName.className = 'restaurant-name';
    restaurantName.textContent = 'Our Restaurant';
    nav.appendChild(restaurantName);
    
    const navLinks = document.createElement('div');
    navLinks.className = 'nav-links';
    
    ['home', 'menu', 'contact'].forEach(page => {
        const button = document.createElement('button');
        button.textContent = page.charAt(0).toUpperCase() + page.slice(1);
        button.setAttribute('data-page', page);
        button.addEventListener('click', () => renderPage(page));
        navLinks.appendChild(button);
    });
    
    nav.appendChild(navLinks);
    return nav;
} 