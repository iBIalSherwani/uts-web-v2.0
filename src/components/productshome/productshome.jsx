import React from 'react'
import './productshome.css'

function productsHome() {
    return(
<div class="container">
    <h3 class="text-center font-weight-bold mt-4" id="cat"> Product line </h3>
    <div class="row">


        <div class="col-md-3 col-sm-6">


            <div class="product-grid9">
                <div class="product-image9">
                    <a href="#">
                        <img class="pic-1" src="/products-pics/heavymachinery/nut-projection-welding-machine-1.png" />
                        <img class="pic-2" src="/products-pics/heavymachinery/nut-projection-welding-machine-2.png" />
                    </a>
                    <a href="/heavymachinery" class="fa fa-search product-full-view"></a>
                </div>


                <div class="product-content">
                    <h3 class="title text-uppercase">Heavy Machinery</h3>
                    <br></br>
                    <a class="add-to-cart text-uppercase" href="/heavymachinery">view products</a>
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
                    <a href="/tissues" class="fa fa-search product-full-view"></a>
                </div>


                <div class="product-content">
                    <h3 class="title text-uppercase">Hygiene</h3>
                    <br></br>
                    <a class="add-to-cart text-uppercase" href="/hygiene">view products</a>
                </div>
            </div>
        </div>


        <div class="col-md-3 col-sm-6">
            <div class="product-grid9">
                <div class="product-image9">
                    <a href="#">
                        <img class="pic-1" src="/products-pics/auto-mobile/weight-wheel-bal-1.png" />
                        <img class="pic-2" src="/products-pics/auto-mobile/weight-wheel-bal-2.png" />
                    </a>
                    <a href="/facemask" class="fa fa-search product-full-view"></a>
                </div>


                <div class="product-content">
                    <h3 class="title text-uppercase">Auto Mobile</h3>
                    <br></br>
                    <a class="add-to-cart text-uppercase" href="/automobile">view products</a>
                </div>
            </div>
        </div>


        <div class="col-md-3 col-sm-6">
            <div class="product-grid9">
                <div class="product-image9">
                    <a href="#">
                        <img class="pic-1" src="/products-pics/accessories/projection-nut.png" />
                        <img class="pic-2" src="/products-pics/accessories/trolley-wheels-1.png" />
                    </a>
                    <a href="/accessories" class="fa fa-search product-full-view"></a>
                </div>
                <div class="product-content">
                    <h3 class="title text-uppercase">accessories</h3>
                    <br></br>
                    <a class="add-to-cart text-uppercase" href="/accessories">view products</a>
                </div>
            </div>
        </div>

        
    </div>
</div>
);
}

export default productsHome;