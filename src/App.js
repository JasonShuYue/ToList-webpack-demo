import React, {Component} from 'react';
import 'normalize.css';

import TodoInput from './TodoInput/TodoInput';
import TodoItem from './TodoItem/TodoItem';
import * as localStore from './localStore'

import './App.css';
import './reset.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodo: '',
            todoList: localStore.load('todoList') || []
        };
    }

    // 增加Todo
    addTodo(content) {
        let {todoList} = this.state;
        let newTodo = {
            id: idMaker(),
            content: content,
            status: null,
            deleted: false
        };
        todoList.push(newTodo);
        this.setState({
            newTodo: '',
            todoList: todoList
        });
        localStore.save('todoList', this.state.todoList)
    }

    changeContent(content) {
        this.setState(
            {
                ...this.state,
                newTodo: content
            }
        );
        localStore.save('todoList', this.state.todoList)
    }

    toggle(e, todo) {
        todo.status = todo.status === 'completed' ? '' : 'completed';
        this.setState(this.state);
        localStore.save('todoList', this.state.todoList)
    }

    delete(event, todo) {
        todo.deleted = true;
        this.setState(this.state);
        localStore.save('todoList', this.state.todoList);
    }


    render() {
        let {todoList, newTodo} = this.state;
        let todos = todoList.filter((item) => !item.deleted)
                            .map((item, index) => {
            return (
                <li key={index}>
                    <TodoItem todoItem={item}
                              onToggle={this.toggle.bind(this)}
                              onDelete={this.delete.bind(this)}
                    />
                </li>
            );
        });

        return (
            <div className="App">
                <h1>我的待办</h1>
                <div className="input-wrapper">
                    <TodoInput newTodo={newTodo}
                               onSubmit={this.addTodo.bind(this)}
                               onChange={this.changeContent.bind(this)}
                    />
                </div>
                <ol className="todoList">
                    {todos}
                </ol>
            </div>
        );
    }
}

export default App;

let id = 0;

let idMaker = () => {
    id += 1;
    return id;
};
