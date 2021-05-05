import React, { Component } from 'react'
import HomePage from './pages/homepage/homepage'
import Accessories from './pages-products/accesories'
import HeavyM from './pages-products/heavymachinery'
import AutoMobile from './pages-products/automobile'
import Hygiene from './pages-products/hygiene'
import Contactus from './pages/contactus/contactus'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const Box = styled.div
`
`

class App extends Component {
  render() {
  return(
    <Router>
  <Route exact path="/homepage" component={HomePage}/>
  <Route exact path="/accessories" component={Accessories}/>
  <Route exact path="/heavymachinery" component={HeavyM}/>
  <Route exact path="/automobile" component={AutoMobile}/>
  <Route exact path="/hygiene" component={Hygiene}/>
  <Route exact path="/contactus" component={Contactus}/>

    </Router>
    );
}
}

export default App;
