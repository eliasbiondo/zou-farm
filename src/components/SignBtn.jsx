import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const SignBtn = styled(Link)`
    width: 13rem;
    height: 4.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: none;
    font-size: 1.6rem;
    font-weight: regular;
    color: white;
    border: 0.2rem solid white;
    border-radius: 0.5rem;
    margin: 0rem 1.5rem;
    padding-left: 2rem;

    background: url('/images/sign-icon-white.svg') no-repeat 2rem center;
    background-size: 2rem;


    transition: background-image 0.5s;
    transition: transform 0.5s;

    &:hover {
        transform: scale(1.2);
        background-color: white;
        color: black;

        background: white url('/images/sign-icon-black.svg') no-repeat 2rem center;
        background-size: 2rem;
    }

    & p {
        margin-left: 0.8rem;
    }

    @media (max-width: 1060px) {
        &.menu {
            display: none;
        }
    }
`