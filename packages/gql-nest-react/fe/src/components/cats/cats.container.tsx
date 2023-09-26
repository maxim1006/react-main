import { FC, FormEvent, memo, useCallback, useRef } from 'react';
import {
    Cat,
    CreateCatInput,
    useCreateCatMutation,
    useDeleteCatMutation,
    useGetCatsQuery,
    useUpdateCatMutation,
} from '../../gql/generated/graphql.ts';
import { gql, Reference } from '@apollo/client';
import { Maybe } from 'graphql/jsutils/Maybe';
import CatInfo from './cat.component.tsx';
import { commonUtilsOmitTypeName } from '../../utils/common.utils.ts';

type CatsContainerProps = object;

const CatsContainer: FC<CatsContainerProps> = () => {
    const { data } = useGetCatsQuery();

    // второй способ получить котов
    // const { data: data2 } = useQuery(GetCatsDocument);

    const formRef = useRef<HTMLFormElement>(null!);

    const [createCatMutation, { loading: createLoading }] = useCreateCatMutation({
        update(cache, { data }) {
            cache.modify({
                fields: {
                    cats(existingCatsRef = []) {
                        const newCatRef = cache.writeFragment({
                            data: data?.createCat,
                            fragment: gql`
                                fragment NewCat on Cat {
                                    id
                                    name
                                }
                            `,
                        });
                        return [...existingCatsRef, newCatRef];
                    },
                },
            });
        },
    });

    const [updateCatMutation, { loading: updateLoading }] = useUpdateCatMutation({
        update(cache, { data }) {
            cache.modify({
                fields: {
                    cats(existingCatsRefs = [], { readField }) {
                        if (!data) return;

                        const { updateCat } = data;

                        const updatedCat = cache.writeFragment({
                            id: cache.identify(updateCat!),
                            data: data?.updateCat,
                            fragment: gql`
                                fragment NewCat on Cat {
                                    id
                                    name
                                }
                            `,
                        });
                        return existingCatsRefs.map((catRef: Reference) =>
                            readField('id', catRef) === data?.updateCat?.id ? updatedCat : catRef
                        );
                    },
                },
            });
        },
    });

    const [deleteCatMutation, { loading: deleteLoading }] = useDeleteCatMutation({
        // для обновления кеша но с доп гетом
        // refetchQueries: [GetCatsDocument],
        update(cache, { data }) {
            cache.modify({
                fields: {
                    cats(existingCatRefs, { readField }) {
                        const deletedCat = data?.deleteCat;

                        return existingCatRefs.filter(
                            (catRef: Reference) => deletedCat?.id !== readField('id', catRef)
                        );
                    },
                },
            });

            cache.gc();
        },
    });

    const loading = createLoading || updateLoading || deleteLoading;

    const handleDeleteCat = useCallback(
        async (cat: Cat) => {
            if (cat?.id) {
                try {
                    await deleteCatMutation({ variables: { id: cat.id } });
                } catch (e) {
                    console.error(e);
                }
            }
        },
        [deleteCatMutation]
    );

    const handleCreateCat = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        const { age, name } = Object.fromEntries(formData.entries()) as CreateCatInput;

        try {
            await createCatMutation({
                variables: { createCatInput: { age: Number(age), name } },
            });
        } catch (e) {
            console.error('create cat error ', e);
        }

        formRef.current?.reset();
    };

    const handleUpdateCat = useCallback(
        async (cat: Cat) => {
            try {
                await updateCatMutation({
                    variables: {
                        updateCatInput: commonUtilsOmitTypeName({ ...cat, age: Number(cat.age) }),
                    },
                });
            } catch (e) {
                console.error('update cat error ', e);
            }
        },
        [updateCatMutation]
    );

    if (!data) return <>No cats so far</>;

    return (
        <>
            <form ref={formRef} onSubmit={handleCreateCat}>
                name: <input type='text' name='name' />
                age: <input type='text' name='age' />
                <button type='submit'>Submit</button>
            </form>

            {loading
                ? 'Loading...'
                : data.cats?.map((i: Maybe<Cat>) => (
                      <CatInfo
                          onDelete={handleDeleteCat}
                          onUpdate={handleUpdateCat}
                          key={i?.id}
                          model={i}
                      />
                  ))}
        </>
    );
};

export default memo(CatsContainer);
