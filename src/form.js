import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            method: '',
            value: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState( {value: event.target.value} );
    }
}