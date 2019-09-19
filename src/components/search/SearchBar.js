import React, {Component} from 'react';
import './SearchBar.scss';

// все event которые передаются, в реакт оборачиваются в SyntheticEvent для косистенси, к примеру onChange работает
// на всех контролах при их изменении.

// также в <select> появляется атрибут value, в который можно проставить инит стейт

// В реакт существуют controlled и uncontrolled form элементы. Разница в том, что controlled элемент всегда хранит
// стейт и в каждый момент времени мы можем сказать какой стейт у компонента, поэтому храню в стейте состояние контролов
export class SearchBarComponent extends Component {
    state = {
        inputValue: '',
        checkboxValue: false,
        selectValue: '2',
        textareaValue: '',
        radioValue: '1',
        dateValue: '2019-10-06' // always to YYYY-MM-DD
    };

    onInputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });

        this.props.onInput(event);
    };

    onCheckboxChange = (event) => {
        this.setState({
            checkboxValue: event.target.checked
        });
        console.log("onCheckboxChange ", event.target.checked);
    };

    onSelectChange = (event) => {
        this.setState({
            selectValue: event.target.value
        });
        console.log("onSelectChange ", event.target.value);
    };

    onTextareaChange = (event) => {
        console.log("onTextareaChange ", event.target.value);
        this.setState({
            textareaValue: event.target.checked
        });
    };

    onRadioChange = (event) => {
        console.log("onRadioChange ", event.target.value);
        this.setState({
            radioValue: event.target.value
        });
    };

    onDateChange = (event) => {
        console.log("onDateChange ", event.target.value);
        this.setState({
            dateValue: event.target.value
        });
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log('onFormSubmit ', this.state);
    }

    // onChange: Fires when there’s a change in any of the form’s input elements.
    // так как onChange это обертка надо onInput команда реакта советует использовать
    // onChange который срабатывает при каждом изменении каждого контрола
    render() {
        const {inputValue, checkboxValue, selectValue, textareaValue, radioValue, dateValue} = this.state;

        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="search-bar">
                <input
                    className="search-bar__input"
                    value={inputValue}
                    onChange={this.onInputChange}
                    type="text"
                />
                {this.props.children}
                <br/>
                <input
                    className="search-bar__input"
                    onChange={this.onCheckboxChange}
                    type="checkbox"
                    checked={checkboxValue}
                />
                <br/>
                <select
                    value={selectValue}
                    onChange={this.onSelectChange}
                >
                    <option value="1">option 1</option>
                    <option value="2">option 2</option>
                    <option value="3">option 3</option>
                </select>
                <br/>
                <textarea
                    cols="30"
                    rows="10"
                    onChange={this.onTextareaChange}
                    value={textareaValue}
                />
                <br/>
                <input type="radio" name="test" value="1" checked={radioValue === '1'}
                       onChange={this.onRadioChange}/>radio 1
                <br/>
                <input type="radio" name="test" value="2" checked={radioValue === '2'}
                       onChange={this.onRadioChange}/>radio 2
                <br/>
                <input type="radio" name="test" value="3" checked={radioValue === '3'}
                       onChange={this.onRadioChange}/>radio 3
                <br/>
                <input
                    type="date"
                    value={dateValue}
                    onChange={this.onDateChange}
                />
            </div>
            </form>
        );
    }

}
