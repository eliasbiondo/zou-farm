import styled from 'styled-components';

export const Subtitle = styled.h2`
    font-size: 3.6rem;
    font-weight: bold;
    line-height: 5.4rem;
    margin-top: ${props => props.margintop || 'none'};
    margin-bottom: ${props => props.marginbottom || 'none'};
    color: ${props => props.color || 'black'};
    text-align: ${props => props.align || 'left'}
`