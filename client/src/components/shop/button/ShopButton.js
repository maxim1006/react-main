import React from 'react';
import { StyledShopButton } from './StyledShopButton';

// ...restProps очень крутое применениме тут, так как провайдит к примеру onClick на родительском ShopButton
export default ({ children, ...restProps }) => <StyledShopButton {...restProps}>{children}</StyledShopButton>;
