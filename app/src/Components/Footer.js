import React from 'react'

const Footer = () => {
  return (
    <div>
      


      <footer class="main-footer bgs-cover overlay rel z-1 pb-25" style={{backgroundImage: "url('assets/images/backgrounds/footer.jpg')"}}>
            <div class="container">
                <div class="footer-top pt-100 pb-30">
                    <div class="row justify-content-between">
                        <div class="col-xl-5 col-lg-6" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
                            <div class="footer-widget footer-text">
                                <div class="footer-logo mb-25">
                                    <a href="/"><a href="/" style={{ fontSize: '30px',fontWeight:'600', color: 'white' }}>Truvz.Com</a></a>
                                </div>
                                <p>We curate bespoke itineraries tailored to your preferences, ensuring every trip is seamless and enriching hidden gems beaten</p>
                                <div class="social-style-one mt-15">
                                    <a href="/Contact"><i class="fab fa-facebook-f"></i></a>
                                    <a href="/Contact"><i class="fab fa-youtube"></i></a>
                                    <a href="/Contact"><i class="fab fa-pinterest"></i></a>
                                    <a href="/Contact"><i class="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-5 col-lg-6" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1500" data-aos-offset="50">
                            <div class="section-title counter-text-wrap mb-35">
                                <h2>Subscribe Newsletter</h2>
                                <p>One site <span class="count-text plus" data-speed="3000" data-stop="34500">0</span> most popular experience you’ll remember</p>
                            </div>
                            <form class="newsletter-form mb-50" action="#">
                                <input id="news-email" type="email" placeholder="Email Address" required/>
                                <button type="submit" class="theme-btn bgc-secondary style-two">
                                    <span data-hover="Subscribe">Subscribe</span>
                                    <i class="fal fa-arrow-right"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="widget-area pt-95 pb-45">
                <div class="container">
                    <div class="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2">
                        <div class="col col-small" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
                            <div class="footer-widget footer-links">
                                <div class="footer-title">
                                    <h5>Services</h5>
                                </div>
                                <ul class="list-style-three">
                                    <li><a href="/Destination">Best Tour Guide</a></li>
                                    <li><a href="/Destination">Tour Booking</a></li>
                                    <li><a href="/Destination">Hotel Booking</a></li>
                                    <li><a href="/Destination">Ticket Booking</a></li>
                                    <li><a href="/Destination">Rental Services</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col col-small" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1500" data-aos-offset="50">
                            <div class="footer-widget footer-links">
                                <div class="footer-title">
                                    <h5>Company</h5>
                                </div>
                                <ul class="list-style-three">
                                    <li><a href="/AboutUs">About Company</a></li>
                                    <li><a href="blog.html">Community Blog</a></li>
                                    <li><a href="/Contact">Jobs and Careers</a></li>
                                    <li><a href="blog.html">latest News Blog</a></li>
                                    <li><a href="/Contact">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col col-small" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500" data-aos-offset="50">
                            <div class="footer-widget footer-links">
                                <div class="footer-title">
                                    <h5>Destinations</h5>
                                </div>
                                <ul class="list-style-three">
                                    <li><a href="/Destination">African Safaris</a></li>
                                    <li><a href="/Destination">Alaska & Canada</a></li>
                                    <li><a href="/Destination">South America</a></li>
                                    <li><a href="/Destination">Middle East</a></li>
                                    <li><a href="/Destination">South America</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col col-small" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1500" data-aos-offset="50">
                            <div class="footer-widget footer-links">
                                <div class="footer-title">
                                    <h5>Categories</h5>
                                </div>
                                <ul class="list-style-three">
                                    <li><a href="/Contact">Adventure</a></li>
                                    <li><a href="/Contact">Hiking & Trekking</a></li>
                                    <li><a href="/Contact">Cycling Tours</a></li>
                                    <li><a href="/Contact">Family Tours</a></li>
                                    <li><a href="/Contact">Wildlife Tours</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col col-md-6 col-10 col-small" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500" data-aos-offset="50">
                            <div class="footer-widget footer-contact">
                                <div class="footer-title">
                                    <h5>Get In Touch</h5>
                                </div>
                                <ul class="list-style-one">
                                    <li><i class="fal fa-map-marked-alt"></i> 578 Level, D-block 45 Street Melbourne, Australia</li>
                                    <li><i class="fal fa-envelope"></i> <a href="mailto:supportrevelo@gmail.com">supportrevelo@gmail.com</a></li>
                                    <li><i class="fal fa-clock"></i> Mon - Fri, 08am - 05pm</li>
                                    <li><i class="fal fa-phone-volume"></i> <a href="callto:+88012334588">+880 (123) 345 88</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom pt-20 pb-5">
                <div class="container">
                    <div class="row">
                       <div class="col-lg-5">
                            <div class="copyright-text text-center text-lg-start">
                                <p>@Copy 2024 <a href="/">Truvz</a>, All rights reserved</p>
                            </div>
                       </div>
                       <div class="col-lg-7 text-center text-lg-end">
                           <ul class="footer-bottom-nav">
                               <li><a href="/AboutUs">Terms</a></li>
                               <li><a href="/AboutUs">Privacy Policy</a></li>
                               <li><a href="/AboutUs">Legal notice</a></li>
                               <li><a href="/AboutUs">Accessibility</a></li>
                           </ul>
                       </div>
                    </div>
             
                    <button class="scroll-top scroll-to-target" data-target="html"><img src="assets/images/icons/scroll-up.png" alt="Scroll  Up"/></button>
                </div>
            </div>
        </footer>

    </div>
  )
}

export default Footer
