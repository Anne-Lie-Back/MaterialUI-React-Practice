import React from 'react'
import { Container, CssBaseline, Typography} from '@material-ui/core'
import NavBar from './NavBar'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import FormPage from './FormPage'
import Other from './Other'

export default function Layout(){
    return(
        
            <Switch>
                <>
                <CssBaseline />
                    <Container maxWidth="sm">
                        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
                        <NavBar />
                            <Route exact path = '/' render={() => <Home/> }/>
                            <Route path = '/FormPage' render={() => <FormPage/> }/>
                            <Route path = '/Other' render={() => <Other/> }/>
                            
                        </Typography>
                    </Container>
                    </>
            </Switch>
        
    )
}
