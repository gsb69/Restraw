export const pages = {
    home: `
        <div class="home">
            <div class="hero-section">
                <h1>Welcome to Our Restaurant</h1>
                <p class="tagline">Experience the finest dining with our exceptional cuisine and atmosphere</p>
                <div class="cta-buttons">
                    <button class="cta-button primary" onclick="document.querySelector('[data-page=\\'menu\\']').click()">View Menu</button>
                    <button class="cta-button secondary" onclick="document.querySelector('[data-page=\\'contact\\']').click()">Book a Table</button>
                </div>
            </div>

            <div class="features-section">
                <div class="feature-card">
                    <i class="feature-icon">🌟</i>
                    <h3>Fine Dining</h3>
                    <p>Experience culinary excellence with our award-winning chefs</p>
                </div>
                <div class="feature-card">
                    <i class="feature-icon">🍷</i>
                    <h3>Premium Bar</h3>
                    <p>Extensive wine list and craft cocktails</p>
                </div>
                <div class="feature-card">
                    <i class="feature-icon">🎵</i>
                    <h3>Live Music</h3>
                    <p>Enjoy ambient live performances every weekend</p>
                </div>
            </div>

            <div class="about-section">
                <h2>Our Story</h2>
                <p>Founded in 2010, our restaurant has been serving the community with passion and dedication. We believe in using only the finest ingredients, sourced locally whenever possible, to create unforgettable dining experiences.</p>
                <div class="stats">
                    <div class="stat-item">
                        <span class="stat-number">13+</span>
                        <span class="stat-label">Years of Excellence</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">50+</span>
                        <span class="stat-label">Signature Dishes</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">10k+</span>
                        <span class="stat-label">Happy Customers</span>
                    </div>
                </div>
            </div>
        </div>
    `,
    menu: `
        <div class="menu-page">
            <h1 class="menu-title">Our Menu</h1>
            <div class="menu-categories">
                <button class="menu-category active">All</button>
                <button class="menu-category">Starters</button>
                <button class="menu-category">Main Course</button>
                <button class="menu-category">Desserts</button>
                <button class="menu-category">Drinks</button>
            </div>

            <div class="menu-section">
                <h2>Starters</h2>
                <div class="menu-grid">
                    <div class="menu-item">
                        <div class="menu-item-image">🥗</div>
                        <h3>Caesar Salad</h3>
                        <p>Crisp romaine lettuce, parmesan cheese, croutons, and Caesar dressing</p>
                        <div class="price">$9.99</div>
                        <span class="menu-tag">Vegetarian</span>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-image">🦐</div>
                        <h3>Garlic Shrimp</h3>
                        <p>Sautéed shrimp in garlic butter sauce with fresh herbs</p>
                        <div class="price">$12.99</div>
                        <span class="menu-tag">Seafood</span>
                    </div>
                </div>
            </div>

            <div class="menu-section">
                <h2>Main Course</h2>
                <div class="menu-grid">
                    <div class="menu-item">
                        <div class="menu-item-image">🍔</div>
                        <h3>Classic Burger</h3>
                        <p>Juicy beef patty with fresh lettuce, tomato, and special sauce</p>
                        <div class="price">$12.99</div>
                        <span class="menu-tag">Popular</span>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-image">🍕</div>
                        <h3>Margherita Pizza</h3>
                        <p>Fresh tomatoes, mozzarella, basil, and olive oil</p>
                        <div class="price">$14.99</div>
                        <span class="menu-tag">Vegetarian</span>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-image">🍝</div>
                        <h3>Pasta Carbonara</h3>
                        <p>Spaghetti with creamy sauce, pancetta, and parmesan</p>
                        <div class="price">$16.99</div>
                        <span class="menu-tag">Chef's Special</span>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-image">🥩</div>
                        <h3>Grilled Ribeye</h3>
                        <p>Premium cut steak with roasted vegetables and red wine sauce</p>
                        <div class="price">$29.99</div>
                        <span class="menu-tag">Premium</span>
                    </div>
                </div>
            </div>

            <div class="menu-section">
                <h2>Desserts</h2>
                <div class="menu-grid">
                    <div class="menu-item">
                        <div class="menu-item-image">🍰</div>
                        <h3>Cheesecake</h3>
                        <p>New York style cheesecake with berry compote</p>
                        <div class="price">$8.99</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-image">🍫</div>
                        <h3>Chocolate Lava Cake</h3>
                        <p>Warm chocolate cake with molten center and vanilla ice cream</p>
                        <div class="price">$9.99</div>
                    </div>
                </div>
            </div>
        </div>
    `,
    contact: `
        <div class="contact">
            <h1>Contact Us</h1>
            <div class="contact-container">
                <div class="contact-info">
                    <div class="info-section">
                        <h3>Visit Us</h3>
                        <p><strong>Address:</strong><br>123 Restaurant Street<br>Foodville, FC 12345</p>
                        <p><strong>Phone:</strong><br>(555) 123-4567</p>
                        <p><strong>Email:</strong><br>info@ourrestaurant.com</p>
                    </div>

                    <div class="hours-section">
                        <h3>Opening Hours</h3>
                        <div class="hours-grid">
                            <div class="day">Monday - Thursday</div>
                            <div class="time">11:00 AM - 10:00 PM</div>
                            <div class="day">Friday - Saturday</div>
                            <div class="time">11:00 AM - 11:00 PM</div>
                            <div class="day">Sunday</div>
                            <div class="time">10:00 AM - 9:00 PM</div>
                        </div>
                    </div>

                    <div class="social-section">
                        <h3>Follow Us</h3>
                        <div class="social-links">
                            <a href="#" class="social-link">Facebook</a>
                            <a href="#" class="social-link">Instagram</a>
                            <a href="#" class="social-link">Twitter</a>
                        </div>
                    </div>
                </div>

                <div class="reservation-form">
                    <h3>Make a Reservation</h3>
                    <form id="booking-form">
                        <div class="form-group">
                            <label for="name">Name:</label>
                            <input type="text" id="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" id="email" required>
                        </div>
                        <div class="form-group">
                            <label for="date">Date:</label>
                            <input type="date" id="date" required>
                        </div>
                        <div class="form-group">
                            <label for="time">Time:</label>
                            <input type="time" id="time" required>
                        </div>
                        <div class="form-group">
                            <label for="guests">Number of Guests:</label>
                            <select id="guests" required>
                                <option value="">Select</option>
                                <option value="1">1 Person</option>
                                <option value="2">2 People</option>
                                <option value="3">3 People</option>
                                <option value="4">4 People</option>
                                <option value="5">5 People</option>
                                <option value="6+">6+ People</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="special-requests">Special Requests:</label>
                            <textarea id="special-requests" rows="3"></textarea>
                        </div>
                        <button type="submit" class="submit-button">Book Table</button>
                    </form>
                </div>
            </div>
        </div>
    `
}; 