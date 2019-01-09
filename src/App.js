import React from 'react';
import './App.css';

import {Redirect, Route, Switch } from 'react-router';
import {history} from './configureStore';

import HomeComponent from "./app/home/HomePage";
import NewsPageContainer from "./app/news/NewsPageContainer";
import ProfilePage from "./app/profile/ProfilePage";
import LoginPage from "./app/login/LoginPage";
import Header from "./app/Header";
import connect from "react-redux/es/connect/connect";
import { ConnectedRouter } from 'connected-react-router'


const App = ({ isLoggedIn }) => {
    return (
        <div className="App">
                <ConnectedRouter history={history}>
                    <div>
                        <Header/>
                        <Switch>
                            <Route path="/" exact component={HomeComponent}/>
                            <Route path="/news" component={NewsPageContainer}/>
                            <Route path="/profile" render={() => (
                                isLoggedIn ? <ProfilePage/> : <Redirect to="/login"/>
                            )}/>
                            <Route path="/login" render={() => (
                                isLoggedIn ? <Redirect to="/profile"/> : <LoginPage/>
                            )}/>
                        </Switch>
                    </div>
                </ConnectedRouter >
        </div>
    )
};


const mapStateToProps = (state) => { return { isLoggedIn: state.isLoggedIn }};

export default connect(
    mapStateToProps
)(App);