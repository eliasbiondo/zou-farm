import React from 'react';
import styled from 'styled-components';
import { Paragraph } from './Paragraph';
import { Subtitle } from './Subtitle';
import { NewPostCard } from './NewPostCard'

const NewPostsStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const PostCards = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export function NewPosts() {
    return (
        <NewPostsStyle>
            <Subtitle margintop="8rem" marginbottom="2rem">Invest on you convenience</Subtitle>
            <Paragraph maxwidth="70rem" marginbottom="5rem">Autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</Paragraph>
            <PostCards>
                <NewPostCard newsimage="/images/first-post-image.png" newscategory="New farm today" newstitle="Short terms investment" newsdescription="Invest in farms that will be ready for harvest in 3-18 months" btntext="Browse farm"/>

                <NewPostCard newsimage="/images/second-post-image.png" newscategory="Fully funded" newstitle="Long terms
                investment" newsdescription="Consider farms that have long term investment program." btntext="Learn more"/>
            </PostCards>
        </NewPostsStyle>

    )
}