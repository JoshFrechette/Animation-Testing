import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Wrapper from './components/Wrapper.js';
// import Sandbox from './components/Sandbox.js';
import World from './components/World';
import { PlayerProvider } from './contexts/PlayerContext';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  // return (
  //   <div className="App">
  //     <Wrapper>
  //       <Sandbox />
  //     </Wrapper>
  //   </div>
  // );
  return (
    <Router>

      <div id="app">
        <NavBar />

        <div class="row">
            <Switch>
                <Route exact path='/'/>
                <Route exact path='/userinfo'/>
                <Route exact path='/game'>
                  <PlayerProvider>
                    <World />
                  </PlayerProvider>
                </Route>
                {/* <PrivateRoute path='/profile' component={Profile} /> */}
              </Switch>
            </div>
        </div>

        {/* <Footer /> */}
    </Router>
  );
}

export default App;
