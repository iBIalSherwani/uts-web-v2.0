import React from "react"
import styled from 'styled-components'
import NavBar from '../../components/header/navbar'
import Footer from '../../components/footer/footer'
import Aboutus from '../../components/aboutus/aboutus'
import 'bootstrap/dist/css/bootstrap.min.css';

const Box = styled.div`

`

function Home() {
    return(
        <Box>
        <NavBar/>
        <Aboutus/>
        <Footer/>
        </Box>
    );
}

export default Home;