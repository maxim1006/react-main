import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledFontBoldLarge } from '../../../styled-component/mixins/SyledFonts';

export const StyledShopCollectionsPreview = styled.div``;

export const StyledShopCollectionsPreviewTitle = styled(Link)`
    display: block;
    margin: 40px 0 20px;
    ${StyledFontBoldLarge}
`;

export const StyledShopCollectionsPreviewItems = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
`;

export const StyledShopCollectionsPreviewItem = styled.li`
    margin: 0 20px 20px 0;
`;
