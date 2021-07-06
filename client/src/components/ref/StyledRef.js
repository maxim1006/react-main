import styled from 'styled-components';
import { StyledFontBoldLarge } from '../styled-component/mixins/SyledFonts';
import { StyledBorderColorLight } from '../styled-component/StylesColors';

export const StyledRef = styled.div`
    height: 300px;
    overflow: auto;
    border: 1px dashed ${StyledBorderColorLight};
    scroll-behavior: smooth;
`;

export const StyledRefLink = styled.a`
    margin: 0 10px;
`;

export const StyledRefBlock = styled.div`
    height: 500px;
`;

export const StyledRefTitle = styled.div`
    ${StyledFontBoldLarge};
`;
