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
    line-height: 250px;
    background-color:#decddd;
    font-size: 40px;
    height: 250px;
`

const Show = styled.div`
    padding: 20px;
    background-color: red;
    cursor: pointer;
`

class VocabularyLearn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            words: [],
            current: '',
            translation: '',
            index: 0,
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true,
         })
         // get all words that have repeat date == today
        await api.getVocabularyByDate().then(words => {
            this.setState({
                words: words.data.data,
                // set current always to the first word in the beginning
                current: words.data.data[0].lang_1,
                index: 0,
                translation: '',
                isLoading: false,
            })
        })
    }

    // load the next word from vocabulary
    handleClickNext(){        
         // check if index gets too big -> we are at the end of our vocabulary list, reload
         if (!this.state.words[this.state.index + 1]){
            window.alert(
                `You have reached the end of your vocabulary list!`,
            )
            this.setState({
                index: 0,
                translation: '',
                current: this.state.words.data.data[0].lang_1
            })
            
        }
        else {
        // clear possible translation from word before
        this.setState({
            current: this.state.words[this.state.index + 1].lang_1,
            index: this.state.index + 1,
            translation: ''});    
        }
    }

    // load translation of the current word
    handleClickShow() {
        this.setState({translation: this.state.words[this.state.index].lang_2});
    }

    
    render() {
        const word = this.state.current
        const transl = this.state.translation
        console.log(word)

        return (
            <Wrapper>
                <div class="row">
                    <div class="column">
                        <h1>German</h1>
                        <Lang id="ger">{word}</Lang>
                    </div>
                    <div class="column">
                        <h1>Spanish</h1>
                        <Lang id="esp">{transl}</Lang>
                    </div>
                </div>
                
                <div class="row">
                    <div class="column_3">
                        <Check>Check</Check>
                    </div>
                    <div class="column_3">
                        <Next onClick={this.handleClickNext.bind(this)}>Next Word</Next>
                    </div>
                    <div class="column_3">
                        <Show onClick={this.handleClickShow.bind(this)}>Show Translation</Show>
                    </div>
                </div>
            </Wrapper>
        )
    }
}

export default VocabularyLearn