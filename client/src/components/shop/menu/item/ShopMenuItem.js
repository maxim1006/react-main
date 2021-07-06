import React from 'react';
import { withRouter } from 'react-router-dom';
import { StyledShopMenuItem, StyledShopMenuItemSubTitle, StyledShopMenuItemTitle } from './StyledMenuItem';

const MenuItem = ({ title, subtitle = 'Shop now', image, history, match, linkUrl }) => {
    const onClick = () => {
        history.push(`${match.url}/collections${linkUrl}`);
    };

    return (
        <StyledShopMenuItem onClick={onClick} style={{ backgroundImage: `url(${image})` }}>
            <StyledShopMenuItemTitle>{title}</StyledShopMenuItemTitle>
            <StyledShopMenuItemSubTitle>{subtitle}</StyledShopMenuItemSubTitle>
        </StyledShopMenuItem>
    );
};

// Так как Роутер сетит проперти только компонентам в <Route то остальным прокидываю инфо о роутере через withRouter
export default withRouter(MenuItem);
