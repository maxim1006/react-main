import React from 'react';
import useHooks from '../useHooks';

export default function HooksList({ resource }) {
    const resources = useHooks(resource);

    return resources ? (
        <ul className='hooks-list'>
            {resources.map(({ title }, index) => (
                <li className='hooks-list__item' key={index}>
                    {title}
                </li>
            ))}
        </ul>
    ) : (
        <p>"no items"</p>
    );
}
