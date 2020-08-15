import React from 'react';
import { shallow, mount } from 'enzyme';
import Add from './Add';
import Form from './Form';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Add />);
});

describe('<Add /> rendering', () => {
    it('should render one <h1>', () => {
        expect(wrapper.find('h1')).toHaveLength(1);
    });
    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should render one <Form>', () => {
        expect(wrapper.find(Form)).toHaveLength(1);
    });
    it('should render two labels', () => {
        wrapper = mount(<Add />);
        expect(wrapper.find('label')).toHaveLength(2);
        wrapper.unmount();
    });
});