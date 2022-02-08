import { memo, useReducer, useRef } from 'react';

type UseReducerProps = {};

interface TeamMemberModel {
    id: string;
    name: string;
}

interface TeamModel {
    team: {
        members: TeamMemberModel[];
    };
}

const initialState: TeamModel = {
    team: {
        members: [{ id: '0', name: 'Max' }],
    },
};

const reducer = (state = initialState, action: { type: string; payload: any }): typeof initialState => {
    switch (action.type) {
        case 'ADD_MEMBER': {
            const newMember = action.payload;
            const newTeamMembers = [...state.team.members, newMember];

            return {
                ...state,
                team: {
                    members: newTeamMembers,
                },
            };
        }

        case 'REMOVE_MEMBER': {
            const removeMember = action.payload;
            const newTeamMembers = state.team.members.filter(
                (member: TeamMemberModel) => member.id !== removeMember.id
            );

            return {
                ...state,
                team: {
                    members: newTeamMembers,
                },
            };
        }

        default: {
            return state;
        }
    }
};

const addMemberAction = (member: TeamMemberModel) => ({
    type: 'ADD_MEMBER',
    payload: member,
});

const removeMemberAction = (member: TeamMemberModel) => ({
    type: 'REMOVE_MEMBER',
    payload: member,
});

const UseReducer = memo<UseReducerProps>(() => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const nameInputRef = useRef<HTMLInputElement>(null!);

    return (
        <>
            <form
                name='formName'
                onSubmit={e => {
                    e.preventDefault();
                    const id = new Date().getTime() + '';
                    const name = nameInputRef.current.value;

                    if (name) {
                        dispatch(addMemberAction({ id, name }));
                        nameInputRef.current.value = '';
                    }
                }}
            >
                <input ref={nameInputRef} name='name' type='text' />
                <button type='submit'>Submit</button>
            </form>
            <ul>
                {state?.team?.members.map(({ id, name }) => (
                    <li key={id}>
                        {name}{' '}
                        <a
                            onClick={e => {
                                e.preventDefault();
                                dispatch(removeMemberAction({ id, name }));
                            }}
                            href='/'
                        >
                            Remove
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
});

export default UseReducer;
