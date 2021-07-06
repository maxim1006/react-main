import React, { Component } from 'react';
import ThemeContext from '../../context/ThemeContext';

export class ThemeContextStore extends Component {
    state = {
        theme: 'default',
    };

    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, onThemeChange: this.onThemeChange }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }

    onThemeChange = event => {
        const htmlElement = document.documentElement;
        const theme = event.target.value;

        switch (theme) {
            case 'default': {
                htmlElement.classList.remove('theme1', 'theme2');
                break;
            }

            default: {
                htmlElement.classList.remove('theme1', 'theme2');
                htmlElement.classList.add(theme);
            }
        }

        this.setState({ theme });
    };
}
