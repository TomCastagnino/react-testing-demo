import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstNumber: '',
            secondNumber: '',
            componentState: 'default'
        }
        this.handleFirstNumber = this.handleFirstNumber.bind(this);
        this.handleSecondNumber = this.handleSecondNumber.bind(this);
        this.displayResult = this.displayResult.bind(this);
        // this.handleAdd = this.handleAdd.bind(this);
        this.handleSubstract = this.handleSubstract.bind(this);
    }

    componentDidMount() {
        this.setState( {componentState: 'mounted'} );
    }

    handleFirstNumber(event) {
        this.setState( {firstNumber: event.target.value} );
    }

    handleSecondNumber(event) {
        this.setState( {secondNumber: event.target.value} );
    }

    handleAdd() {
        const { firstNumber, secondNumber } = this.state;
        this.displayResult(parseInt(firstNumber) + parseInt(secondNumber));
    }

    handleSubstract() {
        const { firstNumber, secondNumber } = this.state;
        this.displayResult(parseInt(firstNumber) - parseInt(secondNumber));
    }

    displayResult(result) {
        alert(result);
    }

    render() {
        const { firstNumber, secondNumber } = this.state;
        const { operator } = this.props;
        return (
            <form className='form-group'>
                <fieldset className='form-group'>
                    <label>
                        First Number:
                    </label>
                    <input type='text' id='number1' className='form-input' value={firstNumber} onChange={this.handleFirstNumber} />
                </fieldset>
                <fieldset className='form-group'>
                    <label>
                        Second Number:
                    </label>
                    <input type='text' id='number2' className='form-input' value={secondNumber} onChange={this.handleSecondNumber} />
                </fieldset>
                <div className='form-group'>
                    {operator === '+' &&
                        <button id='formButtonAdd' className='btn' type='button' onClick={() => this.handleAdd()}>
                            Add
                        </button>
                    }
                    {operator === '-' &&
                        <button id='formButtonSubstract' className='btn' type='button' onClick={this.handleSubstract}>
                            Substract
                        </button>
                    }
                </div>
            </form>
        );
    }
}

export default Form;