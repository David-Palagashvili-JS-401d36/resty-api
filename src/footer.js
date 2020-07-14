import React from 'react';
import './styles/form.scss';

class Footer extends React.Component {
    constructor() {
        super();
        // Each component has it's own state
        this.state = {};
    }
    
    render() {
        return (
            <section id='footer'>
                <p>&copy; CodeFellows 2020</p>
            </section>
        );
    }
}

export default Footer;