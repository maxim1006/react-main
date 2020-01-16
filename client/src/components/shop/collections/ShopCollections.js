import React, {Component} from "react";
import ShopCollectionsPreview from "./preview/ShopCollectionsPreview";
import {connect} from "react-redux";

class ShopCollections extends Component {
    render() {
        const {shopData} = this.props;

        return (
            Object.values(shopData).map(item => {
                const currentItem = {...item};
                // in Preview show 4 items
                currentItem["items"] = currentItem["items"].slice(0, 4);

                return <ShopCollectionsPreview key={currentItem.id} {...currentItem}/>
            })
        );
    }
}



const mapStateToProps = (state, ownProps) => ({shopData: state.shopData.data});



export default connect(mapStateToProps)(ShopCollections);

