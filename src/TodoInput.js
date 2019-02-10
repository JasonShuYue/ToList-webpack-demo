import React, {Component} from 'react';

import './TodoInput.css';


class TodoInput extends Component {
    constructor(props) {
        super(props);
    }

    // 监听input回车事件
    submit(event) {
        let {onSubmit} = this.props;
        if (event.key === "Enter") {
            onSubmit(event.target.value);
        }
    }

    changeContent(event) {
        this.props.onChange(event.target.value);
    }


    render() {
        let {newTodo} = this.props;
        return (
            <input type="text" value={newTodo}
                   className="TodoInput"
                   onKeyDown={this.submit.bind(this)}
                   onChange={(value) => this.changeContent(value)}
            />
        );
    }
}

export default TodoInput;