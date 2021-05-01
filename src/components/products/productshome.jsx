import React from 'react'
import './productshome.css'

function productsHome() {
    return(
<div class="container">
    <h3 class="text-uppercase text-center font-weight-bold mt-4" id="cat"> Product line </h3>
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
                    <h3 class="title text-uppercase"><a href="#">Heavy Machinery</a></h3>
                    <br></br>
                    <a class="add-to-cart text-uppercase" href="">view products</a>
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
                    <h3 class="title text-uppercase"><a href="#">Tissues</a></h3>
                    <br></br>
                    <a class="add-to-cart text-uppercase" href="">view products</a>
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
                    <h3 class="title text-uppercase"><a href="#">Face Mask</a></h3>
                    <br></br>
                    <a class="add-to-cart text-uppercase" href="">view products</a>
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
                    <h3 class="title text-uppercase"><a href="#">accessories</a></h3>
                    <br></br>
                    <a class="add-to-cart text-uppercase" href="">view products</a>
                </div>
            </div>
        </div>

        
    </div>
</div>
);
}

export default productsHome;