import React, {Component} from 'react';
import 'normalize.css';

import TodoInput from './TodoInput/TodoInput';
import TodoItem from './TodoItem/TodoItem';
import {getCurrentUser, signOut} from './initial/leanCloud';
import UserDialog from './UserDialog/UserDialog';

import './App.css';
import './reset.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: getCurrentUser() || {},
            newTodo: '',
            todoList: []
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
    }

    // 改变新建Todo内容
    changeContent(content) {
        this.setState(
            {
                ...this.state,
                newTodo: content
            }
        );
    }

    // 改变todo状态
    toggle(e, todo) {
        todo.status = todo.status === 'completed' ? '' : 'completed';
        this.setState(this.state);
    }

    // 删除todo
    delete(event, todo) {
        todo.deleted = true;
        this.setState(this.state);
    }

    // 注册/登录操作
    onSignUpOrIn(user) {
        this.setState({
            ...this.state,
            user
        });
    }


    // 登出操作
    signOut() {
        signOut();
        this.setState({
            ...this.state,
            user: {}
        });

    }

    componentDidMount() {
    }


    render() {
        let { user, todoList, newTodo} = this.state;
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
                <h1>{user.id ? user.username : '我'}的待办</h1>
                {user.id ? <button onClick={this.signOut.bind(this)}>登出</button> : null}
                <div className="input-wrapper">
                    <TodoInput newTodo={newTodo}
                               onSubmit={this.addTodo.bind(this)}
                               onChange={this.changeContent.bind(this)}
                    />
                </div>
                <ol className="todoList">
                    {todos}
                </ol>
                {
                    user.id ? null : <UserDialog onSignUp={this.onSignUpOrIn.bind(this)}
                                                 onSignIn={this.onSignUpOrIn.bind(this)}/>
                }

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
