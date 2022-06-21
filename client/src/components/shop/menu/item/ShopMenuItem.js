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

export default MenuItem;
