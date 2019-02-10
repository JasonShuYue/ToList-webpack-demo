import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: 'test',
      todoList: [
        {id: 1, content: '第一个待办'}
      ]
    };
  }

  onChange(event) {
    this.setState({
      ...this.state,
      newTodo: event.target.value
    });
  }

  render() {
    let { todoList, newTodo } = this.state;
    let todos = todoList.map((item, index) => {
      return (
          <li key={index}>{item.content}</li>
      );
    });

    return (
      <div className="App">
        <h1>我的待办</h1>
        <div className="input-wrapper">
          <input type="text" value={newTodo} onChange={this.onChange.bind(this)}/>
        </div>
        <ol className="todoList-wrapper">
          {todos}
        </ol>
      </div>
    );
  }
}

export default App;
