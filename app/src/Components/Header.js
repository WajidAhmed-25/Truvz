export default function Header(){


    return(

        <>
        
        <header class="main-header header-one white-menu menu-absolute">
          
            <div class="header-upper py-30 rpy-0">
                <div class="container-fluid clearfix">

                    <div class="header-inner rel d-flex align-items-center">
                        <div class="logo-outer" >
                            <div class="logo"><a href="/" style={{ fontSize: '30px',marginLeft:'30px',fontWeight:'600', color: 'white' }}>Truvz.Com</a></div>
                        </div>

                        <div class="nav-outer mx-lg-auto ps-xxl-5 clearfix">
                        
                            <nav class="main-menu navbar-expand-lg">
                                <div class="navbar-header">
                                   <div class="mobile-logo">
                                       <a href="/">
                                            <img src="assets/images/logos/logo.png" alt="Logo" title="Logo"/>
                                       </a>
                                   </div>
                                   
                                
                                    <button type="button" class="navbar-toggle" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                    </button>
                                </div>

                                <div class="navbar-collapse collapse clearfix">
                                    <ul class="navigation clearfix">
                                      
                                        <li><a href="/">Home</a>
                                       
                                        </li>
                                        <li><a href="/AboutUs">About</a></li>

                                        <li><a href="/Destination">Destinations</a></li>
                                
                       
                             
                                        <li class="dropdown"><a href="#">Pages</a>
                                            <ul>
                                     
                                                <li><a href="/FAQs">faqs</a></li>
              
                                
                                                <li><a href="/Contact">Contact Us</a></li>
                                       
                                            </ul>
                                        </li>
                                        <li class="dropdown"><a href="#">Website Blogs</a>
                                            <ul>
                                            <li><a href="/Blogs">Read Blogs</a></li>
                                                <li><a href="/Blogs_Details">Blogs details</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>

                            </nav>
                       
                        </div>
                        
                    
             
                        
                   
                        <div class="  menu-sidebar py-10">
                            <a href="#" class="theme-btn style-two bgc-secondary">
                                <span data-hover="Book Now">Book Now</span>
                             
                                <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                            </a>
                          
                    
                        </div>
                    </div>
                </div>
            </div>
      
        </header>



        </>

    )
}