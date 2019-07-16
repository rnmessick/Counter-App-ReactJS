import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
// This is a react component called counter. It's resusable.
class Counter extends React.Component {
  //this constructor sets the state of the button to start at zero
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  //handles the clicks - both adding and subtracting clicks- aka event handler
  // the type is add or subtract which will determine whether it is incremented or decremented by one.
  //This is my experiement with ternary operators
  addSubtractClick(type) {
    this.setState(state => {
      return { count: type === "add" ? state.count + 1 : state.count - 1 };
    });
  }
  render() {
    return (
      <React.Fragment>
        <p>Counter: {this.state.count}</p>
        /* special shoutout to this stackoverflow:
        https://stackoverflow.com/questions/42364838/incrementing-state-value-by-one-using-react
        */
        <input
          type="button"
          onClick={this.addSubtractClick.bind(this, "add")}
          value="Add One"
        />
        <input
          type="button"
          onClick={this.addSubtractClick.bind(this, "sub")}
          value="Subtract One"
        />
      </React.Fragment>
    );
  }
}
function App() {
  return (
    <div className="App">
      <h1>COUNTER APP</h1>
      <Counter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
