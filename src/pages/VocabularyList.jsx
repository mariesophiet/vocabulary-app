import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class VocabularyList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            words: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getVocabulary().then(words => {
            this.setState({
                words: words.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { words: words, isLoading } = this.state
        console.log('TCL: VocabularyList -> render -> words', words)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Lang_1',
                accessor: 'lang_1',
                filterable: true,
            },
            {
                Header: 'Lang_2',
                accessor: 'lang_2',
                Cell: props => <span>{props.value.join(' / ')}</span>,
            },
            {
                Header: 'Level',
                accessor: 'level',
                filterable: true,
            },
            {
                Header: 'Repeat',
                accessor: 'repeat',
                filterable: true,
            },
            {
                Header: 'Group',
                accessor: 'group',
                Cell: props => <span>{props.value.join(' / ')}</span>,
            },
        ]

        let showTable = true
        if (!words.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={words}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default VocabularyList