import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
    display: inline-block;
    width: ${props => props.width};
    height: ${props => props.height};
    padding: 1.4rem 2.4rem;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 3.2rem;
    color: ${props => props.color};
    margin-top: ${props => props.margintop};
    background-color: ${props => props.bgcolor};
    border-radius: 5px;
    cursor: pointer;
    filter: ${props => props.filter};

    transition: transform 0.5s;

    &:hover {
        background-color: ${props => props.hoveredbgcolor};
        transform: scale(1.2);
    }
` 