import React from 'react'
import styled from 'styled-components'
import FaceM from '../src/components/prodcategory/facemask/facemask'
import Navbar from './components/header/navbar'
import Footer from './components/footer/footer'


const Box = styled.div`
`

function acc() {
    return(
        <Box>
        <Navbar/>
        <FaceM/>
        <Footer/>
        </Box>
    );
}

export default acc;