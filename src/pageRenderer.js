import { pages } from './pages.js';

export function renderPage(pageName) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = pages[pageName];
    
    document.querySelectorAll('.nav-links button').forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('data-page') === pageName) {
            button.classList.add('active');
        }
    });
} 