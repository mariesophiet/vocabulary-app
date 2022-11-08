import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class VocabularyInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            lang_1: '',
            lang_2: '',
            level: '',
            repeat: '',
            group: '',
        }
    }

    handleChangeInputLang1 = async event => {
        const lang_1 = event.target.value
        this.setState({ lang_1 })
    }

    handleChangeInputLang2 = async event => {
        const lang_2 = event.target.value
        this.setState({ lang_2 })
    }

    handleChangeInputLevel = async event => {
        const level = event.target.value
        this.setState({ level })
    }

    handleChangeInputRepeat = async event => {
        const repeat = event.target.value
        this.setState({ repeat })
    }

    handleChangeInputGroup = async event => {
        const group = event.target.value
        this.setState({ group })
    }

    handleIncludeWord = async () => {
        const { lang_1, lang_2, level, repeat, group } = this.state
        const payload = { lang_1, lang_2, level, repeat, group }

        await api.createWord(payload).then(res => {
            window.alert(`Word inserted successfully`)
            this.setState({
                lang_1: '',
                lang_2: '',
                level: '',
                repeat: '',
                group: ''
            })
        })
    }

    render() {
        const { lang_1, lang_2, level, repeat, group } = this.state
        return (
            <Wrapper>
                <Title>Create Word</Title>

                <Label>Deutsch: </Label>
                <InputText
                    type="text"
                    value={lang_1}
                    onChange={this.handleChangeInputLang1}
                />

                <Label>Spanisch: </Label>
                <InputText
                    type="number"
                    value={lang_2}
                    onChange={this.handleChangeInputRating}
                />

                <Label>Level: </Label>
                <InputText
                    type="number"
                    min="1"
                    max="5"
                    pattern="[0-5]"
                    value={level}
                    onChange={this.handleChangeInputLevel}
                />

                <Label>Repeat: </Label>
                <InputText
                    type="date"
                    value={repeat}
                    onChange={this.handleChangeInputRepeat}
                />

                <Label>Group: </Label>
                <InputText
                    type="text"
                    value={group}
                    onChange={this.handleChangeInputGroup}
                />

                <Button onClick={this.handleIncludeWord}>Add Word</Button>
                <CancelButton href={'/vocabulary/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default VocabularyInsert