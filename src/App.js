import React from "react";
import Navbar from './components/layout/Navbar';

import "./App.css";

class App extends React.Component {
  foo = () => "bars";
  render() {
   

    return (
      
      <nav className="navbar bg-primary">
        <Navbar />
        {/* double quotes don't seem to always work on props! */}
      </nav>
       
        
      
        );
    
  }
}

export default App;
