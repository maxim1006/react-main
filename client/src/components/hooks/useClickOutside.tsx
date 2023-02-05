import { MutableRefObject, useEffect } from 'react';

export default function useClickOutside(ref: MutableRefObject<HTMLElement>, cb: () => void) {
    const handleClick = (e: Event) => {
        if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
            cb();
        }
    };

    // круто то что при каждом новом вызове этого useEffect будет вызываться возвращаемая функция очистки
    useEffect(() => {
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    });
}
