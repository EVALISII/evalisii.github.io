<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home | Bakemono Bakers</title>
    <link rel="stylesheet" type="text/css" href="https://evalisii.github.io/style.css">
</head>
<body>
    <header>
        <!-- Navigation Bar Section -->
        <nav class="main-nav">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="preorder.html">Preorder</a></li>
                <li><a href="faq.html">FAQ</a></li>
            </ul>
        </nav>
        
        <div class="logo">
            <a href="index.html"><img src="images/bakemono-logo-2.png" alt="Site Logo"></a>
        </div>
        
        <div class="search-bar">
            <form action="search.html" method="get">
                <input type="text" name="q" placeholder="Enter here...">
                <button type="submit">Search</button>
            </form>
        </div>
    </header>

     <!-- Hero Section -->
    <section id="hero-section" class="content-section">
        <div class="hero-content">
            <h1>Welcome to Bakemono Bakers</h1>
            <p>Discover our authentic Japanese & Korean inspired pastries, drinks & baked goods!</p>
            <button>Order Now</button>
        </div>
    </section>

    <!-- About Us Section -->
    <section id="about-section" class="content-section">
        <div class="about-content">
            <h2>About Us</h2>
            <p>Nestled in a cozy corner of Little Lonsdale Street, Bakemono is home to a snack selection of carefully curated Japanese & Korean pastries and drinks.</p>
            <p>Our signature product is a tall, puffy Danish bursting with flavors like blueberries and custard, nutella and jammy berries, or apple and stewed rhubarb.</p>
        </div>
    </section>

    <!-- Baking Schedule Section -->
    <section id="baking-schedule">
        <div class="cs-container">
            <div class="cs-image-group">
                <picture class="cs-picture">
                    <!--Mobile Image-->
                    <source media="(max-width: 600px)" srcset="https://thecitylane.com/wp-content/uploads/2023/02/X1002892.jpg">
                    <!--Tablet and above Image-->
                    <source media="(min-width: 601px)" srcset="https://thecitylane.com/wp-content/uploads/2023/02/X1002892.jpg">
                    <img loading="lazy" decoding="async" src="https://thecitylane.com/wp-content/uploads/2023/02/X1002892.jpg" alt="dermatologist" width="324" height="467">
                </picture>
                <img class="cs-graphic cs-brown" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/brown-lines2.svg" alt="graphic" width="100" height="98" aria-hidden="true">
                <img class="cs-graphic cs-peach" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/peach-blob.svg" alt="graphic" width="42" height="31" aria-hidden="true">
                <img class="cs-graphic cs-leaf" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/leaf-reverse.svg" alt="graphic" width="136" height="171" aria-hidden="true">
                <img class="cs-graphic cs-dots" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/beige-dots.svg" alt="graphic" width="159" height="88" aria-hidden="true">
                <img class="cs-graphic cs-lines" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/mesh-reverse.svg" alt="graphic" width="150" height="165" aria-hidden="true">
            </div>
            <div class="cs-wrapper">
                <ul class="cs-card-group">
                    <div class="header">
                        <h1>Baking Schedule</h1>
                    </div>
                    <li class="cs-item">
                        <img class="cs-number-img" src="images/croissant.png" alt="pastry">
                        <div class="cs-flex">
                            <h3 class="cs-h3">Pastries</h3>
                            <p class="cs-item-text">7:30 - 8:30</p>
                        </div>
                    </li>
                    <li class="cs-item">
                        <img class="cs-number-img" src="images/canele.png" alt="canele">
                        <div class="cs-flex">
                            <h3 class="cs-h3">Canelé | Rum & Vanilla</h3>
                            <p class="cs-item-text">9:00 ~</p>
                        </div>
                    </li>
                    <li class="cs-item">
                        <img class="cs-number-img" src="images/matcha.png" alt="matcha tea">
                        <div class="cs-flex">
                            <h3 class="cs-h3">Matcha | Earl Grey</h3>
                            <p class="cs-item-text">10:30 ~</p>
                        </div>
                    </li>
                    <li class="cs-item">
                        <img class="cs-number-img" src="images/meronpan3.png" alt="meronpan">
                        <div class="cs-flex">
                            <h3 class="cs-h3">Meronpan</h3>
                            <p class="cs-item-text">11:00 ~</p>
                        </div>
                    </li>
                    <li class="cs-item">
                        <img class="cs-number-img" src="images/shokupan.png" alt="shokupan">
                        <div class="cs-flex">
                            <h3 class="cs-h3">Shokupan | Shiopan</h3>
                            <p class="cs-item-text">11:30 ~</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</body>

   <!-- Blog Section -->
    <section id="news-section" class="content-section">
        <h2>Latest News</h2>
        <div class="articles-container">
            <div class="news-article">
                <h3>New Japanese/Korean-Inspired Bakery</h3>
                <a href="https://www.broadsheet.com.au/melbourne/food-and-drink/article/first-look-bakemono-new-japanese-inspired-bakery-converted-city-garage">
                    <img src="images/bakemono-article.jpeg" alt="Bakemono Cashier">
                </a>
                <p>Published on <time datetime="2020-07-21">21st July, 2020</time></p>
                <p>"It’s 11am on a Saturday, and the small “sold out” sign has already gone up beside a display of dome-shaped garlic bread at Bakemono Bakers. By 2pm, everything else is gone, too."</p>
            </div>
            <div class="news-article">
                <h3>Sold Out Early</h3>
                <a href="https://danielfooddiary.com/2023/02/15/bakemonobakers/">
                    <img src="images/bakemono-soldout.jpeg" alt="Bakemono Pastry Sold Out">
                </a>
                <p>Published on <time datetime="2023-02-15">15th February, 2023</time></p>
                <p>"Do not be surprised if you find all your favourite pastries gone even if you arrive ‘early’ enough to Bakemono Bakers."</p>
            </div>
        </div>
    </section>

