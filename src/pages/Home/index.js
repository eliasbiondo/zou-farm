import React from 'react';
import {Link} from 'react-router-dom'
import {Container} from '../../components/Container'
import {Section} from '../../components/Section'
import {Menu} from '../../components/Menu'
import {Logo} from '../../components/Logo'
import {Nav} from '../../components/Nav'
import {Ul} from '../../components/Ul'
import {Li} from '../../components/Li'
import {NavLink} from '../../components/NavLink'

function Home(){
    return (
       <Section>
           <Container>
                <Menu>
                    <Logo/>
                    <Nav>
                        <Ul>
                            <Li active>
                                <NavLink to='/'>
                                Home
                                </NavLink>
                            </Li>
                        </Ul>
                    </Nav>
                </Menu>
           </Container>
       </Section>
    )
}

export default Home;