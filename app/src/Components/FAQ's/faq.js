import React from 'react'
import Letter from '../Newsletter/Letter'

const FAQs = () => {
  return (
    <div>
      


      <div class="">


<div class="preloader"><div class="custom-loader"></div></div>





<div class="form-back-drop"></div>


<section class="hidden-bar">
    <div class="inner-box text-center">
        <div class="cross-icon"><span class="fa fa-times"></span></div>
        <div class="title">
            <h4>Get Appointment</h4>
        </div>

 
        <div class="appointment-form">
            <form method="post" action="/Contact">
                <div class="form-group">
                    <input type="text" name="text" value="" placeholder="Name" required/>
                </div>
                <div class="form-group">
                    <input type="email" name="email" value="" placeholder="Email Address" required/>
                </div>
                <div class="form-group">
                    <textarea placeholder="Message" rows="5"></textarea>
                </div>
                <div class="form-group">
                    <button type="submit" class="theme-btn style-two">
                        <span data-hover="Submit now">Submit now</span>
                        <i class="fal fa-arrow-right"></i>
                    </button>
                </div>
            </form>
        </div>

        
        <div class="social-style-one">
            <a href="/Contact"><i class="fab fa-twitter"></i></a>
            <a href="/Contact"><i class="fab fa-facebook-f"></i></a>
            <a href="/Contact"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-pinterest-p"></i></a>
        </div>
    </div>
</section>

<section class="page-banner-area pt-50 pb-35 rel z-1 bgs-cover" style={{backgroundImage: "url('https://images.pexels.com/photos/11022636/pexels-photo-11022636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}>
    <div class="container">
        <div class="banner-inner text-white">
            <h2 class="page-title mb-10" data-aos="fade-left" data-aos-duration="1500" data-aos-offset="50">FAQs</h2>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center mb-20" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1500" data-aos-offset="50">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item active">FAQs</li>
                </ol>
            </nav>
        </div>
    </div>
</section>

{/* <section class="faq-page-about pt-100 rel z-1">
    <div class="container">
        <div class="row align-items-center justify-content-between">
            <div class="col-lg-6">
                <div class="faq-page-about-content mb-30 rmb-55" data-aos="fade-left" data-aos-duration="1500" data-aos-offset="50">
                    <div class="section-title mb-30">
                        <h2>Destination Dreams The Insider’s Guide to Exceptional Travel Experiences</h2>
                    </div>
                    <p>Tours and travels play a crucial role in enriching lives by offering unique experiences, cultural exchanges, and the joy of exploration.</p>
                    <ul class="list-style-two mt-35 mb-20">
                        <li>Experience Agency</li>
                        <li>Professional Team</li>
                        <li>Low Cost Travel</li>
                        <li>Online Support 24/7</li>
                    </ul>
                    <a href="/Contact" class="theme-btn style-two">
                        <span data-hover="Book Now">Book Now</span>
                        <i class="fal fa-arrow-right"></i>
                    </a>
                </div>
            </div>
            <div class="col-lg-6" data-aos="fade-right" data-aos-duration="1500" data-aos-offset="50">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="image mb-30">
                            <img class="br-10 w-100" src="assets/images/destinations/faq1.jpg" alt="FAQ"/>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="image mb-30">
                            <img class="br-10 w-100" src="assets/images/destinations/faq2.jpg" alt="FAQ"/>
                        </div>
                        <div class="image mb-30">
                            <img class="br-10 w-100" src="assets/images/destinations/faq3.jpg" alt="FAQ"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> */}

<section class="faq-page-area pt-70 pb-85 rel z-1">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-10">
                <div class="section-title text-center counter-text-wrap mb-50" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
                    <h2>Frequently Asked Questions</h2>
                    <p>One site <span class="count-text plus" data-speed="3000" data-stop="34500">0</span> most popular experience you’ll remember</p>
                </div>
                <div class="accordion-one" id="faq-accordion">
                    <div class="accordion-item" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
                        <h5 class="accordion-header">
                            <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                               1. What services does your tour and travel agency offer?
                            </button>
                        </h5>
                        <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                            <div class="accordion-body">
                                <p>To take a trivial example which undertakes laborious physical exercise except to obtain some advantage pleasure annoying consequences</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
                        <h5 class="accordion-header">
                            <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                2. How do I book a tour or travel package?
                            </button>
                        </h5>
                        <div id="collapseTwo" class="accordion-collapse collapse show" data-bs-parent="#faq-accordion">
                            <div class="accordion-body">
                                <p>You can book a tour or travel package through our website, by calling our customer service, or by visiting our office. Our representatives will assist you in selecting the best options based on your preferences.</p>
                                <ul class="list-style-two pt-10">
                                    <li>Experience Agency</li>
                                    <li>Professional Team</li>
                                    <li>Low Cost Travel</li>
                                    <li>Online Support 24/7</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
                        <h5 class="accordion-header">
                            <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                3. What types of tours do you offer?
                            </button>
                        </h5>
                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                            <div class="accordion-body">
                                <p>To take a trivial example which undertakes laborious physical exercise except to obtain some advantage pleasure annoying consequences</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
                        <h5 class="accordion-header">
                            <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                                4. Can I customize my travel package?
                            </button>
                        </h5>
                        <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                            <div class="accordion-body">
                                <p>To take a trivial example which undertakes laborious physical exercise except to obtain some advantage pleasure annoying consequences</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
                        <h5 class="accordion-header">
                            <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFive">
                                5. Are your tours suitable for families with children?
                            </button>
                        </h5>
                        <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                            <div class="accordion-body">
                                <p>To take a trivial example which undertakes laborious physical exercise except to obtain some advantage pleasure annoying consequences</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
                        <h5 class="accordion-header">
                            <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseSix">
                                6. What payment methods do you accept?
                            </button>
                        </h5>
                        <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                            <div class="accordion-body">
                                <p>To take a trivial example which undertakes laborious physical exercise except to obtain some advantage pleasure annoying consequences</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
                        <h5 class="accordion-header">
                            <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseSeven">
                                7. Is a deposit required when booking a tour?
                            </button>
                        </h5>
                        <div id="collapseSeven" class="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                            <div class="accordion-body">
                                <p>To take a trivial example which undertakes laborious physical exercise except to obtain some advantage pleasure annoying consequences</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
                        <h5 class="accordion-header">
                            <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseEight">
                                8. Can I make changes to my booking after it has been confirmed?
                            </button>
                        </h5>
                        <div id="collapseEight" class="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                            <div class="accordion-body">
                                <p>To take a trivial example which undertakes laborious physical exercise except to obtain some advantage pleasure annoying consequences</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
                        <h5 class="accordion-header">
                            <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseNine">
                                9. What is your cancellation policy?
                            </button>
                        </h5>
                        <div id="collapseNine" class="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                            <div class="accordion-body">
                                <p>To take a trivial example which undertakes laborious physical exercise except to obtain some advantage pleasure annoying consequences</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
                        <h5 class="accordion-header">
                            <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTen">
                                10. How do I know if my booking is confirmed?
                            </button>
                        </h5>
                        <div id="collapseTen" class="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                            <div class="accordion-body">
                                <p>To take a trivial example which undertakes laborious physical exercise except to obtain some advantage pleasure annoying consequences</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="faq-page-featuers pb-70 rel z-1">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xxl-3 col-xl-4 col-md-6" data-aos="flip-left" data-aos-duration="1500" data-aos-offset="50">
                <div class="feature-item style-three">
                    <div class="icon"><i class="flaticon-route"></i></div>
                    <div class="content">
                        <h6><a href="/Destination">500+ Destinations</a></h6>
                        <p>Adventure seekers can embark thrilling journeys through the Amazon Rainforest or scale</p>
                    </div>
                </div>
            </div>
            <div class="col-xxl-3 col-xl-4 col-md-6" data-aos="flip-left" data-aos-delay="50" data-aos-duration="1500" data-aos-offset="50">
                <div class="feature-item style-three bgc-secondary">
                    <div class="icon"><i class="flaticon-best-price"></i></div>
                    <div class="content">
                        <h6><a href="/Destination">Best Price Guarantee</a></h6>
                        <p>Adventure seekers can embark thrilling journeys through the Amazon Rainforest or scale</p>
                    </div>
                </div>
            </div>
            <div class="col-xxl-3 col-xl-4 col-md-6" data-aos="flip-left" data-aos-delay="100" data-aos-duration="1500" data-aos-offset="50">
                <div class="feature-item style-three bgc-primary">
                    <div class="icon"><i class="flaticon-travel-1"></i></div>
                    <div class="content">
                        <h6><a href="/Destination">Diverse Destinations</a></h6>
                        <p>Adventure seekers can embark thrilling journeys through the Amazon Rainforest or scale</p>
                    </div>
                </div>
            </div>
            <div class="col-xxl-3 col-xl-4 col-md-6" data-aos="flip-left" data-aos-delay="150" data-aos-duration="1500" data-aos-offset="50">
                <div class="feature-item style-three bgc-pink">
                    <div class="icon"><i class="flaticon-guidepost"></i></div>
                    <div class="content">
                        <h6><a href="/Destination">Best Travel Guide</a></h6>
                        <p>Adventure seekers can embark thrilling journeys through the Amazon Rainforest or scale</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<Letter/>




</div>


    </div>
  )
}

export default FAQs
