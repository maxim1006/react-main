import React, { memo, useRef, useState } from 'react';

type CreateSkillProps = {
    onCreate: (member: { name: string; completed: boolean }) => void;
};

const CreateSkill = memo<CreateSkillProps>(({ onCreate }) => {
    const [error, setError] = useState<boolean>(false);

    const nameRef = useRef<HTMLInputElement>(null!);
    const completedRef = useRef<HTMLInputElement>(null!);

    return (
        <form
            style={{ margin: '20px 0' }}
            onSubmit={e => {
                e.preventDefault();

                if (!nameRef.current.value.trim()) {
                    setError(true);
                    return false;
                } else {
                    setError(false);
                }

                const name = nameRef.current.value;
                const completed = completedRef.current.checked;

                onCreate({
                    name,
                    completed,
                });
            }}
        >
            <div>
                <label>
                    Name: <input ref={nameRef} type="text" name="name" />
                </label>
            </div>
            <div>
                <label>
                    Completed: <input ref={completedRef} type="checkbox" name="completed" />
                </label>
            </div>
            <div style={{ color: 'red' }} hidden={!error}>
                Name cant be empty
            </div>
            <button type="submit">Create skill</button>
        </form>
    );
});

export default CreateSkill;
