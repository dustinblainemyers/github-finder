import React from "react";
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

import "./App.css";

class App extends React.Component {
  foo = () => "bars";
  render() {

    
   

    return (
      
      <div className='App'>
        <Navbar/>
        <div className="container">

        <Users />

        </div>
        {/* double quotes don't seem to always work on props! */}
      </div>
       
        
      
        );
    
  }
}

export default App;
