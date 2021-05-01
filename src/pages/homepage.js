import React from "react"
import styled from 'styled-components'
import NavBar from '../components/header/navbar'
import Footer from '../components/footer/footer'
import Carousel from '../components/carousel'
import ProductsHome from '../components/products/productshome'
import './homepage.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Box = styled.div`

`

function Home() {
    return(
        <Box>
        <NavBar/>
        <Carousel/>
        <ProductsHome/>
        <Footer/>
        </Box>
    );
}

export default Home;