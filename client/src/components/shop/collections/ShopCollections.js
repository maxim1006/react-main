import { Component } from 'react';
import { connect } from 'react-redux';
import ShopCollectionsPreview from './preview/ShopCollectionsPreview';

class ShopCollections extends Component {
    render() {
        const { shopData } = this.props;

        return Object.values(shopData).map(item => {
            const currentItem = { ...item };
            // in Preview show 4 items
            currentItem.items = currentItem.items.slice(0, 4);

            return <ShopCollectionsPreview key={currentItem.id} {...currentItem} />;
        });
    }
}

const mapStateToProps = state => ({
    shopData: state.shopData.data,
});

export default connect(mapStateToProps)(ShopCollections);
