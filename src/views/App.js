import React from 'react';
import {Route} from 'react-router-dom';


import Home from './components/home/Home';
import About from './components/about/About';




function App() {
    return (
        <div className="App">
        
            <Route path="/" exact render={props => <Home {...props} /> } />
            <Route path="/about" component={About} />
        </div>
    );
}

export default App;
