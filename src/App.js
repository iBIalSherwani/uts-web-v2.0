import React, { Component } from 'react'
import HomePage from './pages/homepage/homepage'
import Accessories from './accesories'
import HeavyM from './heavymachinery'
import FaceM from './facemask'
import Tissues from './tissues'
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
  <Route exact path="/facemask" component={FaceM}/>
  <Route exact path="/tissues" component={Tissues}/>
  <Route exact path="/contactus" component={Contactus}/>

    </Router>
    );
}
}

export default App;
