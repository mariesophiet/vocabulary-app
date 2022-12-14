import React, { Component } from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import Links from './Links'

import '../App.css'

const Container = styled.div.attrs({
    className: 'container',
})`
min-width: 100%;
--bs-gutter-x: 0px;`

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-sm navbar-dark bg-dark',
})`
    margin-bottom: 20 px;
`

class NavBar extends Component {
    render() {
        return (
            <Container>
                <Nav>
                    <Logo />
                    <Links />
                </Nav>
            </Container>
        )
    }
}

export default NavBar