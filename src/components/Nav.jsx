import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0rem clamp(4rem, 5vw, 10rem);

    @media (max-width: 1060px) {
        display: none;
    }
`

