import React from 'react';
import Form from './Form';
import { shallow } from 'enzyme';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Form />);
});

describe('<Form> rendering', () => {
    it('should render  one <form>', () => {
        expect(wrapper.find('form')).toHaveLength(1);
    });
    it('should not render any button when operator is not pass in props', () => {
        expect(wrapper.find('button')).toHaveLength(0);
    });
    it('should render one Add button when the + operator is passed as prop', () => {
        wrapper.setProps( { operator: '+'} );
        expect(wrapper.find('#formButtonAdd')).toHaveLength(1);
        expect(wrapper.find('#formButtonSubstract')).toHaveLength(0);
    });
    it('should render one Substract button when the - operator is passed as prop', () => {
        wrapper.setProps( { operator: '-'} );
        expect(wrapper.find('#formButtonAdd')).toHaveLength(0);
        expect(wrapper.find('#formButtonSubstract')).toHaveLength(1);
    });
});

describe('<Form interactions', () => {
    it('should change the firstNumber state when onChange function of the #number1 input is invoked', () => {
        wrapper.find('#number1').simulate('change', { target: {value: 50} });
        expect(wrapper.state('firstNumber')).toEqual(50);
        expect(wrapper.state('secondNumber')).toEqual('');
    });
    it('should change the secondNumber state when onChange function of the #number2 input is invoked', () => {
        wrapper.find('#number2').simulate('change', { target: {value: 70} });
        expect(wrapper.state('firstNumber')).toEqual('');
        expect(wrapper.state('secondNumber')).toEqual(70);
    });
    it('should call the onClick function when the Add button is clicked', () => {
        wrapper.setProps( {operator: '+', } );        
        const mockedHandleClick = jest.fn();
        //For some reason it does not workd for binded functions in <Form>.
        wrapper.instance().handleAdd = mockedHandleClick;
        wrapper.find('#formButtonAdd').props().onClick();
        console.log()
        expect(mockedHandleClick).toHaveBeenCalledTimes(1);
    });
});

describe('<Form> lifecycle method invocations', () => {
    it('should change the state when componentDidMount is called', () => {
        expect(wrapper.state('componentState')).toEqual('mounted');
    })
})