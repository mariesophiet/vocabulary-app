import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    width: 80%;
    max-width: 1500px;
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

class WordUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            lang_1: '',
            lang_2: '',
            level: '',
            repeat: '',
            group: ''
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

    handleUpdateWord = async () => {
        const { id, lang_1, lang_2, level, repeat, group } = this.state
        const payload = { lang_1, lang_2, level, repeat, group }

        await api.updateWord(id, payload).then(res => {
            window.alert(`Word updated successfully`)
            this.setState({
                lang_1: '',
                lang_2: '',
                level: '',
                repeat: '',
                group: ''
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const word = await api.getWordById(id)

        this.setState({
            lang_1: word.data.data.lang_1,
            lang_2: word.data.data.lang_2,
            level: word.data.data.level,
            repeat: word.data.data.repeat,
            group: word.data.data.group
        })
    }

    render() {
        const { lang_1, lang_2, level, repeat, group } = this.state
        return (
            <Wrapper className="position-absolute top-50 start-50 translate-middle">
                <Title>Create Word</Title>

                <Label>Lang1: </Label>
                <InputText
                    type="text"
                    value={lang_1}
                    onChange={this.handleChangeInputLang1}
                />

                <Label>Lang2: </Label>
                <InputText
                    type="text"
                    value={lang_2}
                    onChange={this.handleChangeInputLang2}
                />

                <Label>Level: </Label>
                <InputText
                    type="number"
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

                <Button onClick={this.handleUpdateWord}>Update Word</Button>
                <CancelButton href={'/vocabulary/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default WordUpdate