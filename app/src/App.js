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

function App() {
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
            <Route path="/Application_Form" element={<Travel_Reg_Form/>}/>

        </Routes>

      <Footer/>
  
      </Router>
 </div>


 
  );
}

export default App;
