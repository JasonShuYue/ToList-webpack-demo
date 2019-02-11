import React, {Component} from 'react';

import './TodoItem.css';


class TodoItem extends Component {
    constructor(props) {
        super(props);
    }

    toggle(e) {
        this.props.onToggle(e, this.props.todoItem)
    }

    delete(e) {
        this.props.onDelete(e, this.props.todoItem)
    }

    render() {
        let {todoItem} = this.props;
        return (
            <div className="TodoItem">
                <input type="checkbox" checked={todoItem.status === "completed" ? "" : "completed"}
                       onChange={this.toggle.bind(this)}
                />
                <span className="title">{todoItem.content}</span>
                <button onClick={this.delete.bind(this)}>删除</button>
            </div>
        );
    }
}

export default TodoItem;