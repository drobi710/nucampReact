import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
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
                    {/* kind of like case keywords in JS switch statement if passing state data as props good to use render */}
                    <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} />} />
                    {/* telling our App to watch the browser address bar and whenever the Route matches contactus then show Contact component */}
                    <Route exact path='/contactus' component={Contact} />
                    {/* Redirect acts as a catch all kinda like default in switch statement */}
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default Main;