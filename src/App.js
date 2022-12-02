import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import img from "./image/powered.svg"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      todos: [{
        id: Math.random(),
        content: "New item",
      }
],
    };
  }

  addItem = () => {
    const currentValue = this.state.userInput;

    if (this.state.userInput !== "") {
      const userInput = {
        id: Math.random(),
        content: currentValue,
      };

      this.setState(
        {
          todos: [...this.state.todos, userInput],
        },
        () => {
          this.setState({
            userInput: "",
          });
        }
      );
    }
  };

  onInputChange = (e) => {
    const newVal = e.target.value;
    this.setState({
      userInput: newVal,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="body">
          <h1>Daily To Do List</h1>
          <Form
            userInput={this.state.userInput}
            onInputChange={this.onInputChange}
            addItem={this.addItem}
          />
          {this.state.todos.length > 0 && (
            <div className="list">
              <List todos={this.state.todos} />
            </div>
          )}
          </div>
          
        </div>
        <footer>
          <img src={img} alt="Powered by Producter"></img>
        </footer>
      </div>
    );
  }
}

export default App;
