import styled from 'styled-components';

export const HorizontalRule = styled.div`
    width: 100%;
    height: 0.2rem;
    margin-top: ${props => props.margintop || 'none'};
    margin-bottom: ${props => props.marginbottom || 'none'};
    background-color: #F7F7F7;
`