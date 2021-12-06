import React from 'react';

export function isKeyboardEvent(event: React.SyntheticEvent): event is React.KeyboardEvent {
    return event.type === 'keydown';
}

export function isMouseEvent(event: React.SyntheticEvent): event is React.MouseEvent {
    return event.type === 'click';
}
