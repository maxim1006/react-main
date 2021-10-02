import React, { memo } from 'react';
import MaterialLoader from '../loader/MaterialLoader';
import { useTracksQuery } from '../../generated/operations';

type TracksContainerProps = {};

const TracksContainer = memo<TracksContainerProps>(() => {
    const { data, loading, error } = useTracksQuery({
        variables: {},
    });

    if (loading) {
        return <MaterialLoader />;
    }

    if (error) {
        return <>{error.message}</>;
    }

    return (
        <section>
            <h3>Tracks</h3>

            <ul>
                {data?.tracks.map((i, index) => (
                    <li
                        key={index}
                        style={{
                            display: 'grid',
                            gridAutoFlow: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            columnGap: 20,
                        }}
                    >
                        <p>title: {i.title}</p>
                        {i.thumbnail && (
                            <p>
                                <img
                                    height={100}
                                    style={{ objectFit: 'contain' }}
                                    width={100}
                                    src={i.thumbnail}
                                    alt="thumbnail"
                                />
                            </p>
                        )}
                        <p>length: {i.length}</p>
                        <p>modulesCount: {i.modulesCount}</p>
                        <p style={{ display: 'grid', gridAutoFlow: 'column', alignItems: 'center', columnGap: 10 }}>
                            Author:
                            {i.author?.name}, age: {i.author?.age}
                            {i.author?.photo && <img width={100} height={100} src={i.author?.photo} alt="author" />}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    );
});

export default TracksContainer;
