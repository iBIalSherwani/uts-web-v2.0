import React from 'react'
import './hygiene.css'

function Hygiene() {
    return(
<div class="container">
    <h3 class="text-uppercase text-center font-weight-bold mt-4" id="cat"> Hygiene </h3>
    <div class="row">


        <div class="col-md-3 col-sm-6">


            <div class="product-grid9">
                <div class="product-image9">
                    <a href="#">
                        <img class="pic-1" src="uts-logo.png" />
                        <img class="pic-2" src="uts-logo.png" />
                    </a>
                    <a href="#" class="fa fa-search product-full-view"></a>
                </div>


                <div class="product-content">
                    <h3 class="title text-uppercase">Prod 1</h3>
                    <br></br>
                    <a class="add-to-cart text-uppercase" href="">view product</a>
                </div>
            </div>
        </div> 


        <div class="col-md-3 col-sm-6">
            <div class="product-grid9">
                <div class="product-image9">
                    <a href="#">
                        <img class="pic-1" src="uts-logo.png" />
                        <img class="pic-2" src="uts-logo.png" />
                    </a>
                    <a href="#" class="fa fa-search product-full-view"></a>
                </div>


                <div class="product-content">
                    <h3 class="title text-uppercase">prod 2</h3>
                    <br></br>
                    <a class="add-to-cart text-uppercase" href="">view product</a>
                </div>
            </div>
        </div>


        <div class="col-md-3 col-sm-6">
            <div class="product-grid9">
                <div class="product-image9">
                    <a href="#">
                        <img class="pic-1" src="uts-logo.png" />
                        <img class="pic-2" src="uts-logo.png" />
                    </a>
                    <a href="#" class="fa fa-search product-full-view"></a>
                </div>


                <div class="product-content">
                    <h3 class="title text-uppercase">prod 3</h3>
                    <br></br>
                    <a class="add-to-cart text-uppercase" href="">view product</a>
                </div>
            </div>
        </div>


        <div class="col-md-3 col-sm-6">
            <div class="product-grid9">
                <div class="product-image9">
                    <a href="#">
                        <img class="pic-1" src="uts-logo.png" />
                        <img class="pic-2" src="uts-logo.png" />
                    </a>
                    <a href="#" class="fa fa-search product-full-view"></a>
                </div>
                <div class="product-content">
                    <h3 class="title text-uppercase">prod 4</h3>
                    <br></br>
                    <a class="add-to-cart text-uppercase" href="">view product</a>
                </div>
            </div>
        </div>

        
    </div>
</div>
);
}

export default Hygiene;