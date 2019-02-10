import React, { Component } from 'react';

import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: 'test',
      todoList: [
        {id: 1, content: '第一个待办'},
        {id: 2, content: '第二个待办'}
      ]
    };
  }


  render() {
    let { todoList, newTodo } = this.state;
    let todos = todoList.map((item, index) => {
      return (
          <li key={index}>
            <TodoItem todoItem={item.content} />
          </li>
      );
    });

    return (
      <div className="App">
        <h1>我的待办</h1>
        <div className="input-wrapper">
          <TodoInput newTodo={newTodo} />
        </div>
        <ol className="todoList-wrapper">
          {todos}
        </ol>
      </div>
    );
  }
}

export default App;
