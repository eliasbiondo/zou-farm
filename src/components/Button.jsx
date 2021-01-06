import styled from 'styled-components';

export const Button = styled.button`
    width: ${props => props.width};
    height: ${props => props.height};
    padding: 0.8rem 2.4rem;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 3.2rem;
    color: ${props => props.color};
    margin-top: ${props => props.margintop};
    background-color: ${props => props.bgcolor};
    border-radius: 5px;
    cursor: pointer;
    filter: drop-shadow(0px 13px 20px rgba(118, 196, 125, 0.411204));

    &:hover {
        background-color: ${props => props.hoveredbgcolor}
    }
` 