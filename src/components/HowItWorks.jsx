import React from 'react';
import styled from 'styled-components';
import { Paragraph } from './Paragraph';
import { Subtitle } from './Subtitle';

const HowItWorksStyle = styled.div`
    margin-top: 10rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10rem clamp(4rem, 20vw, 24.6rem);
    background: url('/images/howitworks-bg.svg') no-repeat center center;
    background-size: cover;
    border-radius: 0.5rem;


`

const Slide = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: url('/images/howitworks-line.svg') repeat-x center 7.5rem;

`

const SlideBtn = styled.button`
    min-width: 7.2rem;
    height: 7.2rem;
    margin-top: 4rem;
    border: 0.2rem solid ${props => props.active ? '#EDEDED' : "#B3DCB6"};
    color: ${props => props.active ? '#66BB6A' : "#B3DCB6"};
    background-color: ${props => props.active ? '#EDEDED' : "#66BB6A"};
    border-radius: 3.6rem;
    cursor: pointer;

`

const StepDescription = styled.div`
    width: 100%;
    margin-top: 12rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 2rem;
`

const StepTitle = styled.h3`
    flex: 1;
    min-width: 15.5rem;
    font-size: 2.4rem;
    font-weight: bold;
    line-height: 3.2rem;
    color: white;

    text-align: center;
`

const StepParagraph = styled.p`
    flex: 1;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2.4rem;
    color: white;
    text-align: center;
`

export function HowItWorks(){
    return (
        <HowItWorksStyle>
            <Subtitle color="white" align="center">How it works</Subtitle>
            <Paragraph color="white" align="center" margintop="2rem" marginbottom="2rem">Take your pick from the supply chain and participate in agribusiness projects that are backed up not only by Zou, but also by the best land, family heritage, innovation and overall superior expertise.</Paragraph>
            <Slide>
                <SlideBtn active>01</SlideBtn>
                <SlideBtn>02</SlideBtn>
                <SlideBtn>03</SlideBtn>
                <SlideBtn>04</SlideBtn>
            </Slide>
            <StepDescription>
                <StepTitle>Select your farmshare and complete reservation form.</StepTitle>
                <StepParagraph>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere</StepParagraph>
            </StepDescription>
        </HowItWorksStyle>
    )
}