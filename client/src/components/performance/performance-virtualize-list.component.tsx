import React, { memo, useEffect, useRef } from 'react';
import { FixedSizeList, VariableSizeList } from 'react-window';
import useFetch from '../hooks/useFetch';

type PostType = { id: string; title: string; body: string; style: any; index: number };

// Идиоткий плагин хрен знает как народ его использует, не умеет считать динамическую высоту

const PerformanceVirtualizeList: React.FC = () => {
    const sizes: any = [];

    const { data }: { data: any } = useFetch({
        url: 'https://jsonplaceholder.typicode.com/posts'
    });

    const RowComponent = ({ title, body, style, index }: Partial<PostType>) => {
        const ref = useRef<HTMLDivElement>(null!);
        useEffect(() => {
            if (ref.current) {
                ref.current.style.height = null;
                sizes[index] = ref.current.offsetHeight;
            }
        }, [index]);

        return (
            <div style={style} ref={ref}>
                <h4>{title}</h4>
                <p>{body}</p>
            </div>
        );
    };

    const getItemSize = (index: number) => {
        return sizes[index] || 120;
    };

    const Row = ({ index, style }: any) =>
        data[index] ? (
            <RowComponent
                index={index}
                id={data[index].id}
                title={data[index].title}
                body={data[index].body}
                style={style}
            />
        ) : null;

    return (
        <>
            <FixedSizeList height={200} width={500} itemSize={120} itemCount={data.length}>
                {Row}
            </FixedSizeList>

            <VariableSizeList height={200} width={500} itemSize={getItemSize} itemCount={data.length}>
                {Row}
            </VariableSizeList>
        </>
    );
};

export default memo(PerformanceVirtualizeList);
