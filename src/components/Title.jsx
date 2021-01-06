import styled from 'styled-components';

export const Title = styled.h1`
    font-size: clamp(3.8rem, 10vw, 4.6rem);
    font-weight: bold;
    line-height: 6.4rem;
    color: ${props => props.color};
    text-align: ${props => props.textalign || 'left'}
` 