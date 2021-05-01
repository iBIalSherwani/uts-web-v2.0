import React from "react"
import styled from 'styled-components'
import NavBar from '../../components/header/navbar'
import Footer from '../../components/footer/footer'
import Contactus from '../../components/contactus/contactus'
import 'bootstrap/dist/css/bootstrap.min.css';

const Box = styled.div`

`

function Home() {
    return(
        <Box>
        <NavBar/>
        <Contactus/>
        <Footer/>
        </Box>
    );
}

export default Home;