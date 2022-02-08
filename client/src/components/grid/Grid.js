import { memo, useState } from 'react';
import './Grid.scss';
import DomRefImageHooks from '../dom-ref/DomRefImageHooks';
import img1 from '../../assets/images/1.jpg';
import img2 from '../../assets/images/2.jpg';
import img3 from '../../assets/images/3.jpg';
import img4 from '../../assets/images/4.jpg';
import img5 from '../../assets/images/5.jpg';
import img6 from '../../assets/images/6.jpg';
import img7 from '../../assets/images/7.jpg';
import img8 from '../../assets/images/8.jpg';

export default memo(() => {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8];

    const [counter, setCounter] = useState(0);

    function onLoad(e) {
        console.log(e.target);
    }

    return (
        <>
            <div
                onClick={() => {
                    setCounter(counter + 1);
                    console.log(counter);
                }}
            >
                click
                {counter}
            </div>
            <div className='grid'>
                {images.map((img, index) => {
                    // return <DomRefImageComponent image={img} key={index} onLoad={onLoad}/>
                    return <DomRefImageHooks src={img} key={index} onLoad={onLoad} />;
                })}
            </div>
        </>
    );
});
