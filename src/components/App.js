import React, { Component } from "react";
import AccountContainer from "./AccountContainer";

// App function
class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Bank of Flatiron</h2>
        </div>
        <AccountContainer />
      </div>
    );
  }
}

export default App;