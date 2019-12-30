import {Link} from "react-router-dom";
import React, {memo} from "react";

export default memo(({stream, currentUserId, onDeleteClick}) => {
    const {userId, id} = stream;

    if (userId === currentUserId) {
        return (
            <div className="stream-list__controls">
                <Link to={`/stream/edit/${id}`}>Edit</Link>
                <button
                    type="button"
                    onClick={onDeleteClick}
                >
                    Delete
                </button>
            </div>
        );
    }
});
