import React, {memo, useState} from 'react';
import './Grid.scss';
import DomRefImageHooks from "../dom-ref/DomRefImageHooks";

export default memo(() => {
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

    const [counter, setCounter] = useState(0);

    function onLoad(e) {
        console.log(e.target);
    }

    return (
        <>
            <div onClick={_ => {
                setCounter(counter + 1);
                console.log(counter);
            }}>click {counter}</div>
            <div className="grid">
                {images.map((img, index) => {
                    // return <DomRefImageComponent image={img} key={index} onLoad={onLoad}/>
                    return <DomRefImageHooks src={img} key={index} onLoad={onLoad}/>
                })}
            </div>
        </>
    );
})
