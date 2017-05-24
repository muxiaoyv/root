/**
 * Created by 小羽 on 2017/5/24.
 */
import React, { Component, PropTypes } from 'react'
import Todo from './Todo'
import { Timeline } from 'antd';

export default class TodoList extends Component {
    render() {
        return (
            <div>
                <br/>
                <Timeline pending={true}>
                    {this.props.todos.map((todo, index) =>
                        <Todo {...todo}
                              key={index}
                              onClick={() => this.props.onTodoClick(index)}
                              onClose={() => this.props.onTodoClose(index)}
                        />
                    )}
                </Timeline>
            </div>

        )
    }
}

TodoList.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    onTodoClose: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        addTime:PropTypes.string.isRequired
    }).isRequired).isRequired
}