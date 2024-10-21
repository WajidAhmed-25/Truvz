import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage';
import About from './Components/About/About';
import Destination from './Components/Destination/Destination';
import FAQs from './Components/FAQ\'s/faq';
import ContactUs from './Components/Contact_Us/ContactUs';
import Blogs from './Components/Blogs/Blogs';
import Blogs_Data from './Components/Blogs/Blogs_Data';
import Travel_Reg_Form from './Components/Application_Form/Application_Form';
import Travel_Reg_Form1 from './Components/Application_Form/Application_Form_1';
import { useEffect} from 'react';
import 'aos/dist/aos.css';  
import AOS from 'aos';

import Canada from '../src/Components/Countries/Canada';
import Australia from './Components/Countries/Australia';
import USA from './Components/Countries/USA';
import U from './Components/Countries/Uk';
import Schengen_Visa from './Components/Countries/Schengen';
import Turkey_Visa from './Components/Countries/Turkey';
import UK from './Components/Countries/Uk';
import Student_Form from './Components/Student_Form/Student_Form';


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
      once: true,
      delay: 200, 
    });
  }, []);



  return (
 <div className="page-wrapper" style={{backgroundColor:'#232c27'}}>

<Router>
       <Header/> 
  <Routes>     
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutUs" element={<About />} />  
            <Route path="/Destination" element={<Destination/>} />
            <Route path="/FAQs" element={<FAQs/>} />
            <Route path="/Contact" element={<ContactUs/>} />
            <Route path='/Blogs' element={<Blogs/>}/>
            <Route path='/Blogs_Details' element={<Blogs_Data/>}/>
            <Route path="/Application_Form" element={<Travel_Reg_Form1/>}/>
            <Route path='/Student_Form'  element={<Student_Form/>}/>


            <Route path="/Canada_visa" element={<Canada/>} />
          <Route path="/Uk_visa" element={<UK/>} />
          <Route path="/Australia_visa" element={<Australia/>} />
          <Route path="/USA_visa" element={<USA/>} />
          <Route path="/Turkey_visa" element={<Turkey_Visa/>} />
          <Route path="/Shengen_visa" element={<Schengen_Visa/>} />
          

        </Routes>

      <Footer/>
  
      </Router>
 </div>


 
  );
}

export default App;
