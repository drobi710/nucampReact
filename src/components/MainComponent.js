import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CAMPSITES } from '../shared/campsites';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            comments: COMMENTS,
            partners: PARTNERS,
            promotions: PROMOTIONS
        };
    }

    render() {
        
        const HomePage = () => {
            return (
                <Home 
                    campsite={this.state.campsites.filter(campsite => campsite.featured)[0]}
                    promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                    partner={this.state.partners.filter(partner => partner.featured)[0]}
                />
            );
        }

        const CampsiteWithId = ({match}) => {
            return (
                <CampsiteInfo 
                    campsite={this.state.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
                    comments={this.state.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)} />
            )
        }

        return (
            <div>
                <Header />
                <Switch>
                    {/* any traffic going to home goes to the HomePage Component */}
                    <Route path='/home' component={HomePage} />;
                    {/* kind of like case keywords in JS switch statement if passing state data as props good to use render */}
                    <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} />} />
                    {/* ":" tells the router that what follows "/" is going to be a parameter and puts it inside the property campsiteId, the routecomponent itself stores an object stores match in its state which has as a property and object named params and campsiteId gets stored as a property of that params object, route renders component CampsiteWithId, the routes matched object gets passed automatically as a prop to component */}
                    <Route path='/directory/:campsiteId' component={CampsiteWithId} />
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