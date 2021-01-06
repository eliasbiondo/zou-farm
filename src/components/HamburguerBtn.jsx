import React from 'react'
import styled from 'styled-components'

const HamburgerMenuBtn = styled.button`

    display: none;

    @media (max-width: 1060px) {
    width: 5rem;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    }
`

const HamburguerMenuLine = styled.div`
    
        display: flex;
        width: 5rem;
        height: 0.5rem;
        background-color: white;
        border-radius: 0.5rem;

        & + & {
            margin-top: 1rem;

    }
`


export function HamburguerMenu(props){

    return (

        <HamburgerMenuBtn onClick={props.onClickFunction}>
                <HamburguerMenuLine/>
                <HamburguerMenuLine/>
                <HamburguerMenuLine/>
        </HamburgerMenuBtn>
    )
}