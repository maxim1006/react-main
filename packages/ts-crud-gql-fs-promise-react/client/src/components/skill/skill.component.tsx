import React, { memo, useState } from 'react';
import { ArrayType } from '../../models/common.model';
import { GetSkillsQuery } from '../../generated/operations';

type SkillProps = {
    data: any;
    onRemove?: (skill: ArrayType<NonNullable<GetSkillsQuery['skills']>['items']>) => void;
    onUpdate?: (skill: ArrayType<NonNullable<GetSkillsQuery['skills']>['items']>) => void;
};

const Skill = memo<SkillProps>(({ data, onRemove, onUpdate }) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [editNameState, setEditNameState] = useState<string>('');
    const [editCompletedState, setCompletedState] = useState<boolean>(false);

    const onCurrentEditSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setEditMode(false);
        onUpdate?.({
            ...data,
            name: editNameState,
            completed: editCompletedState,
        });
    };

    return (
        <>
            <p>
                Name: {data?.name} Completed: {JSON.stringify(data?.completed)}
            </p>
            {onRemove && (
                <button type="button" onClick={() => onRemove?.(data)}>
                    Remove
                </button>
            )}

            {onUpdate &&
                (editMode ? (
                    <form onSubmit={onCurrentEditSubmit}>
                        <label>
                            Name
                            <input
                                value={editNameState}
                                onChange={e => setEditNameState(e.target.value)}
                                name="name"
                                type="text"
                            />
                        </label>

                        <label>
                            Completed
                            <input
                                onChange={e => setCompletedState(e.target.checked)}
                                checked={editCompletedState}
                                name="completed"
                                type="checkbox"
                            />
                        </label>

                        <button type="submit">Submit</button>
                    </form>
                ) : (
                    <a
                        href="/"
                        onClick={e => {
                            e.preventDefault();
                            setEditMode(true);
                            setCompletedState(data.completed);
                            setEditNameState(`${data.name}` || '');
                        }}
                    >
                        Edit
                    </a>
                ))}
        </>
    );
});

export default Skill;
