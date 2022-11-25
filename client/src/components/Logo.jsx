import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../logo_books_gray.png'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})`
padding: 5px;
margin-left: 10px;`

class Logo extends Component {
    render() {
        return (
            <Wrapper href="https://sambarros.com">
                <img src={logo} width="50" height="50" alt="sambarros.com" />
            </Wrapper>
        )
    }
}

export default Logo