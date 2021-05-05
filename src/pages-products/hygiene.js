import React from 'react'
import styled from 'styled-components'
import Hygiene from '../components/prodcategory/hygiene/hygiene'
import Navbar from '../components/header/navbar'
import Footer from '../components/footer/footer'


const Box = styled.div`
`


function acc() {
    return(
        <Box>
        <Navbar/>
        <Hygiene/>
        <Footer/>
        </Box>
    );
}

export default acc;