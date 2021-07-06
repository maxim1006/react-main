import React, { memo } from 'react';

export default memo(({ onClick }) => (
    <div className="skills-controls">
        Filter:
        <button className="skills-control" onClick={_ => onClick('done')}>
            Done
        </button>
        <button className="skills-control" onClick={_ => onClick('in progress')}>
            In progress
        </button>
        <button className="skills-control" onClick={_ => onClick('new')}>
            New
        </button>
        <button className="skills-control" onClick={_ => onClick('clear')}>
            Clear filters
        </button>
    </div>
));
