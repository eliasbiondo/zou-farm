import styled from 'styled-components';

export const Section = styled.div`
    display: flex;
    justify-content: center;

    ${props => props.menu ? `

        &::before {
            content: "  ";
            position: absolute;
            width: clamp(28rem, 70vw, 300rem);
            height: clamp(45rem, 44vw, 300rem);
            right: 0;
            top: 0;
            z-index: -1;
            background: url('/images/main_bg.svg') no-repeat top right;
            background-size: clamp(40%, 60vw, 200%);
        }

        @media (max-width: 1060px) {
            &::before {
            height: clamp(45rem, 65vw, 300rem);
            background-size: clamp(40%,85vw,300%);
    }

    ` : ``}

    ${props => props.banner ? `
    
        &::before {
            content: "  ";
            position: absolute;
            width: clamp(28rem,70vw,300rem);
            height: clamp(45rem, 44vw, 300rem);
            left: 0;
            top: 20rem;
            z-index: -1;
            background: url('/images/bg-leafs.svg') no-repeat left center;
            background-size: clamp(5%, 10vw, 40%);
        }

    ` : ``}

`

