import './style.css';
import { createNavigation } from './navigation.js';
import { renderPage } from './pageRenderer.js';

document.addEventListener('DOMContentLoaded', () => {
    const nav = createNavigation(renderPage);
    document.body.insertBefore(nav, document.getElementById('content'));
    
    renderPage('home');
}); 