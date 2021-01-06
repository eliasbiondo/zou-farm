import styled from 'styled-components';

export const Subtitle = styled.h2`
    font-size: 3.6rem;
    font-weight: bold;
    line-height: 6.4rem;
    color: ${props => props.color || 'black'};
    text-align: ${props => props.textalign || 'left'}
`