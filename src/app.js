import React from 'react';
import Header from './header.js';
import Form from './form.js';
import Footer from './footer.js';
// all sass designs are loaded to and ran from the App compenent
import './app.scss';
import './styles/header.scss';
import './styles/form.scss';
import './styles/footer.scss';

// this component behaves similarly to our hub in CAPS, it sort of manages/hosts the rest of our components
class App extends React.Component {
    constructor() {
        super();
        // Each component has it's own state
        this.state = {};
        // we must bind methods (not defined with fat arrow functions to the React.Components "this")
        // this.handleStateWords = this.handleStateWords.bind(this);
    }
    // handleStateWords(words) {
    //     this.setState( {words} );
    // }
    render() {
        // react components appear here, must be returned as JSX
        return (
            <div>
                <Header/>
                <Form/>
                <Footer/>
            </div>
        );
    }
}
// module.exports = App
// vs.
// module.exports = {
//   App
// }
export default App;