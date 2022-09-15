import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Pocetna from './components/pages/Pocetna';
import Kontakt from './components/pages/Kontakt';
import Ulogujse from './components/pages/Ulogujse';
import Onama from './components/pages/Onama';

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
    <Route path='/Onama' exact component={Onama}/>
      <Route path='/' exact component={Onama}/>
      <Route path='/' exact component={Pocetna}/>
      <Route path='/pocetna' exact component={Pocetna}/>
      <Route exact path="/kontakt" component={Kontakt}/>
     
      <Route path='/ulogujse' component={{Ulogujse}.openModal} />
    </Switch>
    </Router>
     </>
  );

}
setInterval(Pocetna, 10000);
export default App;
