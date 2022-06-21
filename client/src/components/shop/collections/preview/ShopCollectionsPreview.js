import './ShopCollectionsPreview.scss';
import ShopCollectionsPreviewItemHooks from './item/ShopCollectionsPreviewItemHooks';
import {
    StyledShopCollectionsPreview,
    StyledShopCollectionsPreviewItem,
    StyledShopCollectionsPreviewItems,
    StyledShopCollectionsPreviewTitle,
} from './StyledShopCollectionsPreview';

export default ({ title, items }) => (
    <StyledShopCollectionsPreview>
        <StyledShopCollectionsPreviewTitle to={`collections/${title.toLowerCase()}`}>
            {title}
        </StyledShopCollectionsPreviewTitle>
        <StyledShopCollectionsPreviewItems>
            {items.map(item => (
                <StyledShopCollectionsPreviewItem key={item.id}>
                    <ShopCollectionsPreviewItemHooks item={item} />
                </StyledShopCollectionsPreviewItem>
            ))}
        </StyledShopCollectionsPreviewItems>
    </StyledShopCollectionsPreview>
);
