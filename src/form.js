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

    handleSubmit(event) {
        console.log('URL submitted to form', this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <section id="form">
                <form onSubmit={this.handleSubmit}>
                    <label>URL:</label>
                    <input type="text" id="url" placeholder="URL" name="url" onChange={this.handleChange}></input>
                    <input className = "submit" value= "GO!"></input>
                </form>
                <section>
                    <p className="update">{this.state.method} {this.state.value}</p>
                </section>
            </section>
        );
    }
}

export default Form;