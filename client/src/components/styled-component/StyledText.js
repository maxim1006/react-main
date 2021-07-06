import styled from 'styled-components';
import { memo } from 'react';

const Text = memo(styled.div`
    color: red;
    font-size: 28px;
    border: ${({ isActive }) => (isActive ? `1px solid #000` : `3px dotted green`)};
`);

export default Text;