<!-- Reviews Section -->
    <section id="reviews-section" class="content-section">
        <!-- Testimonials/Reviews content goes here -->
        <h2>Reviews</h2>
        <div class="review">
            <img src="images/bakemono-review.webp" alt="Five Star Review">
            <p>"Best Pastries in Melbourne!"</p>
            <p>- Miyawaki Sakura</p>
        </div>
        <div class="review">
            <img src="images/bakemono-review.webp" alt="Five Star Review">
            <p>"Lovely Cafe!"</p>
            <p>- Toby Maguire</p>
        </div>
        <div class="review">
            <img src="images/bakemono-review.webp" alt="Five Star Review">
            <p>"Always freshly baked"</p>
            <p>- Peter Parker</p>
        </div>
    </section>

    <!-- Footer Section -->
<footer>
    <div class="footer-container">
        
    <div class="footer-section navigation-links">
            <h4>Useful Links</h4>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="preorder.html">Preorder</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="FAQ.html">FAQ's</a></li>
                <li><a href="privacy.html">Privacy Policy</a></li>
                <li><a href="terms.html">Terms of Service</a></li>
            </ul>
        </div>
        
        <div class="footer-section social-media">
            <h4>Follow Us</h4>
            <a href="https://facebook.com/bakemonobakers" target="_blank">Facebook</a>
            <a href="https://instagram.com/bakemono_bakers" target="_blank">Instagram</a>
        </div>
        
        <div class="footer-section loyalty program">
            <h4>Loyalty Program</h4>
            <form action="join us.html" method="post">
                <input type="email" name="email" placeholder="Your email address">
                <button type="join us">Subscribe</button>
            </form>
        </div>

        <div class="footer-section contact-info">
            <h4>Contact Us</h4>
            <p>Shop B 273 Little Lonsdale Street, Melbourne VIC 3000 Australia</p>
            <p>Phone: +61 402 258 210</p>
            <p>Email: <a href="mailto:hello@bakemonobakers.com.au">hello@bakemonobakers.com.au</a></p>
        </div>
         
        <div class="footer-section copyright">
            <p>&copy; 2024 Bakemono Bakers. All rights reserved.</p>
        </div>
    </div>
</footer>

</html>
