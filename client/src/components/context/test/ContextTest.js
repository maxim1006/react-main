import React, { Component } from 'react';
import './ContextTest.scss';
import LanguageContext from '../../../context/LanguageContext';
import ContextCreate from '@app/components/context/test/context-create.component';

export default class ContextTest extends Component {
    state = {
        language: 'en',
    };

    render() {
        return (
            <div className='context-test'>
                Select language:
                <a className='context-test__link' href='/' onClick={this.onLanguageChange.bind(this, 'en')}>
                    en
                </a>
                <a className='context-test__link' href='/' onClick={this.onLanguageChange.bind(this, 'ru')}>
                    ru
                </a>
                <LanguageContext.Provider value={this.state.language}>
                    <ContextCreate />
                </LanguageContext.Provider>
            </div>
        );
    }

    onLanguageChange = (language, event) => {
        event.preventDefault();

        this.setState({
            language,
        });
    };
}
