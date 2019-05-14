import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Users from '../pages/UserQuery'
import GlobalStyle from '../styles/global'
import Header from './Header'
import Error from './404'

function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Switch>
                <Route exact path='/' component={Users} />
                <Route exact path='/user/:id' />
                <Route component={Error} />
            </Switch>
        </>
    )
}

export default App
