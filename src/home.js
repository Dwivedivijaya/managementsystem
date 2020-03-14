import React, { Component } from 'react'
import Imag7 from './images/download2.jpg'
import Imag4 from './images/download5.jpg'
import Imag8 from './images/download6.jpg'
import Img from './images/download1.jpg'
import Imag1 from './images/imag1.jpg'
import Image from './images/save2.jpg'
import Img2 from './images/sava.jpg'
import Images1 from './images/img.jpg'
import Save from './images/save1.jpg'
import Save3 from './images/save3.jpg'
import Save4 from './images/save4.jpg'
import Icon from './images/icon.jpg'
import Icon2 from './images/icon2.jpg'
import Icon3 from './images/icon3.png'
import './home.css'
export default class home extends Component {
    render() {
        return (
            <div>
               <div className="container-fluit">
                   <div className="row topheader">
                       <div className="col-md-6 col-sm-6 col-lg-6">
                          <h3 className="fristheading">ShowMyHall</h3>
                       </div>
                       <div className="col-md-6 col-sm-6 col-lg-6">
                       <a href=""><button type="button" className="btn bg-light" style={{float:"right"}}>SignUp</button></a>
                       </div>
                   </div>
               </div>
               <div className="container-fluit navabar">
                    <div className="row">
                       <div className="col-md-9 col-sm-9 col-lg-9">
          <nav class="navbar navbar-expand-sm">
               <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">About</a>
    </li>
    <div class="dropdown dropbottom">
    <a href="" class="nav-link dropdown-toggle" data-toggle="dropdown">
      Venues
     </a>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Wedding Halls</a>
      <a class="dropdown-item" href="#">Auditoriums</a>
      <a class="dropdown-item" href="#">Banquet Halls</a>
      <a class="dropdown-item" href="#">Garden Halls</a>
      
    </div>
  </div>
    <div class="dropdown dropbottom">
    <a href="" class="nav-link dropdown-toggle" data-toggle="dropdown">
    Event
     </a>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Birthday</a>
      <a class="dropdown-item" href="#">Naming Cermony Decoration</a>
      <a class="dropdown-item" href="#">Naming Cermony Photography</a>
      <a class="dropdown-item" href="#">Naming Cermony Food</a>
      <a class="dropdown-item" href="#">Naming Cermony Enterainment</a>
      </div>
    </div>
    <li class="nav-item">
      <a class="nav-link" href="#">Blog</a>
    </li>
    
    <li class="nav-item">
      <a class="nav-link" href="#">Contact Us</a>
    </li>
  </ul>
  </nav>
  </div>
  <div className="col-md-3 col-sm-3 col-lg-3">
      <div className="dropicon p-3">
      <i class="fa fa-phone"></i><span style={{color:"#e80c53"}}>08047107000</span>
  </div>
  </div>
  </div>
  </div>
  <div class="carousel slide" data-ride="carousel" data-interval="3000" id="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" style={{height:"80vh"}}>
     <img src={Imag7}  class="d-block w-100 h-100" alt="..." style={{height:"100%",width:"100%"}}/>
         </div>
    <div class="carousel-item" style={{height:"80vh"}}>
      <img src={Imag4} class="d-block w-100 h-100"alt="..." style={{height:"100%",width:"100%"}}/>
      </div>
    <div class="carousel-item" style={{height:"80vh"}}>
      <img src={Imag8}  class="d-block w-100 h-100" alt="..." style={{height:"100%",width:"100%"}}/>
      </div>
  </div>
  
   <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    </a>
  <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span></a>
    <ol class="carousel-indicators">
    <li data-target="#carousel" data-slide-to="0" class="active"></li>
    <li data-target="#carousel" data-slide-to="1"></li>
    <li data-target="#carousel" data-slide-to="2"></li>
  </ol>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-lg-12">
          <div className="about">
          <h3>About <span  style={{color:"#000000"}}>Us</span></h3>
          <p>WahParty is an online one-stop Event management platform and a multiple Vendor marketplace. We cater to all Event and Party needs be it personal (Bachelor Party, Wedding arrangement, Birthday Party, Engagement, Kitty Party, Cocktail Dinner, Anniversary, Christmas Party, New Year Party, or exclusive birthday decoration/decorators in Pune) or Corporate event planning (Team Lunch, Team Outings, Annual Function event planners in Pune). We have a massive range of hands-on Event planners in Pune to ensure that you sit back, relax and enjoy the occasion. Choose from our wide range of ready-made party packages or get your party totally customized suiting your taste and need. So if you are planning for your BIG Day - A birthday party that your child will never forget, a life long memorable Wedding party or anniversary, or a corporate party, look no further! WahParty brings you a whole new Party experience. WahParty services are available across the Pune City - Celebrate anything with us with great packages and get the best deal from the best Event planners in Pune. For customized Birthday Party Packages in Pune, call us today and book your next party with us now.</p>
        </div>
        </div>
      </div>

    </div>
   
<div className="container event">
  <div className="row p-3">
  <div className="col-md-12 col-sm-12 col-lg-12">
    <h3><span style={{color:"#e61173"}}>Discover the best function halls </span>in Bangalore</h3>
    </div>
    </div>
    <div className="row">
    <div className="col-md-3 col-sm-3 col-lg-3">
    <div class="card" style={{width:"18rem;"}}>
   <img src={Img} class="card-img-top" alt="..." height="183px"/>
  <div class="card-body">
    <a href="#">Wedding Halls</a>
  </div>
</div> 
</div> 
<div className="col-md-3 col-sm-3 col-lg-3">
<div class="card" style={{width:"18rem;"}}>
  <img src={Img2} class="card-img-top" height="183px" alt="..."/>
  
 <div class="card-body">
    <a href="#">Auditoriums</a>
  </div>
</div> 
</div> 
<div className="col-md-3 col-sm-3 col-lg-3">
<div class="card" style={{width:"18rem;"}}>
  <img src={Imag1} class="card-img-top" height="183px" alt="..." />
  <div class="card-body">
   <a href="#">Banquet Halls</a>
  </div>
</div> 
</div> 
<div className="col-md-3 col-sm-3 col-lg-3">
<div class="card" style={{width:"18rem;"}}>
  <img src={Image} class="card-img-top" height="183px" alt="..." />
<div class="card-body">
    <a href="#">Garden Halls</a>
  </div>
  </div>
</div> 
</div> 
</div>
<div className="container event">
  <div className="row p-3">
  <div className="col-md-12 col-sm-12 col-lg-12">
    <h3><span style={{color:"#e61173"}}>Popular </span>Events</h3>
    </div>
    </div>
    <div className="row">
    <div className="col-md-3 col-sm-3 col-lg-3">
    <div class="card" style={{width:"18rem;"}}>
   <img src={Images1} class="card-img-top" alt="..." height="183px"/>
  <div class="card-body">
    <a href="#">Birthday</a>
  </div>
</div> 
</div> 
<div className="col-md-3 col-sm-3 col-lg-3">
<div class="card" style={{width:"18rem;"}}>
  <img src={Save} class="card-img-top" height="183px" alt="..."/>
  
 <div class="card-body">
    <a href="#">Engagement</a>
  </div>
</div> 
</div> 
<div className="col-md-3 col-sm-3 col-lg-3">
<div class="card" style={{width:"18rem;"}}>
  <img src={Save3} class="card-img-top" height="183px" alt="..." />
  <div class="card-body">
   <a href="#">Naming Cormony</a>
  </div>
</div> 
</div> 
<div className="col-md-3 col-sm-3 col-lg-3">
<div class="card" style={{width:"18rem;"}}>
  <img src={Save4} class="card-img-top" height="183px" alt="..." />
<div class="card-body">
    <a href="#">Corporate Event</a>
  </div>
  </div>
</div> 
</div> 
</div>
<div className="container  localities">
  <div className="row p-3">
  <div className="col-md-12 col-sm-12 col-lg-12">
    <h3><span style={{color:"#e61173"}}>Popular</span> Localities</h3>
    </div>
    </div>
    <div className="row">
    <div className="col-md-3 col-sm-3 col-lg-3">
    <div class="card" style={{width:"18rem;"}}>
   <img src={Img} class="card-img-top" alt="..." height="183px"/>
   <div class="localitiespara">jayanagar</div>
  
  </div> 
</div> 
<div className="col-md-3 col-sm-3 col-lg-3">
<div class="card" style={{width:"18rem;"}}>
  <img src={Img2} class="card-img-top" height="183px" alt="..."/>
  <div class="localitiespara">BTM</div>
  </div> 
</div> 
<div className="col-md-3 col-sm-3 col-lg-3">
<div class="card" style={{width:"18rem;"}}>
  <img src={Imag1} class="card-img-top" height="183px" alt="..." />
  <div class="localitiespara">marthahali</div>
  </div> 
</div> 
<div className="col-md-3 col-sm-3 col-lg-3">
<div class="card" style={{width:"18rem;"}}>
  <img src={Image} class="card-img-top" height="183px" alt="..." />
  <div class="localitiespara">jp nagar</div>
</div>
</div> 
<div className="col-md-3 col-sm-3 col-lg-3 p-3">
<div class="card" style={{width:"18rem;"}}>
  <img src={Image} class="card-img-top" height="183px" alt="..." />
  <div class="localitiespara">vijayanagar</div>
</div>
</div> 
<div className="col-md-3 col-sm-3 col-lg-3 p-3">
<div class="card" style={{width:"18rem;"}}>
  <img src={Image} class="card-img-top" height="183px" alt="..." />
  <div class="localitiespara">Whitefild</div>

</div>
</div> 
<div className="col-md-3 col-sm-3 col-lg-3 p-3">
<div class="card" style={{width:"18rem;"}}>
  <img src={Image} class="card-img-top" height="183px" alt="..." />
  <div class="localitiespara">yaswantpur</div>
</div>
</div> 
<div className="col-md-3 col-sm-3 col-lg-3 p-3">
<div class="card" style={{width:"18rem;"}}>
  <img src={Image} class="card-img-top" height="183px" alt="..." />
  <div class="localitiespara">Domular</div>
</div>
</div> 


</div> 
</div>
<div className="container-fluit footer mt-5">
<div className="row footer-form p-3">
<div className="col-md-6 col-sm-6 col-lg-6">
<h6 className="formheading">Get Register</h6>
<form>
  <div className="forminput">
  <input type="Email" placeholder="Enter your name"  style={{width:"50%;", padding:"5px;"}}/>
  <button type="sumbit" className="btn bg-dark text-light">Subscribe Now</button>
  </div>
</form>
</div>
<div className="col-md-6 col-sm-6 col-lg-6">
<p>Get connected with us on social networks!</p>
<div className="aunchartag">
<a href=""><img src={Icon} width="30px" /></a>
<a href=""><img src={Icon2} width="30px"  /></a>
<a href=""><img src={Icon3} width="30px"  /></a>
</div>
</div>
</div>
<div className="row footernav m-3">
<div className="col-md-4 col-sm-4 col-lg-4">
  <h5>MENU</h5>
  <div className="ancharfoopter">
  <div className="row">
  <a href="">FAQ's</a>
     </div>
     <div className="row">
      <a href="">Privacy Policy</a>
  </div>
  <div className="row">
  <a href="">Terms & Conditions</a>
  </div><div className="row">
  <a href="">Blogs</a>
  </div>
</div>
</div>
<div className="col-md-4 col-sm-4 col-lg-4">
  <h5>USEFUL LINKS</h5>
  <div className="ancharfoopter">
<div className="row">
<a href="">About Us</a>
</div>
<div className="row">
<a href="">Book Party</a>
</div><div className="row">
<a href="">Business Partner</a>
</div>
<div className="row">
<a href="">Get In Touch</a>
</div>
</div>
</div>
<div className="col-md-4 col-sm-4 col-lg-4">
  <h5>CONTACT</h5>
  <div className="footericon">
  <a href="" style={{color:"#000000"}}> <i class="fa fa-map-marker"></i></a><span style={{color:"#e80c53"}}>bangalore karnataka</span>
  </div>
  <div className="footericon">
  <i class="fa fa-envelope"></i><span style={{color:"#e80c53"}}>showmyhaiis@gmail.com</span>
  </div>
  <div className="footericon">
  <i class="fa fa-phone"></i><span style={{color:"#e80c53"}}>08047107000</span>
  </div>
 </div>
 </div>
<div className="row footerchild m-2">
<div className="col-md-12 col-sm-12 col-lg-12 p-2">
  <p>© 2020 Copyright:<span style={{color:"#e80c53"}}>ShowMyHalls</span></p>
  </div>
</div>
</div>
</div>





           
        )
    }
}
