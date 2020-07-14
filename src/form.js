import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            method: '',
            value: '',
        }
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
}