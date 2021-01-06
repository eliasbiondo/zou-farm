import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavLink = styled(Link)`
    color: inherit;

    &:hover .logo-path {
        ${props => props.logo ? `fill: var(--hovered);` : ``}
    }
`

