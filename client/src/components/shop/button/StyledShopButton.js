import styled, { css } from 'styled-components';
import { StyledMainColor, StyledPrimaryColor } from '../../styled-component/StylesColors';
import { StyledFontLightBig } from '../../styled-component/mixins/SyledFonts';

const shopButtonDark = css`
    background-color: ${StyledMainColor};
    border-color: black;

    &:hover {
        background-color: #fff;
        color: ${StyledMainColor};
    }
`;

const shopButtonFullWidth = css`
    width: 100%;
`;

const getButtonStyles = props => {
    let styles = '';

    if (props.fullWidth) {
        styles += shopButtonFullWidth.join('');
    }

    if (props.dark) {
        styles += shopButtonDark.join('');
    }

    return styles;
};

export const StyledShopButton = styled.button`
    padding: 10px 20px;
    border: 2px solid lightskyblue;
    ${StyledFontLightBig}
    background-color: ${StyledPrimaryColor};
    color: white;
    transition: all 0.2s;
    cursor: pointer;
    outline: none;
    
     &:hover {
        background-color: #fff;
        color: ${StyledPrimaryColor};
    }
    
    ${getButtonStyles}
`;
