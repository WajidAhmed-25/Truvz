import React from 'react'

const Hero_Section = () => {
  return (
    <div>
      

      <section class="hero-area bgc-black pt-200 rpt-120 rel z-2">
            <div class="container-fluid">
                <h1 class="hero-title" data-aos="flip-up" data-aos-delay="50" data-aos-duration="1500" data-aos-offset="50">tour & Travel</h1>
                <div className="main-hero-image bg-cover" style={{ backgroundSize:"cover",backgroundAttachment:'fixed',backgroundPosition:'center',backgroundImage: "url('https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}></div>
                
            </div>
            <div class="container container-1400">
                <div class="search-filter-inner" data-aos="zoom-out-down" data-aos-duration="1500" data-aos-offset="50">
                    <div class="filter-item clearfix">
                        <div class="icon"><i class="fal fa-map-marker-alt"></i></div>
                        <span class="title">Destinations</span>
                        <select name="city" id="city">
                            <option value="value1">City or Region</option>
                            <option value="value2">City</option>
                            <option value="value2">Region</option>
                        </select>
                    </div>
                    <div class="filter-item clearfix">
                        <div class="icon"><i class="fal fa-flag"></i></div>
                        <span class="title">All Activity</span>
                        <select name="activity" id="activity">
                            <option value="value1">Choose Activity</option>
                            <option value="value2">Daily</option>
                            <option value="value2">Monthly</option>
                        </select>
                    </div>
                    <div class="filter-item clearfix">
                        <div class="icon"><i class="fal fa-calendar-alt"></i></div>
                        <span class="title">Departure Date</span>
                        <select name="date" id="date">
                            <option value="value1">Date from</option>
                            <option value="value2">10</option>
                            <option value="value2">20</option>
                        </select>
                    </div>
                    <div class="filter-item clearfix">
                        <div class="icon"><i class="fal fa-users"></i></div>
                        <span class="title">Guests</span>
                        <select name="cuests" id="cuests">
                            <option value="value1">0</option>
                            <option value="value2">1</option>
                            <option value="value2">2</option>
                        </select>
                    </div>
                    <div class="search-button">
                        <button class="theme-btn">
                            <span data-hover="Search">Search</span>
                            <i class="far fa-search"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>


    </div>
  )
}

export default Hero_Section
