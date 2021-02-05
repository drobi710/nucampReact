import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CAMPSITES } from '../shared/campsites';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
        };
    }

    render() {
        
        const HomePage = () => {
            return (
                <Home />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    {/* any traffic going to home goes to the HomePage Component */}
                    <Route path='/home' component={HomePage} />;
                    {/* kind of like case keywords in JS switch statement */}
                    <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} />} />
                    {/* Redirect acts as a catch all kinda like default in switch statement */}
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default Main;