// import React from 'react'

// const Query = () => {
//   return (
//     <div>
      
//       <div className="form-back-drop"></div>


//       <section className="hidden-bar">
//     <div className="inner-box text-center">
//         <div className="cross-icon"><span className="fa fa-times"></span></div>
//         <div className="title">
//             <h4>Get Appointment</h4>
//         </div>


//         <div className="appointment-form">
//             <form method="post" action="/Contact">
//                 <div className="form-group">
//                     <input type="text" name="text" value="" placeholder="Name" required/>
//                 </div>
//                 <div className="form-group">
//                     <input type="email" name="email" value="" placeholder="Email Address" required/>
//                 </div>
//                 <div className="form-group">
//                     <textarea placeholder="Message" rows="5"></textarea>
//                 </div>
//                 <div className="form-group">
//                     <button type="submit" className="theme-btn style-two">
//                         <span data-hover="Submit now">Submit now</span>
//                         <i className="fal fa-arrow-right"></i>
//                     </button>
//                 </div>
//             </form>
//         </div>


//         <div className="social-style-one">
//             <a href="/Contact"><i className="fab fa-twitter"></i></a>
//             <a href="/Contact"><i className="fab fa-facebook-f"></i></a>
//             <a href="/Contact"><i className="fab fa-instagram"></i></a>
//             <a href="#"><i className="fab fa-pinterest-p"></i></a>
//         </div>
//     </div>
// </section>




//     </div>
//   )
// }

// export default Query
























import React from 'react'
import { useState,useEffect } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';





const Query = () => {

    const navigate = useNavigate();
    
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [phone, setPhone] = useState('');
const [purpose, setPurpose] = useState('');



const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!name || !email ||  !message || !phone || !purpose) {
      toast.error('All fields are required!');
      return;
    }
  
    if (!/^\d+$/.test(phone)) {
      toast.error('Phone number must contain only digits!');
      return;
    }
  
    try {
      const sendDetailsResponse = await fetch('http://127.0.0.1:8000/api/send-user-details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
          purpose,
          message,
          phone
        }),
      });
  
      if (sendDetailsResponse.ok) {
     
        toast.success('Details sent successfully! Check your email for details.');
  

        setTimeout(() => {
          navigate('/');
        }, 2000); 
      } else {
        console.error('Failed to send user details email');
        toast.warning('Details sent, but failed to send email.');
      }
  
    } catch (error) {
      console.error('Error during process:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };


  return (
    <div>
      
      <div className="form-back-drop"></div>


      <section className="hidden-bar">
    <div className="inner-box text-center">
        <div className="cross-icon"><span className="fa fa-times"></span></div>
        <div className="title">
            <h4>Get Appointment</h4>
        </div>


        <div className="appointment-form">
            <form method="post" action="#" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input 
                    type="text"
                    name="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    required/>
                </div>
                <div className="form-group">
                    <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required/>
                </div>


                <div className="form-group">
                    <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required/>
                </div>


 <div className="form-group"> 
                    <select
                    type="text"
                    name="Purpose"
                    placeholder="Purpose"
                 style={{backgroundColor:'#222222',color:'#9a9791',border:'0.5px solid #7F7F7F'}}
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                    required>


              <option value="" >Select a purpose</option>
              <option value="travel">Travel</option>
              <option value="hotel">Hotel</option>
              <option value="flight">Flight</option>
              <option value="transport">Transport</option>


                        </select>
                </div> 



                <div className="form-group">
                    <textarea 
                    placeholder="Message"
                     rows="5"
                     value={message}
                     onChange={(e) => setMessage(e.target.value)}    
                     >

                     </textarea>
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




    </div>
  )
}

export default Query































