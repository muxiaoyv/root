/**
 * Created by 小羽 on 2017/5/24.
 */
import React, { Component, PropTypes } from 'react'
import { Radio } from 'antd';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

export default class Footer extends Component {
    // renderFilter(filter, name) {
    //     if (filter === this.props.filter) {
    //         return name
    //     }
    //
    //     return (
    //         <a href='#' onClick={e => {
    //             e.preventDefault()
    //             this.props.onFilterChange(filter)
    //         }}>
    //             {name}
    //         </a>
    //     )
    // }

    render() {
        return (
            <div>
                <RadioGroup
                    onChange={e => {
                    e.preventDefault()
                    this.props.onFilterChange(e.target.value)}}
                    defaultValue="SHOW_ALL">
                    <RadioButton value="SHOW_ALL">All</RadioButton>
                    <RadioButton value="SHOW_COMPLETED">Completed</RadioButton>
                    <RadioButton value="SHOW_ACTIVE">Active</RadioButton>
                </RadioGroup>
            </div>
            // <p>
            //     Show:
            //     {' '}
            //     {this.renderFilter('SHOW_ALL', 'All')}
            //     {', '}
            //     {this.renderFilter('SHOW_COMPLETED', 'Completed')}
            //     {', '}
            //     {this.renderFilter('SHOW_ACTIVE', 'Active')}
            //     .
            // </p>
        )
    }
}

Footer.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    filter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
}