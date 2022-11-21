import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'
import '../App.css'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
    text-align: center;
`
const Next = styled.div`
    cursor: pointer;
    padding: 20px;
    background-color: pink;
`
const Check = styled.div`
    cursor: pointer;
    padding: 20px;
    background-color: #FF62DF;
`

const Lang = styled.div`
    padding:100px;
    background-color:#decddd;
    font-size: 40px;
`

class VocabularyLearn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            words: [],
            current: '',
            index: 1,
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true,
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
                <div class="row">
                    <div class="column">
                        <h1>German</h1>
                        <Lang id="ger">{word}</Lang>
                    </div>
                    <div class="column">
                        <h1>Spanish</h1>
                        <Lang id="esp">Fill</Lang>
                    </div>
                </div>
                
                <div class="row">
                    <div class="column">
                        <Check>Check</Check>
                    </div>
                    <div class="column">
                        <Next onClick={this.handleClickNext.bind(this)}>Next Word</Next>
                    </div>
                </div>
            </Wrapper>
                
        )
    }
}

export default VocabularyLearn