import React from 'react'
import styled from 'styled-components'
import HeavyM from '../src/components/prodcategory/heavymachinery/heavymachinery'
import Navbar from './components/header/navbar'
import Footer from './components/footer/footer'


const Box = styled.div`
`

function acc() {
    return(
        <Box>
        <Navbar/>
        <HeavyM/>
        <Footer/>
        </Box>
    );
}

export default acc;