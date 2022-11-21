import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`
const Next = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

class VocabularyLearn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            words: [],
            current: '',
            index: 0,
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true,
                        index: 0,
         })

        await api.getVocabulary().then(words => {
            this.setState({
                words: words.data.data,
                current: words.data.data[0].lang_1,
                isLoading: false,
            })
        })
    }

    handleClickNext(){
        this.setState({index: this.state.index + 1});

         // check if index gets too big -> we are at the end of our vocabulary list, reload
         if (!this.state.words[this.state.index]){
            window.confirm(
                `You have reached the end of your vacabulary list!`,
            )
            window.location.reload()
        }
        this.setState({current: this.state.words[this.state.index].lang_1});
        
       
    }
    
    render() {
        const word = this.state.current
        console.log(this.state.current)
        return (
            <Wrapper>
                <div>
                    <h1>{word}</h1>
                    <button onClick={this.handleClickNext.bind(this)}>Next Word</button>
                </div>
            </Wrapper>
                
        )
    }
}

export default VocabularyLearn