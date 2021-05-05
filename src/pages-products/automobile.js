import React from 'react'
import styled from 'styled-components'
import AutoMobile from '../components/prodcategory/automobile/automobile'
import Navbar from '../components/header/navbar'
import Footer from '../components/footer/footer'


const Box = styled.div`
`

function acc() {
    return(
        <Box>
        <Navbar/>
        <AutoMobile/>
        <Footer/>
        </Box>
    );
}

export default acc;