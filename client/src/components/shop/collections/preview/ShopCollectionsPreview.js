import React from "react";
import "./ShopCollectionsPreview.scss";
import {withRouter} from "react-router-dom";
import ShopCollectionsPreviewItemHooks from "./item/ShopCollectionsPreviewItemHooks";
import {
    StyledShopCollectionsPreview,
    StyledShopCollectionsPreviewItem,
    StyledShopCollectionsPreviewItems,
    StyledShopCollectionsPreviewTitle
} from "./StyledShopCollectionsPreview";

export default withRouter(({title, items}) => (
    <StyledShopCollectionsPreview>
        <StyledShopCollectionsPreviewTitle to={"collections/" + title.toLowerCase()}>
            {title}
        </StyledShopCollectionsPreviewTitle>
        <StyledShopCollectionsPreviewItems>
            {
                items.map(item =>
                    <StyledShopCollectionsPreviewItem key={item.id}>
                        <ShopCollectionsPreviewItemHooks item={item}/>
                    </StyledShopCollectionsPreviewItem>)
            }
        </StyledShopCollectionsPreviewItems>
    </StyledShopCollectionsPreview>
));
