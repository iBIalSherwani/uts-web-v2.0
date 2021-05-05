import React from 'react'
import './contactus.css'

function Contactus() {
    return(
<section class="mb-4 overflow-hidden" id="center">

    <h2 class="h1-responsive font-weight-bold text-center my-5" id="cat"> Contact Us</h2>

    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div class="row justify-content-center">

        <div class="col-md-9  mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                <div class="row">

                    <div class="col-md-7">
                        <div class="md-form mb-0 mt-2">
                            <label for="name" class="">Your name</label>
                            <input type="text" id="name" name="name" class="form-control" />

                        </div>
                    </div>

                    <div class="col-md-7">
                        <div class="md-form mb-0">
                            <label for="email" class="">Your email</label>
                            <input type="text" id="email" name="email" class="form-control" />
                        
                        </div>
                    </div>

                </div>

                <div class="row">
                    <div class="col-md-7">
                        <div class="md-form mb-0">
                            <label for="subject" class="">Subject</label>
                            <input type="text" id="subject" name="subject" class="form-control" />
                        </div>
                    </div>
                </div>

                <div class="row">

                    <div class="col-md-7">

                        <div class="md-form mb-2">
                            <label for="message">Your message</label>
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                        </div>

                    </div>
                </div>

            </form>

            <div class="text-center text-md-left">
                <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div class="status"></div>
        </div>

        <div class="col-md-2 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>Office# 202/204, 2nd Floor,
                        Garden Tower, 
                        <br></br>47-Babar Block,<br></br>
                        New Garden Town, Lahore</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>+92-300-416-4002<br></br>+92-334-4255131</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>uniquetradingsoul@gmail.com</p>
                </li>
            </ul>
        </div>

    </div>

</section>

    );
}

export default Contactus;