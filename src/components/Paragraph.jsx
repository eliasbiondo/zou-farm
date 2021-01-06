import styled from 'styled-components';

export const Paragraph = styled.p`
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 3.2rem;
    color: ${props => props.color};
    margin-top: ${props => props.margintop};
    margin-bottom: ${props => props.marginbottom};
    text-align: ${props => props.align || 'left'};
` 