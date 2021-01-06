import React from 'react';
import styled from 'styled-components';
import {Subtitle} from '../components/Subtitle'
import { Paragraph } from './Paragraph';
import { FlexRow } from './FlexRow';
import { Card } from './Card';
import { ResponsiveGrid } from './ResponsiveGrid';

const OpportunitiesStyle = styled.div`
    width: 100%;
    margin-top: clamp(0rem, 4vw, 15rem);
    display: flex;
    flex-direction: column;
    align-items: center;
`

export function Opportunities(props) {
    return (
        <OpportunitiesStyle>
            <Subtitle textalign="center">New Opportunities</Subtitle>
            <Paragraph align="center" marginbottom="10rem" width="56rem">We are the first and the only crowdfunding platform enabling you to help finance our farmers    </Paragraph>
            <ResponsiveGrid>
                <Card iconsrc="/images/farmers-icon.svg" iconalt="Farmers icon" title="Connect with our 
                farmers" description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione" textcolor="black" bgcolor="white" boxshadow="right"/>

                <Card iconsrc="/images/ladder-icon.svg" iconalt="Ladder icon" title="Grow your bussiness" description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore" textcolor="white" bgcolor="var(--primary)" boxshadow="center"/>

                <Card iconsrc="/images/ecohand-icon.svg" iconalt="Eco icon" title="Social Impact 
                Invesment" description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque " textcolor="black" bgcolor="white" boxshadow="left"/>
            </ResponsiveGrid>
        </OpportunitiesStyle>

    )
}