import React, { Component, PropTypes } from 'react'
import { DatePicker } from 'antd';
import { Button } from 'antd';
import { Input } from 'antd';

export default class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <div>
                {/*<input type='text' ref={(input)=>{this.input=input}} />*/}
                <Input placeholder="添加事项"
                       ref={(input)=>{this.input=input}}
                       style={{
                           width:'200px'
                       }}
                />
                <Button type="primary" ghost
                        onClick={(e) => this.handleClick(e)}>Add</Button>
                <DatePicker
                    format="MM-DD HH:mm:ss"
                    onChange={this.handleChange} />
            </div>
        )
    }

    handleClick(e) {
        if(!this.addTime){
            return false
        }
        const node = this.input
        const text = node.refs.input.value.trim()
        this.props.onAddClick(text,this.addTime)
        node.refs.input.value = ''
    }

    handleChange(date, dateString){
        this.addTime=dateString;
    }
}

AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired
}