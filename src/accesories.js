import React from 'react'
import styled from 'styled-components';
import Accessories from '../src/components/prodcategory/accessories/accessories'
import Navbar from './components/header/navbar'
import Footer from './components/footer/footer'


const Box = styled.div`
`


function acc() {
    return(
        <Box>
        <Navbar/>
        <Accessories/>
        <Footer/>
        </Box>
    );
}

export default acc;