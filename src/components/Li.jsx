import styled, { createGlobalStyle } from 'styled-components';

export const Li = styled.li`
    display: flex;
    color: ${props => props.active ? '#66BB6A' : '#000'};;
    font-size: 1.6rem;
    font-weight: bold;
    margin-left: 3.2rem;

    &:hover {
        color: var(--hovered);
    }
`

