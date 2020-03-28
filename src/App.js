import React from "react";
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem'

import "./App.css";

class App extends React.Component {
  foo = () => "bars";
  render() {

    
   

    return (
      
      <div className='App'>
        <Navbar/>
        <UserItem />
        {/* double quotes don't seem to always work on props! */}
      </div>
       
        
      
        );
    
  }
}

export default App;
