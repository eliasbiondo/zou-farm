import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    min-width: 30rem;
    height: 35rem;
    margin: 0rem 1rem;
    margin-bottom: 10rem;
    padding: 6.5rem 4.8rem 0rem 4.8rem;
    background-color: ${props => props.bgcolor};
    border-radius: 0.5rem;

    box-shadow: ${props => props.boxshadow == 'right' ? '10px 20px 30px rgba(231, 231, 231, 0.74)' : props.boxshadow == 'left' ? '-10px 20px 30px rgba(231, 231, 231, 0.74)' : '0px 20px 30px rgba(231, 231, 231, 0.74)'};
`

const CardTitle = styled.h3`
    font-size: 1.8rem;
    font-weight: bold;
    color: ${props => props.textcolor};
    margin-top: 2.1rem;
    margin-bottom: 1.5rem;
`

const CardDescription = styled.p`
    font-size: 1.6rem;
    font-weight: 200;
    line-height: 2.4rem;
    color: ${props => props.textcolor};
`

export function Card(props) {
    return (
        <CardStyle bgcolor={props.bgcolor} boxshadow={props.boxshadow}>
            <img src={props.iconsrc} alt={props.iconalt}/>
            <CardTitle textcolor={props.textcolor}>{props.title}</CardTitle>
            <CardDescription textcolor={props.textcolor}>{props.description}</CardDescription>
        </CardStyle>
    )

}