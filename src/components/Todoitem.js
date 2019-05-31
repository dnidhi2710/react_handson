import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todoitem extends Component {
    render() {
        return (
            <div style={itemStyle}>
                <h1>{this.props.todo.title}</h1>
            </div>
        )
    }
}

//Proptypes
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
}

const itemStyle = {
    backgroundColor: '#f4f4f4'
}

export default Todoitem;
