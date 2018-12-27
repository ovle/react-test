import React from 'react';
import './App.css';

import {Redirect, Route, Router} from 'react-router';
import {createBrowserHistory} from 'history';

import HomePage from "./app/home/HomePage";
import NewsPage from "./app/news/NewsPage";
import ProfilePage from "./app/profile/ProfilePage";
import LoginPage from "./app/login/LoginPage";
import Header from "./app/Header";
import connect from "react-redux/es/connect/connect";


const App = ({ isLoggedIn }) => {
    return (
        <div className="App">

                <Router history={createBrowserHistory()}>
                    <div>
                        <Header/>

                        <Route path="/home" component={HomePage}/>
                        <Route path="/news" component={NewsPage}/>
                        <Route path="/profile" render={() => (
                            isLoggedIn ? <ProfilePage/> : <Redirect to="/login"/>
                        )}/>
                        <Route path="/login" component={LoginPage}/>
                    </div>
                </Router>

        </div>
    )
};


const mapStateToProps = (state) => { return { isLoggedIn: state.isLoggedIn }};

export default connect(
    mapStateToProps
)(App);