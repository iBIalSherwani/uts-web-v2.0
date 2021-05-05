import React from 'react'
import './footer.css'
import Maps from './maps'
import Logo from '../header/uts-logo.png'


function Footer() {
    return(
<footer class="page-footer font-small text-white unique-color-dark">

  <div>
    <div class="container">

    </div>
  </div>

  <div class="container text-center text-md-left mt-5">

    <div class="row mt-3">

      <div class="col-md-3 col-lg-4 col-xl-3 mt-3 mb-4">

        <h6 class="text-uppercase font-weight-bold"> <img id="logo" src={Logo} alt="logo" /> Unique Trading Soul</h6>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '80px' }}/>
        <ul>
            <li class="text-uppercase">
                excellent quality
            </li>
            <li class="text-uppercase">
                competitive price
            </li>
            <li class="text-uppercase">
                punctual delivery
            </li>
            <li class="text-uppercase">
                professional quality control
            </li>
            <li class="text-uppercase">
                honest service
            </li>
        </ul>

      </div>

      <div class="col-md-2 col-lg-2 col-xl-2 mt-4 mb-4">

        <h6 class="text-uppercase font-weight-bold">Products</h6>
        <hr class="deep-purple accent-2 mb-3 mt-2 d-inline-block mx-auto" style={{width: '80px' }}/>
        <p>
          <a href="/heavymachinery">Heavy Machinery</a>
        </p>
        <p>
          <a href="/hygiene">Hygiene</a>
        </p>
        <p>
          <a href="/automobile">Auto Mobile</a>
        </p>
        <p>
          <a href="/accessories">Accessories</a>
        </p>

      </div>

      <div class="col-md-4 col-lg-3 col-xl-3 mt-4 mb-md-0 mb-4">

        <h6 class="text-uppercase font-weight-bold">Contact</h6>
        <hr class="deep-purple accent-2 mb-3 mt-2 d-inline-block mx-auto" style={{width: '80px' }}/>
        <p>
          <i class="fas fa-home mr-1"></i> Office# 202/204, 2nd Floor, Garden Tower, 47-Babar Block, <br></br>New Garden Town, Lahore</p>
        <p>
          <i class="fas fa-envelope mr-1 "></i> uniquetradingsoul@gmail.com</p>
        <p>
          <i class="fas fa-phone mr-1 "></i>  +92-300-416-4002</p>
        <p>
          <i class="fas fa-phone mr-1 "></i> +92-334-4255131</p>

      </div>
      <div class="col-md-5 col-lg-4 col-xl-4 ml-auto mt-4" >
    <h6 class="text-uppercase font-weight-bold">Pin location</h6>
        <hr class="deep-purple accent-2 mb-3 mt-2 d-inline-block mx-auto" style={{width: '80px' }} />
        
        <Maps/>
        </div>
    </div>
    
      
  </div>

  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="#!"> ~BS</a>
  </div>

</footer>
);
}

export default Footer;