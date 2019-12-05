import React from 'react';
import './Grid.scss';
import {DomRefImageComponent} from "../dom-ref/DomRefImage";

export default () => {
    const images = [
        '/images/1.jpg',
        '/images/2.jpg',
        '/images/3.jpg',
        '/images/4.jpg',
        '/images/5.jpg',
        '/images/6.jpg',
        '/images/7.jpg',
        '/images/8.jpg',
    ];

    function onLoad(height) {
        console.log(height);
    }

    return (
        <div className="grid">
            {images.map((img, index) => {
                return <DomRefImageComponent image={img} key={index} onLoad={onLoad}/>
            })}
        </div>
    );
}
