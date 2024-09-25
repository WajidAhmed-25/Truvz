import React from 'react'
import myimg from './sdsa.png'

const ContactUs = () => {
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

<section class="page-banner-area pt-50 pb-35 rel z-1 bgs-cover" style={{backgroundImage: "url('http://www.rq8tech.com/wp-content/uploads/2020/04/contact-us-banner.jpeg')"}}>
    <div class="container">
        <div class="banner-inner text-white">
            <h2 class="page-title mb-10" data-aos="fade-left" data-aos-duration="1500" data-aos-offset="50">Contact Us</h2>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center mb-20" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1500" data-aos-offset="50">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item active">Contact Us</li>
                </ol>
            </nav>
        </div>
    </div>
</section>

<section class="contact-info-area pt-100 rel z-1">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-4">
                <div class="contact-info-content mb-30 rmb-55" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
                    <div class="section-title mb-30">
                        <h2>Let’s Talk Our Expert Travel Guides</h2>
                    </div>
                    <p>Our dedicated support team is always ready to assist you with any questions or issues, offering prompt and personalized solutions to meet your needs.</p>
                    <div class="features-team-box mt-40">
                        <h6>85+ Expert Team member</h6>
                        <div class="feature-authors">
                            <img src="assets/images/features/feature-author1.jpg" alt="Author"/>
                            <img src="assets/images/features/feature-author2.jpg" alt="Author"/>
                            <img src="assets/images/features/feature-author3.jpg" alt="Author"/>
                            <img src="assets/images/features/feature-author4.jpg" alt="Author"/>
                            <img src="assets/images/features/feature-author5.jpg" alt="Author"/>
                            <img src="assets/images/features/feature-author6.jpg" alt="Author"/>
                            <img src="assets/images/features/feature-author7.jpg" alt="Author"/>
                            <span>+</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-8">
                <div class="row">
                    <div class="col-md-6">
                        <div class="contact-info-item" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50" data-aos-delay="50">
                            <div class="icon"><i class="fas fa-envelope"></i></div>
                            <div class="content">
                                <h5>Need Help & Support</h5>
                                <div class="text"><i class="far fa-envelope"></i> <a href="mailto:support@gmail.com">support@gmail.com</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="contact-info-item" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50" data-aos-delay="100">
                            <div class="icon"><i class="fas fa-phone"></i></div>
                            <div class="content">
                                <h5>Need Any Urgent</h5>
                                <div class="text"><i class="far fa-phone"></i> <a href="callto:+0001234588">+000 (123) 45 88</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="contact-info-item" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50" data-aos-delay="50">
                            <div class="icon"><i class="fas fa-map-marker-alt"></i></div>
                            <div class="content">
                                <h5>New York Branch</h5>
                                <div class="text"><i class="fal fa-map-marker-alt"></i> 55 East 10th Street, New York, NY 10003, United States</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="contact-info-item" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50" data-aos-delay="100">
                            <div class="icon"><i class="fas fa-map-marker-alt"></i></div>
                            <div class="content">
                                <h5>Main Office Address</h5>
                                <div class="text"><i class="fal fa-map-marker-alt"></i> 55 East 10th Street, New York, NY 10003, United States</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="contact-form-area py-70 rel z-1">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-7">
                <div class="comment-form bgc-lighter z-1 rel mb-30 rmb-55">
                    <form id="contactForm" class="contactForm" name="contactForm" action="assets/php/form-process.php" method="post" data-aos="fade-left" data-aos-duration="1500" data-aos-offset="50">
                        <div class="section-title">
                            <h2>Get In Touch</h2>
                        </div>
                        <p>Your email address will not be published. Required fields are marked *</p>
                        <div class="row mt-35">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="name">Full Name</label>
                                    <input type="text" id="name" name="name" class="form-control" placeholder="Randy J. Thomas" value="" required data-error="Please enter your Name"/>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="phone_number">Phone Number</label>
                                    <input type="text" id="phone_number" name="phone_number" class="form-control" placeholder="Phone" value="" required data-error="Please enter your Phone"/>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="email">Email Address</label>
                                    <input type="email" id="email" name="email" class="form-control" placeholder="enter email" value="" required data-error="Please enter your Email"/>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="message">Your Message</label>
                                    <textarea name="message" id="message" class="form-control" rows="5" placeholder="Message" required data-error="Please enter your Message"></textarea>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group mb-0">
                                   <ul class="radio-filter mb-25">
                                        <li>
                                            <input class="form-check-input" type="radio" name="terms-condition" id="terms-condition"/>
                                            <label for="terms-condition">Save my name, email, and website in this browser for the next time I comment.</label>
                                        </li>
                                    </ul>
                                    <button type="submit" class="theme-btn style-two">
                                        <span data-hover="Send Comments">Send Comments</span>
                                        <i class="fal fa-arrow-right"></i>
                                    </button>
                                    <div id="msgSubmit" class="hidden"></div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-lg-5">
                <div class="contact-images-part" data-aos="fade-right" data-aos-duration="1500" data-aos-offset="50">
                    <div class="row">
                        <div class="col-12">
                            <img src="https://static.vecteezy.com/system/resources/previews/020/676/307/original/have-any-questions-and-doubts-background-concept-design-with-many-question-marks-free-vector.jpg" alt="Contact"/>
                        </div>
                        <div class="col-6">
                          <h1 style={{fontSize:'60px',color:'black'}}>Let <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Us </h1>
                        </div>
                        <div class="col-6">
                        <h1 style={{fontSize:'60px',color:'black',marginLeft:'70px'}}>Know </h1>
                        </div>
                    </div>
                    <div class="circle-logo">
                        <img src="assets/images/contact/icon.png" alt="Logo"/>
                        <span class="title h2">Truvz</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<div class="contact-map" style={{ width: '100%' }}>
    <iframe  style={{ width: '100%' }} src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d96777.16150026117!2d-74.00840582560909!3d40.71171357405996!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1706508986625!5m2!1sen!2sbd"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>




</div>









    </div>
  )
}

export default ContactUs
