import React from 'react'

const Blog_Area = () => {
  return (
    <div>
      
      <section class="blog-area py-70 rel z-1">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="section-title text-center counter-text-wrap mb-70" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
                            <h2 className='work'>Read Latest News & Blog</h2>
                            <p style={{color:'white'}}>One site <span class="count-text plus bgc-primary" data-speed="3000" data-stop="34500">0</span> most popular experience you’ll remember</p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-xl-4 col-md-6">
                        <div class="blog-item" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
                            <div class="content">
                                <a href="/Blogs" class="category">Travel</a>
                                <h5><a href="/Blogs_Details">Ultimate Guide to Planning Your Dream Vacation with Truvz Travel Agency</a></h5>
                                <ul class="blog-meta">
                                    <li><i class="far fa-calendar-alt"></i> <a href="#">25 February 2024</a></li>
                                    <li><i class="far fa-comments"></i> <a href="#">Comments (5)</a></li>
                                </ul>
                            </div>
                            <div class="image">
                                <img src="https://images.pexels.com/photos/2058758/pexels-photo-2058758.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Blog"/>
                            </div>
                            <a href="/Blogs_Details" class="theme-btn">
                                <span data-hover="Book Now">Read More</span>
                                <i class="fal fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6">
                        <div class="blog-item" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1500" data-aos-offset="50">
                            <div class="content">
                                <a href="blog.html" class="category">Travel</a>
                                <h5><a href="/Blogs_Details">Unforgettable Adventures Travel Agency Bucket List Experiences</a></h5>
                                <ul class="blog-meta">
                                    <li><i class="far fa-calendar-alt"></i> <a href="#">25 February 2024</a></li>
                                    <li><i class="far fa-comments"></i> <a href="#">Comments (5)</a></li>
                                </ul>
                            </div>
                            <div class="image">
                                <img src="https://images.pexels.com/photos/1585960/pexels-photo-1585960.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Blog"/>
                            </div>
                            <a href="/Blogs_Details" class="theme-btn">
                                <span data-hover="Book Now">Read More</span>
                                <i class="fal fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6">
                        <div class="blog-item" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500" data-aos-offset="50">
                            <div class="content">
                                <a href="blog.html" class="category">Travel</a>
                                <h5><a href="/Blogs_Details">Exploring Culture and way Cuisine Travel Agency's they Best Foodie Destinations</a></h5>
                                <ul class="blog-meta">
                                    <li><i class="far fa-calendar-alt"></i> <a href="#">25 February 2024</a></li>
                                    <li><i class="far fa-comments"></i> <a href="#">Comments (5)</a></li>
                                </ul>
                            </div>
                            <div class="image">
                                <img src="https://images.pexels.com/photos/2273664/pexels-photo-2273664.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Blog"/>
                            </div>
                            <a href="/Blogs_Details" class="theme-btn">
                                <span data-hover="Book Now">Read More</span>
                                <i class="fal fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Blog_Area
