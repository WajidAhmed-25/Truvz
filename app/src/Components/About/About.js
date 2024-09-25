import React from 'react'


const About = () => {
  return (
    <div>
      


    

      <div className="">









<div className="form-back-drop"></div>



<section className="hidden-bar">
    <div className="inner-box text-center">
        <div className="cross-icon"><span className="fa fa-times"></span></div>
        <div className="title">
            <h4>Get Appointment</h4>
        </div>


        <div className="appointment-form">
            <form method="post" action="/Contact">
                <div className="form-group">
                    <input type="text" name="text" value="" placeholder="Name" required/>
                </div>
                <div className="form-group">
                    <input type="email" name="email" value="" placeholder="Email Address" required/>
                </div>
                <div className="form-group">
                    <textarea placeholder="Message" rows="5"></textarea>
                </div>
                <div className="form-group">
                    <button type="submit" className="theme-btn style-two">
                        <span data-hover="Submit now">Submit now</span>
                        <i className="fal fa-arrow-right"></i>
                    </button>
                </div>
            </form>
        </div>


        <div className="social-style-one">
            <a href="/Contact"><i className="fab fa-twitter"></i></a>
            <a href="/Contact"><i className="fab fa-facebook-f"></i></a>
            <a href="/Contact"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-pinterest-p"></i></a>
        </div>
    </div>
</section>



<section className="page-banner-area pt-50 pb-35 rel z-1 bgs-cover" style={{backgroundSize:"cover",backgroundImage: "url('https://images.unsplash.com/photo-1496950866446-3253e1470e8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
    <div className="container">
        <div className="banner-inner text-white">
            <h2 className="page-title mb-10" data-aos="fade-left" data-aos-duration="1500" data-aos-offset="50">About Us</h2>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center mb-20" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1500" data-aos-offset="50">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active">About Us</li>
                </ol>
            </nav>
        </div>
    </div>
</section>

<section className="about-area-two py-100 rel z-1">
    <div className="container">
        <div className="row justify-content-between">
            <div className="col-xl-3" data-aos="fade-right" data-aos-duration="1500" data-aos-offset="50">
                <span className="subtitle mb-35">About Company</span>
            </div>
            <div className="col-xl-9">
                <div className="about-page-content" data-aos="fade-left" data-aos-duration="1500" data-aos-offset="50">
                    <div className="row">
                        <div className="col-lg-8 pe-lg-5 me-lg-5">
                            <div className="section-title mb-25">
                                <h2>Experience and Professional Tours & Travel Agency in the World</h2>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="experience-years rmb-20">
                                <span className="title bgc-secondary">Years Of Experience</span>
                                <span className="text">We have</span>
                                <span className="years">28+</span>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <p>We specialize in crafting unforgettable city experiences for travelers seeking discover the heart and soul of urban landscapes. Our expertly guided tours take journey through vibrant streets, historic landmarks, and hidden gems of each city.</p>
                            <ul className="list-style-two mt-35">
                                <li>Experience Agency</li>
                                <li>Professional Team</li>
                                <li>Low Cost Travel</li>
                                <li>Online Support 24/7</li>
                            </ul>
                            <a href="/AboutUs" className="theme-btn style-three mt-30">
                                <span data-hover="Explore Tours">Explore Tours</span>
                                <i className="fal fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="about-features-area">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-xl-4 col-md-6">
                <div className="about-feature-image" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
                    <img src="https://images.unsplash.com/photo-1503221043305-f7498f8b7888?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About"/>
                </div>
            </div>
            <div className="col-xl-4 col-md-6">
                <div className="about-feature-image" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1500" data-aos-offset="50">
                    <img src="https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About"/>
                </div>
            </div>
            <div className="col-xl-4 col-md-8">
                <div className="about-feature-boxes" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500" data-aos-offset="50">
                    <div className="feature-item style-three bgc-secondary">
                        <div className="icon-title">
                            <div className="icon"><i className="flaticon-award-symbol"></i></div>
                            <h5><a href="/Destination">We Are Award Winning Company</a></h5>
                        </div>
                        <div className="content">
                            <p>At Pinnacle Business Solutions commitment to excellence and innovation earned</p>
                        </div>
                    </div>
                    <div className="feature-item style-three bgc-primary">
                        <div className="icon-title">
                            <div className="icon"><i className="flaticon-tourism"></i></div>
                            <h5><a href="/Destination">5000+ Popular tour destinations</a></h5>
                        </div>
                        <div className="content">
                            <p>Our team of experts is dedicate developing cutting-edge strategies drive success</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="about-us-area pt-70 pb-100 rel z-1">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
                <div className="about-us-content rmb-55" data-aos="fade-left" data-aos-duration="1500" data-aos-offset="50">
                    <div className="section-title mb-25">
                        <h2>Travel with Confidence Top Reasons to Choose Our Agency</h2>
                    </div>
                    <p>We work closely with our clients to understand challenges and objectives, providing customized solutions to enhance efficiency boost profitability, and foster sustainable growth.</p>
                    <div className="row pt-25">
                        <div className="col-6">
                            <div className="counter-item counter-text-wrap">
                                <span className="count-text k-plus" data-speed="3000" data-stop="3">0</span>
                                <span className="counter-title">Popular Destination</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="counter-item counter-text-wrap">
                                <span className="count-text m-plus" data-speed="3000" data-stop="9">0</span>
                                <span className="counter-title">Satisfied Clients</span>
                            </div>
                        </div>
                    </div>
                    <a href="/Destination" className="theme-btn mt-10 style-two">
                        <span data-hover="Explore Destinations">Explore Destinations</span>
                        <i className="fal fa-arrow-right"></i>
                    </a>
                </div>
            </div>
            <div className="col-xl-7 col-lg-6" data-aos="fade-right" data-aos-duration="1500" data-aos-offset="50">
                <div className="about-us-page">
                    <img src="https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About"/>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="about-team-area pb-70 rel z-1">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-12">
                <div className="section-title text-center counter-text-wrap mb-50" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
                    <h2>Meet Our Experience Travel Guides</h2>
                    <p>One site <span className="count-text plus bgc-primary" data-speed="3000" data-stop="34500">0</span> most popular experience you’ll remember</p>
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="team-item hover-content" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
                    <img src="https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Guide"/>
                    <div className="content">
                        <h6>John L. Simmons</h6>
                        <span className="designation">Co-founder</span>
                        <div className="social-style-one inner-content">
                            <a href="/Contact"><i className="fab fa-twitter"></i></a>
                            <a href="/Contact"><i className="fab fa-facebook-f"></i></a>
                            <a href="/Contact"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="team-item hover-content" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1500" data-aos-offset="50">
                    <img src="https://images.pexels.com/photos/3551207/pexels-photo-3551207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Guide"/>
                    <div className="content">
                        <h6>Andrew K. Manley</h6>
                        <span className="designation">Senior Guide</span>
                        <div className="social-style-one inner-content">
                            <a href="/Contact"><i className="fab fa-twitter"></i></a>
                            <a href="/Contact"><i className="fab fa-facebook-f"></i></a>
                            <a href="/Contact"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="team-item hover-content" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500" data-aos-offset="50">
                    <img src="https://images.pexels.com/photos/2224424/pexels-photo-2224424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Guide"/>
                    <div className="content">
                        <h6>Drew J. Bridges</h6>
                        <span className="designation">Travel Guide</span>
                        <div className="social-style-one inner-content">
                            <a href="/Contact"><i className="fab fa-twitter"></i></a>
                            <a href="/Contact"><i className="fab fa-facebook-f"></i></a>
                            <a href="/Contact"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="team-item hover-content" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1500" data-aos-offset="50">
                    <img src="https://images.pexels.com/photos/3018992/pexels-photo-3018992.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Guide"/>
                    <div className="content">
                        <h6>Byron F. Simpson</h6>
                        <span className="designation">Travel Guide</span>
                        <div className="social-style-one inner-content">
                            <a href="/Contact"><i className="fab fa-twitter"></i></a>
                            <a href="/Contact"><i className="fab fa-facebook-f"></i></a>
                            <a href="/Contact"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="about-feature-two bgc-black pt-100 pb-45 rel z-1">
    <div className="container">
        <div className="section-title text-center text-white counter-text-wrap mb-50" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
            <h2>How to Benefit Our Truvz Tours & Travels</h2>
            <p>One site <span className="count-text plus" data-speed="3000" data-stop="34500">0</span> most popular experience you’ll remember</p>
        </div>
        <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
                <div className="feature-item style-two">
                    <div className="icon"><i className="flaticon-save-money"></i></div>
                    <div className="content">
                        <h5><a href="/Destination">Best Rate Guarantee</a></h5>
                        <p>Tent camping is wonderful way to connect with nature</p>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1500" data-aos-offset="50">
                <div className="feature-item style-two">
                    <div className="icon"><i className="flaticon-travel-1"></i></div>
                    <div className="content">
                        <h5><a href="/Destination">Diverse Destinations</a></h5>
                        <p>Mountain biking is exhilarat sport that physical fitness</p>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500" data-aos-offset="50">
                <div className="feature-item style-two">
                    <div className="icon"><i className="flaticon-booking"></i></div>
                    <div className="content">
                        <h5><a href="/Destination">Fast Booking</a></h5>
                        <p>Kayaking is a thrilling outdoor activity that adventure</p>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1500" data-aos-offset="50">
                <div className="feature-item style-two">
                    <div className="icon"><i className="flaticon-guidepost"></i></div>
                    <div className="content">
                        <h5><a href="/Destination">Best Travel Guide</a></h5>
                        <p>Fishing and boat quintessent activities that bring</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="shape">
        <img src="assets/images/video/shape1.png" alt="shape"/>
    </div>
</section>

<div className="video-area pt-25 rel z-1">
    <div className="container">
        <div className="video-wrap" data-aos="zoom-in" data-aos-duration="1500" data-aos-offset="50">
            {/* <img src="assets/images/video/video-bg.jpg" alt="Video"/> */}
            <video 
            style={{height:'600px',width:'100%'}}
    src="https://pdftowebp.com/wp-content/uploads/travel_site%20(1).mp4"
    autoPlay
    muted
    loop
  ></video>
            <a href="https://pdftowebp.com/wp-content/uploads/travel_site%20(1).mp4" className="mfp-iframe video-play" tabIndex="-1"><i className="fas fa-play"></i></a>
        </div>
    </div>
    <div className="for-bg bgc-black">
        <div className="shape">
            <img src="assets/images/video/shape2.png" alt="shape"/>
        </div>
    </div>
</div>

<section className="testimonials-area py-100 rel z-1">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6">
                <div className="testimonial-left-content rmb-50" data-aos="fade-right" data-aos-duration="1500" data-aos-offset="50">
                    <img src="https://images.pexels.com/photos/2162891/pexels-photo-2162891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Testimonial"/>
                    <div className="happy-customer text-white bgc-primary">
                        <h6>850K+ Happy Customer</h6>
                        <div className="feature-authors mb-15">
                            <img src="assets/images/features/feature-author1.jpg" alt="Author"/>
                            <img src="assets/images/features/feature-author2.jpg" alt="Author"/>
                            <img src="assets/images/features/feature-author3.jpg" alt="Author"/>
                            <span>4k+</span>
                        </div>
                        <hr/>
                        <p>Positive Reviews</p>
                        <div className="testi-header">
                            <div className="ratting">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="testimonial-right-content" data-aos="fade-left" data-aos-duration="1500" data-aos-offset="50">
                    <div className="section-title mb-55">
                        <h2><span>5280</span>  Global Clients Say About Us Services</h2>
                    </div>
                    <div className="testimonials-active">
                        <div className="testimonial-item">
                            <div className="testi-header">
                                <div className="quote"><i className="flaticon-double-quotes"></i></div>
                                <h4>Quality Services</h4>
                                <div className="ratting">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                            <div className="text">"Our trip was absolutely a perfect, thanks this travel agency! They took care of every detail, from to accommodations, and even suggested incredible experiences"</div>
                            <div className="author">
                                <div className="image"><img src="https://png.pngtree.com/png-clipart/20220909/original/pngtree-women-cartoon-avatar-in-flat-style-png-image_8515458.png" alt="Author"/></div>
                                <div className="content">
                                    <h5>Randall V. Vasquez</h5>
                                    <span>Graphics Designer</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <div className="testi-header">
                                <div className="quote"><i className="flaticon-double-quotes"></i></div>
                                <h4>Quality Services</h4>
                                <div className="ratting">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                            <div className="text">"Our trip was absolutely a perfect, thanks this travel agency! They took care of every detail, from to accommodations, and even suggested incredible experiences"</div>
                            <div className="author">
                                <div className="image"><img src="assets/images/testimonials/author.jpg" alt="Author"/></div>
                                <div className="content">
                                    <h5>Randall V. Vasquez</h5>
                                    <span>Graphics Designer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<div className="client-logo-area mb-100">
    <div className="container">
        <div className="client-logo-wrap pt-60 pb-55">
            <div className="text-center mb-40" data-aos="zoom-in" data-aos-duration="1500" data-aos-offset="50">
                <h6>We’re recommended by:</h6>
            </div>
            <div className="client-logo-active">
                <div className="client-logo-item" data-aos="flip-up" data-aos-duration="1500" data-aos-offset="50">
                    <a href="#"><img src="assets/images/client-logos/client-logo1.png" alt="Client Logo"/></a>
                </div>
                <div className="client-logo-item" data-aos="flip-up" data-aos-delay="50" data-aos-duration="1500" data-aos-offset="50">
                    <a href="#"><img src="assets/images/client-logos/client-logo2.png" alt="Client Logo"/></a>
                </div>
                <div className="client-logo-item" data-aos="flip-up" data-aos-delay="100" data-aos-duration="1500" data-aos-offset="50">
                    <a href="#"><img src="assets/images/client-logos/client-logo3.png" alt="Client Logo"/></a>referrerPolicy
                </div>
                <div className="client-logo-item" data-aos="flip-up" data-aos-delay="150" data-aos-duration="1500" data-aos-offset="50">
                    <a href="#"><img src="assets/images/client-logos/client-logo4.png" alt="Client Logo"/></a>
                </div>
                <div className="client-logo-item" data-aos="flip-up" data-aos-delay="200" data-aos-duration="1500" data-aos-offset="50">
                    <a href="#"><img src="assets/images/client-logos/client-logo5.png" alt="Client Logo"/></a>
                </div>
            </div>
        </div>
    </div>
</div>




</div>





















    </div>
  )
}

export default About
