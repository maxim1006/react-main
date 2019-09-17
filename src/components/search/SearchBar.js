import React, {Component} from 'react';
import './SearchBar.scss';

// все event которые передаются, в реакт оборачиваются в SyntheticEvent для косистенси, к примеру onChange работает
// на всех контролах при их изменении.
export class SearchBarComponent extends Component {
    onInputChange = (event) => {
        this.props.onInput(event);
    };

    onCheckboxChange = (event) => {
        console.log("onCheckboxChange ", event.target.checked);
    };

    onSelectChange = (event) => {
        console.log("onSelectChange ", event.target.value);
    };

    onTextareaChange = (event) => {
        console.log("onTextareaChange ", event.target.value);
    };

    onRadioChange = (event) => {
        console.log("onRadioChange ", event.target.value);
    };

    onDateChange = (event) => {
        console.log("onDateChange ", event.target.value);
    };

    // onChange: Fires when there’s a change in any of the form’s input elements.
    // так как onChange это обертка надо onInput команда реакта советует использовать
    // onChange который срабатывает при каждом изменении каждого контрола
    render() {
        return (
            <div className="search-bar">
                <input className="search-bar__input" onChange={this.onInputChange} type="text"/>
                <br/>
                <input className="search-bar__input" onChange={this.onCheckboxChange} type="checkbox"/>
                <br/>
                <select onChange={this.onSelectChange}>
                    <option value="1">option 1</option>
                    <option value="2">option 2</option>
                    <option value="3">option 3</option>
                </select>
                <br/>
                <textarea cols="30" rows="10" onChange={this.onTextareaChange}></textarea>
                <br/>
                <input type="radio" name="test" value="1" onChange={this.onRadioChange}/>radio 1
                <br/>
                <input type="radio" name="test" value="2" onChange={this.onRadioChange}/>radio 2
                <br/>
                <input type="radio" name="test" value="3" onChange={this.onRadioChange}/>radio 3
                <br/>
                <input type="date" onChange={this.onDateChange}/>
            </div>
        );
    }

}
