import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { // state only for the form
            method: 'GET', // get is set as the default REST method
            display: '',
            url: '',
        }; // handlers invoked with the state, must be bound to the component (not defined with fat arrow functions)
        this.handleChange = this.handleChange.bind(this);
        // this.handleOptions = this.handleOptions.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // separating the onChange handler allows us to be more dynamic with JSX
    handleChange(event) {
        this.setState( {url: event.target.value} );
    }
    // having the submit handler as a dedicated method reduces possible interference from preventDefault.
    handleSubmit(event) {
        console.log('URL submitted to form', this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <section id="form">
                <form onSubmit={this.handleSubmit}>
                    <label>URL:</label>
                    <input type="text" id="URL" placeHolder="URL" name="URL" onChange={this.handleChange}></input>
                    <input className = "submit" value= "GO!"></input>
                    <input className="button" type="button" value="GET" onClick={() => this.setState( {method: 'GET'} )}></input>
                    <input className="button" type="button" value="POST" onClick={() => this.setState( {method: 'POST'} )}></input>
                    <input className="button" type="button" value="PUT" onClick={() => this.setState( {method: 'PUT'} )}></input>
                    <input className="button" type="button" value="DELETE" onClick={() => this.setState( {method: 'DELETE'} )}></input>
                </form>
                <section>
                    <p className="update">{this.state.method} {this.state.value}</p>
                </section>
            </section>
        );
    }
}

export default Form;