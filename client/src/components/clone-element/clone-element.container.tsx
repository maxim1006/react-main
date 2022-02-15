import { memo } from 'react';
import CloneElement from './clone-element.component';

type CloneElementContainerProps = {};

const CloneElementContainer = memo<CloneElementContainerProps>(function CloneElementContainer() {
    return (
        <CloneElement disabled>
            <input type='text' defaultValue='Disabled' />
        </CloneElement>
    );
});

export default CloneElementContainer;
