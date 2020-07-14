import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="header">
                <h1>RESTy API</h1>
            </section>
        );
    }
}

export default Header;