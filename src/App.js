import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import{} from "./views/Index/formerIndex"
import {Content, about} from './views/Index'
import {Nav} from './components'


// import {
//   IndexView,
//   Content as HomeView,
//   about as AboutView}
//   from 'views';

function App() {
    return (
      <div className="App">
        <Nav />
      <Switch>
        <Route exact path="/" component={Content}></Route>
        <Route exact path="/Home" component={Content}></Route>
        <Route exact path="/About" component={about}></Route>
        {/* <Route exact path="/home" render={() => <HomeView />} />
        <Route exact path="/about" render={() => <AboutView />} /> */}
      </Switch>
      </div>
    );
  };
  
  export default App;