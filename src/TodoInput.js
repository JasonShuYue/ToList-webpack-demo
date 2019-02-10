import React, { Component } from 'react';


class TodoInput extends  Component {
    constructor(props) {
        super(props);

    }

    render() {
        let { newTodo } = this.props;
        return(
            <input type="text" value={newTodo} />
        );
    }
}

export default TodoInput;