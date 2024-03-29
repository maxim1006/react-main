import React, { memo, FC, FormEventHandler, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/store/store';
import {
    addBookAction,
    fetchBooksAction,
    removeBookAction,
    selectAllBooks,
    selectBookById,
    selectBookEntities,
    selectBookIds,
    selectTotalBooks,
    updateBookAction,
    updateBookAsyncAction,
} from '@app/store/books/books.slice';
import { generateRandomString } from '@app/common/utils/generate.utils';

type RtBooksContainerProps = {};

const RtBooksContainer: FC<RtBooksContainerProps> = () => {
    const dispatch = useAppDispatch();
    const bookById = useAppSelector(state => selectBookById(state, '1'));
    const bookIds = useAppSelector(selectBookIds);
    const bookEntities = useAppSelector(selectBookEntities);
    const bookAll = useAppSelector(selectAllBooks);
    const bookTotal = useAppSelector(selectTotalBooks);
    const usersLoading = useAppSelector(state => state.books.loading);

    console.log({ bookById, bookIds, bookEntities, bookAll, bookTotal, usersLoading });

    useEffect(() => {
        (async () => {
            const result = await dispatch(fetchBooksAction());
            console.log({ result });
        })();
    }, [dispatch]);

    const onFormSubmit: FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault();
        //
        e.persist();
        const target = e.target as typeof e.target & {
            title: { value: string };
        };

        dispatch(
            addBookAction({
                id: Date.now() + '',
                title: target.title.value,
            })
        );
    };

    return (
        <>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='title' />
                <button type='submit'>submit</button>
            </form>

            <ul>
                {bookAll.map(i => (
                    <li key={i.id}>
                        {i.title}
                        <button type='button' onClick={() => dispatch(removeBookAction(i.id))}>
                            remove
                        </button>
                        &nbsp;
                        <button
                            type='button'
                            onClick={() => {
                                // async update
                                dispatch(
                                    updateBookAsyncAction({
                                        id: i.id,
                                        title: generateRandomString(),
                                    })
                                );

                                // sync update
                                dispatch(
                                    updateBookAction({
                                        id: i.id,
                                        changes: {
                                            title: generateRandomString(),
                                        },
                                    })
                                );
                            }}
                        >
                            edit
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default memo(RtBooksContainer);
