import './ShopCollectionsPreview.scss';
import ShopCollectionsPreviewItemHooks from './item/ShopCollectionsPreviewItemHooks';
import {
    StyledShopCollectionsPreview,
    StyledShopCollectionsPreviewItem,
    StyledShopCollectionsPreviewItems,
    StyledShopCollectionsPreviewTitle,
} from './StyledShopCollectionsPreview';

const ShopCollectionsPreview = ({ title, items }) => (
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

export default ShopCollectionsPreview;
