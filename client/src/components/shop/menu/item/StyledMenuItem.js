import styled from "styled-components";
import {
    StyledFontBoldLarge,
    StyledFontLightBig
} from "../../../styled-component/mixins/SyledFonts";

export const StyledShopMenuItem = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    justify-content: center;
    align-items: center;
    min-width: 30%;
    height: 350px;
    margin: 0 1% 2%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    background-position: center;
    background-size: cover;
    color: white;
    opacity: 1;
    transition: opacity 0.2s;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;

export const StyledShopMenuItemTitle = styled.div`
    ${StyledFontBoldLarge}
    font-size: 30px;
    text-shadow: 0 0 10px yellow;
`;

export const StyledShopMenuItemSubTitle = styled.div`
    ${StyledFontLightBig}
    text-shadow: 0 0 10px #ccc;
`;
