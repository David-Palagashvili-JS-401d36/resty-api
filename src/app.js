import React from 'react';
import Header from './header.js';
import Form from './form.js';
import Footer from './footer.js';
// all sass designs are loaded to and ran from the App compenent
import './styles/app.scss';
import './styles/header.scss';
import './styles/form.scss';
import './styles/footer.scss';

// this component behaves similarly to our hub in CAPS, it sort of manages/hosts the rest of our components
class App extends React.Component {
    constructor() {
        super();
        this.state = { // Holds state: Count and Results Array
            count: 0,
            result: []
        }
    }
    // A class method that can update state (getting a linter error ln 21 at the = operator...)
    handleFormActions = (count, result) => {
        this.setState( {count, result} )
    }

    render() {
        // TODO: Renders 2 Child Components
        return (
            <div>
                <Header/>
                <Form handler = {this.handleFormActions}/>
                <Footer/>
            </div>
        )
    }
}

export default App;