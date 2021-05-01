import React from 'react'
import styled from 'styled-components'
import Tissues from '../src/components/prodcategory/tissues/tissues'
import Navbar from './components/header/navbar'
import Footer from './components/footer/footer'


const Box = styled.div`
`


function acc() {
    return(
        <Box>
        <Navbar/>
        <Tissues/>
        <Footer/>
        </Box>
    );
}

export default acc;