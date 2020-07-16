import React from 'react';

import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Form from '../form.js';

describe('Now testing our form...', () => {
    it('Should render the form component', () => {
        let appComponent = shallow(<Form/>);
        expect(appComponent.find('button').exists()).toBe(true);
    });

    it('Should update the form\'s state with the method associated with the button...', () => {
        let appComponent = mount(<Form/>);
        let buttonMethod = appComponent.find( {className: 'button', value: 'PUT'} );

        expect(buttonMethod.exists()).toBeTruthy();
        expect(appComponent.state('method')).toBe('');

        buttonMethod.simulate('click');
        expect(appComponent.state('method')).toBe('PUT');
    });

    it('Should update the form\'s state with the URL', () => {
        let appComponent = mount(<Form />);
        let input = appComponent.find('#URL');
        input.simulate('change', { target: {value: 'juryriggedtest.com'}});
        expect(appComponent.state('URL')).toBe('juryriggedtest.com');
    });
});