/**
 * Created by 小羽 on 2017/5/24.
 */
import React, { Component, PropTypes } from 'react'

export default class TodoTime extends Component {
    render() {
        return (
            <span>
                {this.props.addTime}
            </span>
        )
    }
}

TodoTime.propTypes = {
    addTime:PropTypes.string.isRequired
}