import React from "react";

import "./App.css";

class App extends React.Component {
  foo = () => "bars";
  render() {
    const name = "John Doe";
    const loading = false;
    const showName = true;

    return (
      <div className='App'>
        {loading ? <h4> Loading </h4>: <h1>
          Hello {showName && name} {this.foo}
        </h1>}
        
      </div>);
    
  }
}

export default App;
