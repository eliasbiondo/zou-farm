import React from 'react';
import styled from 'styled-components';
import {Title} from '../components/Title';
import {Paragraph} from './Paragraph';
import {Button} from '../components/Button'

const BannerStyle = styled.header`
    margin-top: ${props => props.margintop};
    margin-bottom: ${props => props.marginbottom};
    width: clamp(20rem, 40vw, 60rem);
`

export function MainBanner(props) {
    return (
        <BannerStyle margintop="5rem" marginbottom="15rem">
            <Title color="black">A New Way to Invest in Agriculture</Title>
            <Paragraph color="black" margintop="2rem">Zou provides farmes, ranchers, private foresters, and agricultural producers with online self service applications and educational materials.</Paragraph>
            <Button color="white" margintop="2rem" bgcolor="var(--primary)" hoveredbgcolor="var(--hovered)">Invest Now</Button>
        </BannerStyle>
    )
}

