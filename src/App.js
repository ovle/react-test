import React from 'react';
import './App.css';

import {Redirect, Route, Router} from 'react-router';
import {Provider} from "react-redux";
import {createBrowserHistory} from 'history';
import ls from 'local-storage';

import HomePage from "./app/home/HomePage";
import NewsPage from "./app/news/NewsPage";
import ProfilePage from "./app/profile/ProfilePage";
import LoginPage from "./app/login/LoginPage";
import {USER_AUTHORIZED_KEY} from "./utils/constants";
import Header from "./app/Header";


//todo
const userAuthorized = () => ls.get(USER_AUTHORIZED_KEY);

const App = ({ store }) => (
        <div className="App">
            <Provider store={store}>
                <Router history={createBrowserHistory()}>
                    <div>
                        <Header/>

                        <Route path="/home" component={HomePage}/>
                        <Route path="/news" component={NewsPage}/>
                        <Route path="/profile" render={() => (
                            userAuthorized() ? <ProfilePage/> : <Redirect to="/login"/>
                        )}/>
                        <Route path="/login" render={() => (
                            userAuthorized() ? <Redirect to="/profile"/> : <LoginPage/>
                        )}/>
                    </div>
                </Router>
            </Provider>
        </div>
);


export default App;
