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
        this.handleSelection = this.handleSelection.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // separating the onChange handler allows us to be more dynamic with JSX
    handleChange (event) {
        this.setState( {url: event.target.value} );
    }
    // Expects a function to be sent to it as a prop
    handleSelection (event) {
        this.setState( {method: event.target.value} );
        event.preventDefault();
    }

    // switching to async function for onSubmit promises
    async handleSubmit(event) {
        console.log('URL submitted to form', this.state.url);
        event.preventDefault();

        let formData = await fetch(this.state.url);
        let jsonData = await formData.json();
        // Send the API results back to App.js using the method sent down in props
        let count = jsonData.count;
        let result = jsonData.result;

        this.props.handler(count, result);
    }
    // Renders a URL entry form with a selection of REST methods to choose from.
    render() {
        return (
            <section id="form">
                <form onSubmit={this.handleSubmit}>
                    <label> URL: </label>
                    <input type="text" id="URL" placeHolder="URL" name="URL" onChange={this.handleChange}></input>
                    <input className = "submit" value= "GO!"></input>
                    <input className="button" type="button" value="GET" onClick={() => this.setState( {method: 'GET'} )}></input>
                    <input className="button" type="button" value="POST" onClick={() => this.setState( {method: 'POST'} )}></input>
                    <input className="button" type="button" value="PUT" onClick={() => this.setState( {method: 'PUT'} )}></input>
                    <input className="button" type="button" value="DELETE" onClick={() => this.setState( {method: 'DELETE'} )}></input>
                </form>
            </section>
        );
    }
}

export default Form;