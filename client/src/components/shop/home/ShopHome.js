import React from "react";
import ShopMenu from "../menu/ShopMenu";

export default () => {
    const items = [
        {
            id: 0,
            title: "HATS",
            image: "/images/1.webp",
            linkUrl: "/hats"
        },
        {
            id: 1,
            title: "JACKETS",
            image: "/images/9.webp",
            linkUrl: "/jackets"
        },
        {
            id: 2,
            title: "SNEAKERS",
            image: "/images/10.webp",
            linkUrl: "/sneakers"
        },
        {
            id: 3,
            title: "WOMENS",
            image: "/images/6.webp",
            linkUrl: "/womens"
        },
        {
            id: 4,
            title: "MENS",
            image: "/images/5.webp",
            linkUrl: "/mens"
        }
    ];

    return (
        <div className="shop-home">
            <ShopMenu items={items}/>
        </div>
    );
};
