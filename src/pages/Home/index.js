import React from 'react';
import {Link} from 'react-router-dom'
import {Container} from '../../components/Container'
import {Section} from '../../components/Section'
import {Menu} from '../../components/Menu'
import {FlexRow} from '../../components/FlexRow'
import {Logo} from '../../components/Logo'
import {Nav} from '../../components/Nav'
import {Ul} from '../../components/Ul'
import {Li} from '../../components/Li'
import {NavLink} from '../../components/NavLink'
import {SignBtn} from '../../components/SignBtn'
import {HamburguerMenu} from '../../components/HamburguerBtn'
import {MainBanner} from '../../components/MainBanner'
import {Opportunities} from '../../components/Opportunities'
import { NewPosts } from '../../components/NewPosts';
import { HowItWorks } from '../../components/HowItWorks';

function Home(){

    const print = () => {
        console.log('passou!')
    }

    return (
        <div>
            <Section menu>
                <Container>
                        <Menu>
                            <FlexRow>
                                <Logo/>
                                <Nav>
                                    <Ul>
                                        <Li active>
                                            <NavLink to='/'>
                                            Home
                                            </NavLink>
                                        </Li>
                                        <Li>
                                            <NavLink to='/product'>
                                            Product
                                            </NavLink>
                                        </Li>
                                        <Li>
                                            <NavLink to='/team'>
                                            Team
                                            </NavLink>
                                        </Li>
                                        <Li>
                                            <NavLink to='/blog'>
                                            Blog
                                            </NavLink>
                                        </Li>
                                        <Li>
                                            <NavLink to='/contact'>
                                            Contact
                                            </NavLink>
                                        </Li>
                                    </Ul>
                                </Nav>
                            </FlexRow>
                            <FlexRow>
                                <SignBtn className='menu' to='/login'>
                                    <p>Sign Up</p>
                                </SignBtn>
                                <HamburguerMenu onClickFunction={print} />
                            </FlexRow>
                            
                        </Menu>
                </Container>
            </Section>

            <Section banner>
                <Container>
                    <MainBanner/>
                </Container>
            </Section>

            <Section opportunities>
                <Container>
                    <Opportunities />
                </Container>
            </Section>

            <Section newposts>
                <Container>
                    <NewPosts />
                </Container>
            </Section>
            <Section>
                <Container>
                    <HowItWorks />
                </Container>
            </Section>
       </div>
       
    )
}

export default Home;