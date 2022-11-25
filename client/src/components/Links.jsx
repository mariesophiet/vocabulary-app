import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    Learn your Vocabulary
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/vocabulary/list" className="nav-link">
                                List All Words
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/vocabulary/create" className="nav-link">
                                Create New Word
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/vocabulary/learn" className="nav-link">
                                Learn Vocabulary
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links