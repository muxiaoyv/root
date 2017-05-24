/**
 * Created by 小羽 on 2017/5/24.
 */
import React, { Component, PropTypes } from 'react'
import TodoTime from './TodoTime'
import { Timeline } from 'antd';

export default class Todo extends Component {
    render() {
        return (

            <Timeline.Item
                onClick={this.props.onClick}
                color={ this.props.completed ? 'green' : 'red'}
                style={{

                    cursor: this.props.completed ? 'default' : 'pointer'
                }}>
                    {this.props.text}
                <TodoTime addTime={this.props.addTime}/>
            </Timeline.Item>

        )
    }
    // handleClick(e){
    //
    // }


}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    addTime:PropTypes.string.isRequired
}