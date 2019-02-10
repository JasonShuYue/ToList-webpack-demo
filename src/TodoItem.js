import React, { Component } from 'react';


class TodoItem extends  Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { todoItem } = this.props;
        return(
            <div>{todoItem}</div>
        );
    }
}

export default TodoItem;