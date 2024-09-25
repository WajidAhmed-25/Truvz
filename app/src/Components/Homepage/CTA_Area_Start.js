import React from 'react'

const CTA_Area_Start = () => {
  return (
    <div>
      
      <section class="cta-area pt-100 rel z-1">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-4 col-md-6" data-aos="zoom-in-down" data-aos-duration="1500" data-aos-offset="50">
           <div className="cta-item" style={{ backgroundImage: "url('https://images.pexels.com/photos/3222197/pexels-photo-3222197.jpeg?auto=compress&cs=tinysrgb&w=600')" }}>
                            <span class="category">Tent Camping</span>
                            <h2>Explore the world best tourism</h2>
                            <a href="/" class="theme-btn style-two bgc-secondary">
                                <span data-hover="Explore Tours">Explore Tours</span>
                                <i class="fal fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6" data-aos="zoom-in-down" data-aos-delay="50" data-aos-duration="1500" data-aos-offset="50">
                        <div class="cta-item" style={{backgroundImage: "url('https://images.pexels.com/photos/2524383/pexels-photo-2524383.jpeg?auto=compress&cs=tinysrgb&w=600')"}}>
                            <span class="category">Sea Beach</span>
                            <h2>World largest Sea Beach in Thailand</h2>
                            <a href="/" class="theme-btn style-two">
                                <span data-hover="Explore Tours">Explore Tours</span>
                                <i class="fal fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6" data-aos="zoom-in-down" data-aos-delay="100" data-aos-duration="1500" data-aos-offset="50">
                        <div class="cta-item" style={{backgroundImage: "url('https://images.pexels.com/photos/1654748/pexels-photo-1654748.jpeg?auto=compress&cs=tinysrgb&w=600')"}}>
                            <span class="category">Water Falls</span>
                            <h2>Largest Water falls Bali, Indonesia</h2>
                            <a href="/" class="theme-btn style-two bgc-secondary">
                                <span data-hover="Explore Tours">Explore Tours</span>
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

export default CTA_Area_Start
