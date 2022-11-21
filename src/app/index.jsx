import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { VocabularyList, VocabularyInsert, VocabularyUpdate, VocabularyLearn } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/vocabulary/list" exact component={VocabularyList} />
                <Route path="/vocabulary/create" exact component={VocabularyInsert} />
                <Route
                    path="/vocabulary/update/:id"
                    exact
                    component={VocabularyUpdate}
                />
                <Route path="/vocabulary/learn" exact component={VocabularyLearn} />
            </Switch>
        </Router>
    )
}

export default App
