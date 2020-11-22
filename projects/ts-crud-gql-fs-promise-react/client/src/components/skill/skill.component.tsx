import React, { memo, useState } from 'react';

type SkillProps = {
    data: any;
    onRemove?: (member: any) => void;
    onUpdate?: (member: any) => void;
};

const Skill = memo<SkillProps>(({ data, onRemove, onUpdate }) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [editNameState, setEditNameState] = useState<string>('');
    const [editCompletedState, setCompletedState] = useState<boolean>(false);

    const onCurrentEditSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setEditMode(false);
        onUpdate &&
            onUpdate({
                ...data,
                name: editNameState,
                completed: editCompletedState,
            });
    };

    return (
        <>
            <p>
                Name: {data?.name} Completed: {data?.completed}
            </p>
            <button type="button" onClick={() => onRemove && onRemove(data)}>
                Remove
            </button>

            {editMode ? (
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
            )}
        </>
    );
});

export default Skill;
