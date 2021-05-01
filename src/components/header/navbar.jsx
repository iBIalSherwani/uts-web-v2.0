import React from 'react'
import './navbar.css'
import Logo from './uts-logo.png'


function navBar() {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand text-uppercase font-weight-bold"  href="#" id="titlecolor"> 
    <img id='logo' src={Logo} alt="logo" />
    Unique Trading Soul 
    <hr class="accent-3 mb-0 mt-n2 d-block ml-auto" style={{width: '230px' }} />
    </a>


    <button class="navbar-toggler"
     type="button" data-bs-toggle="collapse" 
     data-bs-target="#navbarSupportedContent" 
     aria-controls="navbarSupportedContent" 
     aria-expanded="false" 
     aria-label="Toggle navigation"

     >

      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" 
    id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto ">
        <li class="nav-item m-auto">
       
          <a class="nav-link active text-uppercase ml-1" 
          aria-current="page" href="#" id="color">  
          <i class="fas fa-home"></i> Home</a>
        </li>
        
        <li class="nav-item m-auto dropdown">
          <a class="nav-link dropdown-toggle text-uppercase ml-1"
           href="#" 
           id="navbarDropdown" 
           role="button" 
           data-bs-toggle="dropdown" 
           aria-expanded="false"
           id="color"
           >

          <i class="fas fa-dolly"></i> Products </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#"> Heavy Machinery </a></li>
            <li><a class="dropdown-item" href="#"> Tissues </a></li>
            <li><a class="dropdown-item" href="#" > Face Mask </a></li>
            <li><a class="dropdown-item" href="#"> Accessories </a></li>
          </ul>
        </li>
        <li class="nav-item m-auto">
          <a class="nav-link text-uppercase ml-2" href="#" id="color"> 
          <i class="fas fa-inbox"></i> Contact Us</a>
        </li>
        <li class="nav-item m-auto">
          <a class="nav-link text-uppercase ml-2" href="#" id="color">
               <i class="fas fa-info-circle"></i> About Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}

export default navBar;