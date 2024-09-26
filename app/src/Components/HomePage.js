import React from 'react'
import Hero_Section from './Homepage/Hero_Section';
import Destination_Area from './Homepage/Destination_Area';
import About_Us_Area_Start from './Homepage/About_Us_Area_Start';
import Popular_Destination_Area_Start from './Homepage/Popular_Destination_Area_Start';
import Feature_Area_Start from './Homepage/Feature_Area_Start';
import Hotel_Area_Start from './Homepage/Hotel_Area_Start';
import Mobile_Area_Start from './Homepage/Mobile_Area_Start';
import Testimonial_Area_Start from './Homepage/Testimonial_Area_Start';
import CTA_Area_Start from './Homepage/CTA_Area_Start';
import Blog_Area from './Homepage/Blog_Area';
import Query from './Popup_Query/Query';

const HomePage = () => {
  return (
    <div>
      
      {/* <div className="form-back-drop"></div>


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
</section> */}

<Query/>


      <Hero_Section/>
<Destination_Area/>
<About_Us_Area_Start/>
<Popular_Destination_Area_Start/>
<Feature_Area_Start/>

<Hotel_Area_Start/>
<Mobile_Area_Start/>
<Testimonial_Area_Start/>
<CTA_Area_Start/>
<Blog_Area/>


    </div>
  )
}

export default HomePage
