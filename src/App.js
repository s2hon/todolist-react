import React, { Component } from 'react';
import './assets/css/App.css';
import ToDoItem from './component/ToDoList'

class App extends Component {
    state = {
      todo: []
    }

  renderItems() {
    if (this.state.todo.length === 0) return 'type in a todo';
    return this.state.todo.map((item, idx) => (<ToDoItem key={idx} text={item}/>))
  }

  collectItem() {
    let input = document.querySelector("input");
    let value = input.value;
    this.setState({todo: [...this.state.todo, value]})
  }



  render () {
    return (
      <React.Fragment>
        <h1>ToDo List</h1>
        
        <input type="text" placeholder="add a todo"/>
        <button onClick={this.collectItem.bind(this)}>Add Me</button>

        <ul>
        {this.renderItems()}
        </ul>
      </React.Fragment>
    );
  }
}

export default App;