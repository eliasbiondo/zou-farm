import styled from 'styled-components'

export const Li = styled.li`
    display: flex;
    color: ${props => props.active ? '#66BB6A' : '#000'};;
    font-size: 1.6rem;
    font-weight: ${props => props.active ? 'bold' : 'regular'};
    margin-left: 3.2rem;

    &:hover {
        color: var(--hovered);
    }
`

