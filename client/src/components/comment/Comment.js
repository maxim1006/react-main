import React from 'react';
import './Comment.scss';

export default function Comment({ name, content, date, img, id }) {
    return (
        <li className='comment'>
            <div className='comment__col _margin-right-s'>
                <div className='comment__image'>
                    <img loading='lazy' src={img} alt='' className='comment__image-img' />
                </div>
            </div>
            <div className='comment__col'>
                <div className='comment__row'>
                    <div className='comment__name'>{name}</div>
                    <div className='comment__date'>{date}</div>
                </div>
                <div className='comment__row'>
                    <div className='comment__content'>{content}</div>
                </div>
            </div>
        </li>
    );
}
