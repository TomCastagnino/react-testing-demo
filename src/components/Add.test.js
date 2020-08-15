import React from 'react';
import { shallow } from 'enzyme';
import Add from './Add';


describe('<Add /> rendering', () => {
    it('should render one <h1>', () => {
        let wrapper = shallow(<Add />);
        expect(wrapper.children('h1')).toHaveLength(1);
    });
    it('should match snapshot', () => {
        const wrapper = shallow(<Add />);
        expect(wrapper).toMatchSnapshot();
    })
});