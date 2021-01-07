import React from 'react';
import styled from 'styled-components';
import { Button } from './Button'

const NewPostCardStyle = styled.div`
    min-width: 24rem;
    height: 45.5rem;
    padding: 4.8rem 7.2rem;
    margin-bottom: 5rem;
    border-radius: 0.5rem;
    background-image: linear-gradient(180deg, rgba(97, 118, 127, 0.0001) 0%, #324148 100%), url(${props => props.newsimage});
    background-size: cover;
    background-repeat: no-repeat
`

const NewsCategory = styled.p`
    position: relative;
    font-size: 1.4rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.28rem;
    line-height: 2.4rem;
    color: var(--primary);
    margin-bottom: 6rem;

    &::after {
        content: "";
        position: absolute;
        width: 5.6rem;
        height: 0.4rem;
        left: 0;
        top: 3rem;
        background-color: white;
        border-radius: 0.2rem;
    }
`

const NewsTitle = styled.h1`
    font-size: clamp(2rem, 5vw, 3.1rem);
    font-weight: bold;
    line-height: clamp(2.9rem, 5vw, 4.0rem);
    max-width: 24.8rem;
    color: white;
    margin-bottom: 1rem;
`

const NewsDescription = styled.p `
    font-size: 1.6rem;
    font-weight: 400;
    line-height: clamp(2rem, 5vw, 2.4rem);
    max-width: 24.8rem;
    margin-bottom: 3rem;
    color: white;
`

export function NewPostCard(props) {
    return (
        <NewPostCardStyle newsimage={props.newsimage}>
            <NewsCategory>{props.newscategory}</NewsCategory>
            <NewsTitle>{props.newstitle}</NewsTitle>
            <NewsDescription>{props.newsdescription}</NewsDescription>
            <Button color="var(--primary)" bgcolor="white">{props.btntext}</Button>
        </NewPostCardStyle>
    )
}