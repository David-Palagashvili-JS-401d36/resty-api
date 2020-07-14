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
    // separating the onChange handler allows us to be more dynamic with JSX
    handleChange(event) {
        this.setState( {value: event.target.value} );
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
                    <input type="text" id="url" placeholder="URL" name="url" onChange={this.handleChange}></input>
                    <input className = "submit" value= "GO!"></input>
                    <input className="button" type="button" value="GET" onClick={() => this.setState({method: 'GET'})}></input>
                </form>
                <section>
                    <p className="update">{this.state.method} {this.state.value}</p>
                </section>
            </section>
        );
    }
}

export default Form;